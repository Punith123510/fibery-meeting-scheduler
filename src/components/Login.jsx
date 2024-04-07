import React, { useState } from 'react';
const Login = ({ onSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Implement your login logic here (e.g., API call)
      console.log('Logging in with:', { email, password });
  
      // Simulate successful login for demonstration purposes
      const isAuthenticated = true; // Replace this with actual authentication logic
  
      if (isAuthenticated) {
        // Call onSuccess function passed from the parent component
        onSuccess();
      } else {
        // Display error message if authentication fails
        setError('Invalid email or password. Please try again.');
      }
    };
  
    return (
        <div className="bg-gray-100 p-4">
        <h2 className="text-2xl mb-4">Login</h2>
        <form onSubmit={handleLogin}>
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
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
            >
                Login
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    </div>
    );
  };
  export default Login;