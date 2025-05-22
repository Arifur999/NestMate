import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router"; 
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthContext";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (!hasUppercase || !hasLowercase) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        text: "Password must include both uppercase and lowercase letters.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          Swal.fire("Success!", "Account created successfully", "success");
          form.reset();
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire("Error!", error.message, "error");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire("Success!", "Signed in with Google", "success");
        navigate("/");
      })
      .catch((error) => {
        Swal.fire("Error!", error.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center card bg-base-200 px-4">
      <div className="max-w-md w-full bg-base-100 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="url"
            name="photo"
            placeholder="Photo URL"
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
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
            <small className="text-gray-500 mt-1 block ml-1">
              Must include uppercase & lowercase letters
            </small>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-white border py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
        >
          <FcGoogle className="text-xl" />
          <span className="text-sm font-medium text-gray-700 cursor-pointer">
            Sign Up with Google
          </span>
        </button>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
