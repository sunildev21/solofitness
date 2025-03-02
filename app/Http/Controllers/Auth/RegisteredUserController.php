<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Validate all fields from the form
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'age' => 'required|integer|min:13|max:100',
            'weight' => 'required|numeric|min:30|max:300',
            'physique_structure' => 'required|in:ectomorph,mesomorph,endomorph',
        ]);

        // Calculate initial rank based on age, weight, and physique_structure
        $rank = $this->calculateRank(
            $request->age,
            $request->weight,
            $request->physique_structure
        );

        // Create the user with all data
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'age' => $request->age,
            'weight' => $request->weight,
            'physique_structure' => $request->physique_structure,
            'rank' => $rank,
            'level' => 1, // Default starting level
            'xp' => 0,    // Default starting XP
        ]);

        // Fire the Registered event
        event(new Registered($user));

        // Log the user in
        Auth::login($user);

        // Redirect to dashboard
        $request->session()->flash('message', "Welcome, {$rank}-Rank Hunter! Your journey begins.");

        return redirect(route('dashboard', absolute: false));
    }

    /**
     * Calculate the initial Hunter Rank based on age, weight, and physique structure
     */
    private function calculateRank($age, $weight, $physique_structure): string
    {
        $score = 0;

        // Age: Younger users get a boost
        if ($age < 25) {
            $score += 20;
        } elseif ($age < 40) {
            $score += 10;
        }

        // Weight: Lighter assumed fitter (simplified proxy)
        if ($weight < 70) {
            $score += 15;
        } elseif ($weight < 100) {
            $score += 5;
        }

        // Physique Structure: Reflects natural fitness tendency
        if ($physique_structure === 'mesomorph') {
            $score += 30; // Naturally athletic
        } elseif ($physique_structure === 'ectomorph') {
            $score += 15; // Lean but less muscle
        } elseif ($physique_structure === 'endomorph') {
            $score += 10; // Stronger but heavier
        }

        // Assign rank based on score
        if ($score >= 60) {
            return 'B';
        } elseif ($score >= 40) {
            return 'C';
        } elseif ($score >= 20) {
            return 'D';
        }
        return 'E'; // Default rank
    }
}
