import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const handleLogin = e =>{
        alert('galib');
    }
    return (
        <div>
            <div className="relative bg-cover bg-center py-10">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-900 bg-opacity-50" />

            {/* Upper Section with Glassmorphism */}
            <div className="flex flex-col items-center justify-center px-4">
                {/* Welcome Section */}
                <div className="backdrop-blur-md bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg p-6 m-4 w-full max-w-md shadow-lg text-center">
                <h1 className="text-xl lg:text-3xl md:text-3xl font-bold text-white">WELCOME TO ECO-ADVENTURE</h1>
                </div>

                {/* Login Form Section */}
                <div className="backdrop-blur-md bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg lg:p-8 md:p-6 p-4 m-4 w-full max-w-md shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">LOG IN</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-white" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="mt-1 lg:p-4 md:p-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
                        required
                        // onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-white" htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="mt-1 lg:p-4 md:p-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
                        required
                    />
                    <p className="text-white my-2">
                        <Link>Forget Password ?</Link>
                    </p>
                    </div>
                    <button
                    type="submit"
                    className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                    >
                    LOG IN
                    </button>
                </form>
                <p className="text-white my-2">
                    Don't have an Account? <a className="font-bold" href="/register">Register</a>
                </p>
                <p className='my-4 text-white text-center'>OR</p>
                <p><button className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500">Log in with Google</button></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LogIn;