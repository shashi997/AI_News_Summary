// src/pages/Signup.jsx
import { FaGoogle } from "react-icons/fa";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8FAFC]">
      <div className="bg-white shadow-lg p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center text-[#0A66C2] mb-4">Sign Up</h2>

        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A66C2]" />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A66C2]" />
          <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#0A66C2]" />
          <button className="w-full bg-[#0A66C2] text-white p-3 rounded-lg hover:bg-[#08428A]">
            Create Account
          </button>
        </form>

        <button className="w-full flex items-center justify-center border p-3 mt-4 rounded-lg hover:bg-gray-100">
          <FaGoogle className="text-red-500 mr-2" />
          Sign up with Google
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account? <a href="/login" className="text-[#0A66C2]">Log in</a>
        </p>
      </div>
    </div>
  );
}
