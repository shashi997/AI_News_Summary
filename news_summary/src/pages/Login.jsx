// src/pages/Login.jsx
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC]">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center text-[#0A66C2] mb-4">Login</h2>

        {/* Email & Password Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A66C2]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A66C2]"
          />
          <button className="w-full bg-[#0A66C2] text-white p-3 rounded-lg hover:bg-[#08428A]">
            Login
          </button>
        </form>

        {/* Google OAuth Button (To Be Added Later) */}
        <button className="w-full flex items-center justify-center border p-3 mt-4 rounded-lg hover:bg-gray-100">
          <FaGoogle className="text-red-500 mr-2" />
          Sign in with Google
        </button>

        <p className="text-center text-gray-600 mt-4">
          New here? <a href="/signup" className="text-[#0A66C2]">Create an account</a>
        </p>
      </div>
    </div>
  );
}
