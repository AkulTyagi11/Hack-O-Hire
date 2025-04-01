import React, { useState } from 'react';

const LoginSignupPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

    console.log(isLogin ? 'Login attempt' : 'Signup attempt', { email, password, name, company });
    };

    return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-5xl font-extrabold text-gray-900">
        Term Sheet Validation AI
        </h2>
        <p className="mt-4 text-center text-lg text-gray-600">
        {isLogin ? 'Log in to your account' : 'Create your account'}
        </p>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="flex justify-center mb-6">
            <div className="flex border-b border-gray-200 w-full">
            <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-2 text-center ${
                isLogin
                    ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                    : 'text-gray-500 hover:text-blue-500'
                }`}
            >
                Log In
            </button>
            <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 py-2 text-center ${
                !isLogin
                    ? 'text-blue-600 border-b-2 border-blue-600 font-medium'
                    : 'text-gray-500 hover:text-blue-500'
                }`}
            >
                Sign Up
            </button>
            </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
                </label>
                <div className="mt-1">
                <input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
            </div>
            )}

            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
            </label>
            <div className="mt-1">
                <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            </div>

            {!isLogin && (
            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
                </label>
                <div className="mt-1">
                <input
                    id="company"
                    name="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
            </div>
            )}

            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
            </label>
            <div className="mt-1">
                <input
                id="password"
                name="password"
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>
            </div>

            {!isLogin && (
            <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
                </label>
                <div className="mt-1">
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required={!isLogin}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                </div>
            </div>
            )}

            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
                </label>
            </div>

            {isLogin && (
                <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                </a>
                </div>
            )}
            </div>

            <div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {isLogin ? 'Sign in' : 'Create account'}
            </button>
            </div>
        </form>

        <div className="mt-6">
            <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
            <div>
                <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                <span className="sr-only">Sign in with Google</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                </a>
            </div>

            <div>
                <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                <span className="sr-only">Sign in with Microsoft</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zM24 11.4H12.6V0H24v11.4z"/>
                </svg>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-center">
        <p className="text-sm text-gray-600">
        By signing in, you agree to our{' '}
        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Privacy Policy
        </a>
        </p>
    </div>
    </div>
);
};

export default LoginSignupPage;