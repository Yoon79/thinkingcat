import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="flex items-center h-20 justify-between px-4 md:px-32">
          {/* Logo */}
          <div className="flex items-center">
            <div className="mr-2">
              <Image
                src="/thinkingcat.png"
                alt="thinkingcat icon"
                width={40}
                height={40}
                className="w-8 h-8"
              />
            </div>
            <div className="text-md font-bold text-white">THINKINGCAT</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: "projects", ko: "PROJECTS" },
              { id: "about", ko: "ABOUT" },
              { id: "contact", ko: "CONTACT" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.ko}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-black/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 p-4">
              {[
                { id: "projects", ko: "PROJECTS" },
                { id: "about", ko: "ABOUT" },
                { id: "contact", ko: "CONTACT" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.ko}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
};

export default Header;
