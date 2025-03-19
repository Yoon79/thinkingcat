import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
      <button
          onClick={scrollToTop}
          className={`fixed bottom-14 right-6 bg-purple-50 text-[#1d0644] bg-opacity-95 p-2.5 rounded-full shadow-lg hover:bg-[#1d0644] hover:text-white transition-all duration-300 ease-in-out transform ${
              showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          } z-50`}
          aria-label="Scroll to top"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
        >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
  );
};

export default ScrollToTop;
