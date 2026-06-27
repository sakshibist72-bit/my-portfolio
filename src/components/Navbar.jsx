import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="bg-purple-400 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold tracking-wide">🌾 CropAdvisor</h1>
      <div className="flex gap-8 items-center">
        <Link to="/" className="text-white font-medium hover:text-yellow-300 transition">Home</Link>
        <Link to="/about" className="text-white font-medium hover:text-yellow-300 transition">About</Link>
        <Link to="/dashboard" className="text-white font-medium hover:text-yellow-300 transition">Dashboard</Link>
        <Link to="/login" className="text-white font-medium hover:text-yellow-300 transition">Login</Link>
        <Link to="/demo" className="text-white font-medium hover:text-yellow-300 transition">Demo</Link>
        <button onClick={() => setDark(!dark)} className="text-white text-xl ml-4">
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}