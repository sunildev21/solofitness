import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Solo Fitness System" />
            <div className="min-h-screen bg-gray-900 text-white/50 flex flex-col relative overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')`, // Dungeon-like image
                    }}
                ></div>

                <div className="relative z-10 w-full max-w-5xl px-6 py-12 mx-auto">
                    {/* Header */}
                    <header className="text-center py-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-green-400 tracking-wide animate-pulse">
                            Solo Fitness System
                        </h1>
                        <p className="mt-4 text-xl text-gray-300">
                            Awaken your potential. Rank up. Conquer the impossible.
                        </p>
                    </header>

                    {/* Introduction */}
                    <section className="mb-16 bg-gray-800 border border-green-500 rounded-lg shadow-lg shadow-green-500/50 p-8">
                        <h2 className="text-3xl font-semibold text-green-400 mb-6">
                            Welcome to the System
                        </h2>
                        <p className="text-gray-100 leading-relaxed">
                            In a world where strength defines your fate, the Solo Fitness System is your gateway to power. 
                            Inspired by the legendary Sung Jin-Woo, this fitness tracker transforms your workouts into quests. 
                            Start as an E-Rank Hunter and climb to S-Rank—or beyond—through grit, sweat, and determination. 
                            The System watches. The System rewards. Will you rise to become a Monarch?
                        </p>
                    </section>

                    {/* Rules */}
                    <section className="mb-16 bg-gray-800 border border-green-500 rounded-lg shadow-lg shadow-green-500/50 p-8">
                        <h2 className="text-3xl font-semibold text-green-400 mb-6">
                            Rules of the Hunt
                        </h2>
                        <ul className="text-gray-100 space-y-4 list-disc list-inside">
                            <li>
                                <span className="font-semibold text-green-400">Rank Assignment:</span> Upon joining, input your age, weight, and physique (ectomorph, mesomorph, endomorph). The System calculates your starting rank from E to B.
                            </li>
                            <li>
                                <span className="font-semibold text-green-400">Daily Quests:</span> Each day, the System assigns fitness tasks based on your rank—push-ups, runs, or endurance trials. Complete them to earn XP.
                            </li>
                            <li>
                                <span className="font-semibold text-green-400">Level Up:</span> Accumulate XP to increase your level. Reach thresholds to ascend ranks (E → D → C → B → A → S).
                            </li>
                            <li>
                                <span className="font-semibold text-green-400">Penalty Zone:</span> Skip a daily quest, and face a penalty task—harder, unforgiving, just like the dungeons of old.
                            </li>
                        </ul>
                    </section>

                    {/* About the System */}
                    <section className="mb-16 bg-gray-800 border border-green-500 rounded-lg shadow-lg shadow-green-500/50 p-8">
                        <h2 className="text-3xl font-semibold text-green-400 mb-6">
                            About the System
                        </h2>
                        <p className="text-gray-100 leading-relaxed">
                            Forged in the spirit of "Solo Leveling," this app is more than a tracker—it’s a challenge. 
                            Built by a team of fitness enthusiasts and coders, the Solo Fitness System blends gamification with real-world gains. 
                            Whether you’re a novice lifting your first weight or a seasoned athlete chasing S-Rank, the System adapts to your journey. 
                            Join the hunt. Prove your worth.
                        </p>
                    </section>

                    {/* Call to Action */}
                    <div className="text-center mb-16">
                        <div className="flex justify-center gap-6">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-200 shadow-md shadow-red-500/50"
                                >
                                    Enter the Dungeon
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition duration-200 shadow-md shadow-green-500/50"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-200 shadow-md shadow-red-500/50"
                                    >
                                        Join the Hunt
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="text-center py-8 text-sm text-gray-400">
                        Solo Fitness System | Powered by the Shadows
                    </footer>
                </div>
            </div>
        </>
    );
}