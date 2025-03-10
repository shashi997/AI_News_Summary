// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaSearch, FaFilter, FaUser, FaCog, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("date");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="bg-[#0A66C2] text-white p-4 flex justify-between items-center shadow-md relative">
      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-bold tracking-wide">AI News Summary</h1>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="text-2xl" />
      </button>

      {/* Navigation Items */}
      <div className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#0A66C2] md:bg-transparent p-4 md:p-0 
        shadow-md md:shadow-none flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <div className="relative w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded-md px-4 py-2 w-full md:w-80 text-black"
                aria-label="Search news"
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
        <div className="flex items-center space-x-2">
            <FaFilter className="text-gray-500"/>
            <select
              className="border rounded-md px-4 py-2 bg-white text-black w-full md:w-auto"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="date">Date</option>
              <option value="popularity">Popularity</option>
            </select>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="space-x-4 flex items-center">
        {isLoggedIn ? (
          <>
            <button className="flex items-center space-x-2 hover:text-yellow-300 transition">
                <FaUser />
                <span>Account</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-yellow-300 transition">
                <FaCog />
                <span>Settings</span>
            </button>
          </>
        ) : (
          <>
            <button className="flex items-center space-x-2 bg-[#FACC15] text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
            onClick={() => navigate('/login')}>
                <FaSignInAlt />
               <span>Login</span> 
            </button>
            <button className="flex items-center space-x-2 border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
            onClick={() => navigate('/signup')}>
                <FaUserPlus />
                <span>Sign Up</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
