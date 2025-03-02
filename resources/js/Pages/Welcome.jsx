import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Solo Fitness System" />
            <div className="min-h-screen bg-gray-900 text-white/50 flex flex-col items-center justify-center relative overflow-hidden">
                {/* Background Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a3c34_0,#111827_70%)] opacity-80 z-0"></div>

                <div className="relative z-10 w-full max-w-4xl px-6 py-12 text-center">
                    {/* Header */}
                    <header className="mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-green-400 tracking-wide animate-pulse">
                            Solo Fitness System
                        </h1>
                        <p className="mt-4 text-xl text-gray-300">
                            Rise through the ranks. Conquer your limits. Become a legend.
                        </p>
                    </header>

                    {/* Main Content */}
                    <main className="bg-gray-800 border border-green-500 rounded-lg shadow-lg shadow-green-500/50 p-8">
                        <h2 className="text-3xl font-semibold text-green-400 mb-6">
                            Welcome, Hunter
                        </h2>
                        <p className="text-gray-100 mb-6">
                            Step into a world where every workout is a quest, every rep a step toward greatness. 
                            The System will assign you a rank—E to S—based on your strength, endurance, and will. 
                            Complete daily challenges, earn XP, and level up to become a true Monarch of fitness.
                        </p>
                        <div className="flex justify-center gap-6">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-200 shadow-md shadow-red-500/50"
                                >
                                    Enter the Dungeon (Dashboard)
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
                                        Register as a Hunter
                                    </Link>
                                </>
                            )}
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="mt-12 text-sm text-gray-400">
                        Powered by the System | Built with grit and code
                    </footer>
                </div>
            </div>
        </>
    );
}