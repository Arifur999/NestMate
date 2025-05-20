import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authentication/AuthContext';

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    signInUser(email, password)
      .then((result) => {
        form.reset();
        Swal.fire({
          title: 'Success!',
          text: 'Login successful',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({
          title: 'Success!',
          text: 'Signed in with Google successfully',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">Welcome Back</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Password with show/hide icon */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right text-sm">
            <Link to="#" className="text-indigo-500 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleSignIn} // ✅ important!
          className="w-full flex items-center justify-center gap-2 bg-white border py-3 rounded-lg hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm font-medium text-gray-700 cursor-pointer">Continue with Google</span>
        </button>

        {/* Register Redirect */}
        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-indigo-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
