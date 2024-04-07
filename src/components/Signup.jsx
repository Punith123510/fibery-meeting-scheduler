// Signup.jsx
import React, { useState } from 'react';

const Signup = ({ onSignupSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // Implement your signup logic here, for example, sending data to the server
        console.log('Signing up with:', { email, password, confirmPassword });

        // Simulate successful signup (replace this with actual signup logic)
        if (password === confirmPassword) {
            // Signup success
            setMessage('Signup successful!'); // Set success message
            onSignupSuccess(); // Call the onSignupSuccess callback function provided by the parent component
        } else {
            // Signup failed (passwords don't match)
            setMessage('Passwords do not match. Please try again.'); // Set error message
        }
    };

    return (
        <div className="bg-gray-100 p-4">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="password">Password:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
            {message && (
                <div className="mt-4">
                    <p className="text-green-500">{message}</p>
                </div>
            )}
        </div>
    );
};

export default Signup;
