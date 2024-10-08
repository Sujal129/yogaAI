import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add your signup logic here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <h2 className="text-2xl mb-4">Sign Up</h2>
            <form onSubmit={handleSignup} className="w-full max-w-md p-8 space-y-4 bg-gray-800 rounded shadow-md">
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-2 rounded bg-gray-700 text-white"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
