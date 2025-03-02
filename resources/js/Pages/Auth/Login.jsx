import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="System Login" />

            {/* Centered System Window */}
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="w-full max-w-md p-6 bg-gray-800 border border-green-500 shadow-lg shadow-green-500/50 rounded-lg">
                    {/* Header */}
                    <h1 className="text-2xl font-bold text-green-400 mb-4 text-center">
                        Hunter, Enter Your Credentials
                    </h1>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-400 text-center">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
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
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2 text-red-500" />
                        </div>

                        {/* Password Field */}
                        <div className="mt-4">
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
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2 text-red-500" />
                        </div>

                        {/* Remember Me */}
                        <div className="mt-4 flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="text-green-500 border-green-500 focus:ring-green-500"
                            />
                            <span className="ml-2 text-sm text-green-400">
                                Remember This Hunter
                            </span>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex items-center justify-between">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-sm text-green-400 underline hover:text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    Forgot Access Code?
                                </Link>
                            )}
                            <PrimaryButton
                                className={`ml-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={processing}
                            >
                                Enter the Gate
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}