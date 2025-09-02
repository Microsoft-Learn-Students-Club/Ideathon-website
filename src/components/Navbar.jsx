import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle menu item click
  const handleScroll = (id) => {
    setIsMenuOpen(false); // close mobile menu
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
  };

  // Scroll after navigation if state.scrollTo exists
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100); // small delay to ensure DOM is ready
    }
  }, [location]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-yellow-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3" aria-label="Go to homepage">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.uoC7cZscAU3fwDsrxAC3UgHaHa?pid=Api&P=0&h=180"
            className="h-8 rounded-lg"
            alt="Ideathon Event Logo"
          />
          <span className="self-center text-2xl font-semibold font-serif whitespace-nowrap text-black">
            Ideathon
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map(({ id, label, type, rotation, hoverStyles }) =>
            type === "scroll" ? (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className={`transform hover:rotate-[${rotation}deg] font-bold cursor-pointer font-serif px-4 py-2 rounded-md transition duration-300`}
                style={{ backgroundColor: "transparent", color: "#111" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = hoverStyles.bgColor;
                  e.target.style.color = hoverStyles.textColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#111";
                }}
              >
                {label}
              </button>
            ) : (
              <Link
                key={id}
                to={id}
                className={`transform hover:rotate-[${rotation}deg] px-4 py-2 cursor-pointer rounded-md font-bold font-serif transition duration-300`}
                style={{ backgroundColor: "transparent", color: "#111" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = hoverStyles.bgColor;
                  e.target.style.color = hoverStyles.textColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#111";
                }}
              >
                {label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} className="text-black cursor-pointer" /> : <Menu size={28} className="text-black cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-yellow-50 shadow-lg px-6 pb-4 space-y-3">
          {NAV_LINKS.map(({ id, label, type, rotation, hoverStyles }) =>
            type === "scroll" ? (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className={`block w-full text-left text-xl cursor-pointer font-extrabold font-serif transform hover:rotate-[${rotation}deg] px-4 py-2 rounded-md transition duration-300`}
                style={{ backgroundColor: "transparent", color: "#111" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = hoverStyles.bgColor;
                  e.target.style.color = hoverStyles.textColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#111";
                }}
              >
                {label}
              </button>
            ) : (
              <Link
                key={id}
                to={id}
                onClick={() => setIsMenuOpen(false)}
                className={`block transform text-xl font-extrabold font-serif hover:rotate-[${rotation}deg] px-4 py-2 rounded-md transition duration-300`}
                style={{ backgroundColor: "transparent", color: "#111" }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = hoverStyles.bgColor;
                  e.target.style.color = hoverStyles.textColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#111";
                }}
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;