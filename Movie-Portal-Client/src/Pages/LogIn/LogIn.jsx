import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProviders';
import { useForm } from 'react-hook-form';

const LogIn = () => {
    const {signInWithGoogle,signIn,forgetPassword} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error,setError] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname || "/";

    const onSubmit  = data =>{
        signIn(data.email,data.password)
        .then(result =>{
            const user = result.user;
            toast.success('LogIn successfully done.',{position: "top-center"});
            navigate(from, {replace:true});
        })
        .catch((error) => {
            setError(error.message); 
          });
    }  
    const handelGoogleSignIn =()=>{
        signInWithGoogle()
        .then((result)=>{
            const user=result.user;
            console.log(user);
            toast.success('LogIn successfully done.',{position: "top-center"});
            navigate(from, {replace:true});
        })
        .catch((error)=>{
            setError(error);
        })
    }
    const handleForgetPassword = () =>{
        if (!email) {
            setMessage('Please enter your email.');
            return;
          }
          forgetPassword(email)
            .then(() => {
              setMessage('Password reset email sent successfully!');
            })
            .catch((error) => {
              setMessage(error.message || 'Failed to send password reset email.');
            });
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                    <label className="block text-sm font-medium text-white" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        {...register("email",{ required: true })}
                        onChange={(e) => setEmail(e.target.value)}
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
                        {...register("password",{ required: true })}
                        className="mt-1 lg:p-4 md:p-4 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 bg-transparent text-white"
                        required
                    />
                    <p className="text-white my-2">
                        <Link onClick={handleForgetPassword}>Forget Password ?</Link>
                    </p>
                    {message && <p className="text-center text-red-600 text-sm mt-4">{message}</p>}
                    </div>
                    <button
                    type="submit"
                    className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500 transition duration-200"
                    >
                    LOG IN
                    </button>
                </form>
                {
                    error && <p className='text-red-600'>{error}</p>
                }
                <p className="text-white my-2">
                    Don't have an Account? <a className="font-bold" href="/signUp">Register</a>
                </p>
                <p className='my-4 text-white text-center'>OR</p>
                <p><button onClick={handelGoogleSignIn} className="w-full font-bold lg:p-4 md:p-4 p-2 bg-green-900 text-white rounded-md hover:bg-red-500">Log in with Google</button></p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LogIn;