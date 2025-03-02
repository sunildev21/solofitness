import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Dashboard() {
    const { auth, flash } = usePage().props;
    const user = auth.user;
    const [showFlash, setShowFlash] = useState(!!flash?.message); // Show flash if present
    const [isExiting, setIsExiting] = useState(false); // Track exit animation

    // Control flash visibility and exit animation
    useEffect(() => {
        if (flash?.message) {
            console.log('Flash message received:', flash.message); // Debug
            // Show for 2 seconds, then trigger exit animation
            const showTimer = setTimeout(() => {
                setIsExiting(true); // Start glitch exit
            }, 2000);
            // Hide completely after exit animation (0.8s after glitch starts)
            const hideTimer = setTimeout(() => {
                setShowFlash(false);
            }, 2800);
            return () => {
                clearTimeout(showTimer);
                clearTimeout(hideTimer);
            };
        }
    }, [flash?.message]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-green-400">
                    Hunter Dashboard
                </h2>
            }
        >
            <Head title="Hunter Dashboard" />

            {/* Flash Message with Glitch Effect */}
            {showFlash && flash?.message && (
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <div
                        className={`bg-gray-800 border border-green-500 text-green-400 p-4 rounded-lg shadow-lg shadow-green-500/50 ${
                            isExiting ? 'glitch-exit' : 'glitch-static'
                        }`}
                    >
                        {flash.message}
                    </div>
                </div>
            )}

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-gray-800 border border-green-500 shadow-lg shadow-green-500/50 sm:rounded-lg">
                        <div className="p-6 text-gray-100">
                            <h3 className="text-2xl font-bold text-green-400 mb-4">
                                Welcome, {user.name}, {user.rank}-Rank Hunter!
                            </h3>
                            <div className="space-y-2">
                                <p className="text-green-400">
                                    <span className="font-semibold">Rank:</span> {user.rank}
                                </p>
                                <p className="text-green-400">
                                    <span className="font-semibold">Level:</span> {user.level}
                                </p>
                                <p className="text-green-400">
                                    <span className="font-semibold">XP:</span> {user.xp}
                                </p>
                            </div>
                            <p className="mt-4 text-gray-300">
                                The System has recognized your presence. Prepare for your next quest!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline CSS for Glitch Effects */}
            <style jsx>{`
                /* Subtle glitch while visible */
                .glitch-static {
                    position: relative;
                    animation: subtle-glitch 2s linear infinite;
                }

                .glitch-static:before,
                .glitch-static:after {
                    content: '${flash?.message || ''}';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.5;
                }

                .glitch-static:before {
                    color: #00ff00;
                    animation: glitch-top-subtle 1s linear infinite;
                    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
                    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
                }

                .glitch-static:after {
                    color: #ff0000;
                    animation: glitch-bottom-subtle 1.5s linear infinite;
                    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
                    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
                }

                /* Glitch exit animation */
                .glitch-exit {
                    position: relative;
                    animation: glitch-exit 0.8s linear forwards;
                }

                .glitch-exit:before,
                .glitch-exit:after {
                    content: '${flash?.message || ''}';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }

                .glitch-exit:before {
                    color: #00ff00;
                    animation: glitch-exit-top 0.8s linear forwards;
                    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
                    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
                }

                .glitch-exit:after {
                    color: #ff0000;
                    animation: glitch-exit-bottom 0.8s linear forwards;
                    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
                    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
                }

                /* Subtle glitch keyframes */
                @keyframes subtle-glitch {
                    0%, 100% { transform: translate(0, 0); }
                    10%, 30%, 50% { transform: translate(1px, 0); }
                    20%, 40% { transform: translate(-1px, 0); }
                }

                @keyframes glitch-top-subtle {
                    0%, 100% { transform: translate(0, 0); }
                    15% { transform: translate(2px, -1px); }
                    25% { transform: translate(-2px, 1px); }
                }

                @keyframes glitch-bottom-subtle {
                    0%, 100% { transform: translate(0, 0); }
                    15% { transform: translate(-2px, 1px); }
                    25% { transform: translate(2px, -1px); }
                }

                /* Glitch exit keyframes */
                @keyframes glitch-exit {
                    0% { transform: translate(0, 0); opacity: 1; }
                    20% { transform: translate(3px, -2px) skew(5deg); }
                    40% { transform: translate(-3px, 2px) skew(-5deg); }
                    60% { transform: translate(5px, -3px) skew(10deg); opacity: 0.8; }
                    80% { transform: translate(-5px, 3px) skew(-10deg); opacity: 0.4; }
                    100% { transform: translate(0, 0); opacity: 0; }
                }

                @keyframes glitch-exit-top {
                    0% { transform: translate(0, 0); opacity: 0.5; }
                    20% { transform: translate(5px, -3px); }
                    40% { transform: translate(-5px, 3px); }
                    60% { transform: translate(8px, -5px); opacity: 0.3; }
                    80% { transform: translate(-8px, 5px); opacity: 0.1; }
                    100% { transform: translate(0, 0); opacity: 0; }
                }

                @keyframes glitch-exit-bottom {
                    0% { transform: translate(0, 0); opacity: 0.5; }
                    20% { transform: translate(-5px, 3px); }
                    40% { transform: translate(5px, -3px); }
                    60% { transform: translate(-8px, 5px); opacity: 0.3; }
                    80% { transform: translate(8px, -5px); opacity: 0.1; }
                    100% { transform: translate(0, 0); opacity: 0; }
                }
            `}</style>
        </AuthenticatedLayout>
    );
}