import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-20 py-4 backdrop-blur-md z-50"
    >
      <h1 className="text-xl font-bold">Rishitha.dev</h1>
      <div className="flex items-center space-x-6">
       <Link to="/projects" className="hover:underline">Projects</Link>
       <Link to="/skills" className="hover:underline">Skills</Link>
       <Link to="/contact" className="hover:underline">Contact</Link>
        <button
          onClick={toggleDark}
          className="text-sm px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
