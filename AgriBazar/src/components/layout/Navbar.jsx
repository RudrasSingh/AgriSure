import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Bell, User, LogOut } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { currentUser, logout } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  
  // Define navigation items
  const navItems = [
    { path: "/dashboard", label: "Dashboard", requiresAuth: true },
    { path: "/packages", label: "Packages", requiresAuth: true },
    { path: "/claims", label: "Claims", requiresAuth: true },
    { path: "/analytics", label: "Analytics", requiresAuth: true },
  ];

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="top-0 z-[999] sticky bg-white/70 dark:bg-neutral-800/70 backdrop-blur-md border-gray-200 dark:border-neutral-700 border-b">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex flex-shrink-0 items-center">
              <span className="bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500 font-bold text-transparent text-xl">
                AgriSure
              </span>
            </Link>
          </div>

          {/* Only show navigation items when user is logged in */}
          {currentUser && (
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path || (location.pathname.includes(item.path) && item.path !== "/")
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md text-gray-600 dark:text-gray-300 transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {currentUser ? (
              <div className="relative">
                <div className="flex items-center space-x-3">
                  <button className="relative hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-md text-gray-600 dark:text-gray-300 transition-colors">
                    <Bell size={20} />
                    <span className="top-1 right-1 absolute bg-primary-500 rounded-full w-2 h-2"></span>
                  </button>

                  <button
                    onClick={toggleUserMenu}
                    className="flex items-center focus:outline-none font-medium text-gray-700 hover:text-primary-600 dark:hover:text-primary-400 dark:text-gray-200 text-sm"
                  >
                    <img
                      className="border-2 border-gray-200 dark:border-gray-700 rounded-full w-8 h-8 object-cover"
                      src={
                        currentUser.avatar ||
                        "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      }
                      alt="User"
                    />
                  </button>
                </div>

                {isUserMenuOpen && (
                  <div className="right-0 absolute bg-white dark:bg-gray-800 ring-opacity-5 shadow-lg mt-2 py-1 rounded-md focus:outline-none ring-1 ring-black w-48">
                    <div className="px-4 py-2 border-gray-200 dark:border-gray-700 border-b">
                      <p className="font-medium text-gray-700 dark:text-gray-200 text-sm">
                        {currentUser.name}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                        {currentUser.email}
                      </p>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 text-gray-700 dark:text-gray-200 text-sm"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User className="mr-2 w-4 h-4" />
                      Profile
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsUserMenuOpen(false);
                      }}
                      className="flex items-center hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 w-full text-gray-700 dark:text-gray-200 text-sm"
                    >
                      <LogOut className="mr-2 w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
