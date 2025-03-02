import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-900">
            {/* <div className="w-full max-w-md p-6 bg-gray-800 border border-green-500 shadow-lg shadow-green-500/50 rounded-lg">
                
            </div> */}
            {children}
        </div>
    );
}