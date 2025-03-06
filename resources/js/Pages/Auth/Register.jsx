import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        age: '',
        weight: '',
        physique_structure: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Hunter Registration - Solo Fitness" />

            <div className="p-6 bg-gray-800 border border-green-500 shadow-lg shadow-green-500/50 rounded-lg">
                <h1 className="text-2xl font-bold text-green-400 mb-4 text-center">
                    Register as a Hunter
                </h1>
                <p className="text-green-400 mb-6 text-center">
                    The System requires your stats, Hunter.
                </p>

                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                            <InputLabel
                                htmlFor="name"
                                value="Hunter Name"
                                className="text-green-400"
                            />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2 text-red-500" />
                        </div>

                        {/* Email Field */}
                        <div>
                            <InputLabel
                                htmlFor="email"
                                value="Hunter ID (Email)"
                                className="text-green-400"
                            />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2 text-red-500" />
                        </div>

                        {/* Password Field */}
                        <div>
                            <InputLabel
                                htmlFor="password"
                                value="Access Code (Password)"
                                className="text-green-400"
                            />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2 text-red-500" />
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Access Code"
                                className="text-green-400"
                            />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2 text-red-500"
                            />
                        </div>

                        {/* Age Field */}
                        <div>
                            <InputLabel
                                htmlFor="age"
                                value="Age"
                                className="text-green-400"
                            />
                            <TextInput
                                id="age"
                                type="number"
                                name="age"
                                value={data.age}
                                className="mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500"
                                onChange={(e) => setData('age', e.target.value)}
                                required
                            />
                            <InputError message={errors.age} className="mt-2 text-red-500" />
                        </div>

                        {/* Weight Field */}
                        <div>
                            <InputLabel
                                htmlFor="weight"
                                value="Weight (kg)"
                                className="text-green-400"
                            />
                            <TextInput
                                id="weight"
                                type="number"
                                name="weight"
                                value={data.weight}
                                step="0.1"
                                className="mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500"
                                onChange={(e) => setData('weight', e.target.value)}
                                required
                            />
                            <InputError message={errors.weight} className="mt-2 text-red-500" />
                        </div>

                        {/* Physique Structure Field - Full Width */}
                        <div className="md:col-span-2">
                            <InputLabel
                                htmlFor="physique_structure"
                                value="Physique Structure"
                                className="text-green-400"
                            />
                            <select
                                id="physique_structure"
                                name="physique_structure"
                                value={data.physique_structure}
                                className="mt-1 block w-full bg-gray-700 border-green-500 text-white focus:ring-green-500 focus:border-green-500 rounded-md"
                                onChange={(e) => setData('physique_structure', e.target.value)}
                                required
                            >
                                <option value="" disabled>Select your build</option>
                                <option value="ectomorph">Ectomorph (Slim, lean)</option>
                                <option value="mesomorph">Mesomorph (Muscular, athletic)</option>
                                <option value="endomorph">Endomorph (Stocky, broader)</option>
                            </select>
                            <InputError
                                message={errors.physique_structure}
                                className="mt-2 text-red-500"
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex items-center justify-between">
                        <Link
                            href={route('login')}
                            className="text-sm text-green-400 underline hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Already a Hunter?
                        </Link>
                        <PrimaryButton
                            className={`ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={processing}
                        >
                            Join the Hunt
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}