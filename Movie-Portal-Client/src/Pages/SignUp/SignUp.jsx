import React from 'react';

const SignUp = () => {
    const onSubmit = data =>{
        console.log(data);
     
   };

    return (
        <div>
            <div className="relative bg-cover bg-center py-10">
                <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-900 bg-opacity-50" />

                {/* Upper Section with Glassmorphism */}
                <div className="flex flex-col items-center justify-center px-4">
                    {/* Welcome Section */}
                    <div className="backdrop-blur-md bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg p-6 m-4 w-full max-w-md shadow-lg text-center">
                    <h1 className="text-xl md:text-3xl lg:text-3xl font-bold text-white">WELCOME TO MOVIE PORTAL</h1>
                    </div>

                    {/* Login Form Section */}
                    <div className="backdrop-blur-md bg-white bg-opacity-30 border border-white border-opacity-30 rounded-lg p-8 m-4 w-full max-w-md shadow-lg">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">REGISTER NOW</h2>
                    <form  >
                        <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="email">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter Your Name'
                            className="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Your Email'
                            className="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="email">PhotoURL</label>
                        <input
                            type="url"
                            name="photoURL"
                            placeholder='Enter Your PhotoURL'
                            className="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
                        />
                        </div>
                        <div className="mb-4">
                        <label className="block text-sm font-medium text-white" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter Password'
                            className="mt-1 p-4 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
                        />
                        </div>
                        <button
                        type="submit"
                        className="w-full font-bold p-4 bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                        >
                        REGISTER
                        </button>
                    </form>
                    <p className='text-white my-2'>Already have an Account? <a className='font-bold my-2' href="/logIn">Log In</a></p>
                    <p className='my-4 text-white text-center'>OR</p>
                    <p><button className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500">Log in with Google</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;