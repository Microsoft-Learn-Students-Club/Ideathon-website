import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS } from "../constants/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (id) => {
    setMenuOpen(false); // close menu after click
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: 99999,
        scrub: true,
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
  });

  return (
    <nav className="sticky top-0 z-50 bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.uoC7cZscAU3fwDsrxAC3UgHaHa?pid=Api&P=0&h=180"
            className="h-8"
            alt="Ideathon Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ideathon
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                {link.type === "scroll" ? (
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="block py-2 px-3 transition-colors text-white dark:text-white hover:text-blue-700 md:dark:hover:text-blue-500"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.id}
                    className="block py-2 px-3 transition-colors text-white dark:text-white hover:text-blue-700 md:dark:hover:text-blue-500"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="ml-4 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Get started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
            {menuOpen ? (
              <HiOutlineX className="w-7 h-7 text-white" />
            ) : (
              <HiOutlineMenu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <ul className="flex flex-col p-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                {link.type === "scroll" ? (
                  <button
                    onClick={() => handleScroll(link.id)}
                    className="block w-full text-left py-2 px-3 transition-colors text-gray-900 dark:text-white hover:text-blue-700 md:dark:hover:text-blue-500"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.id}
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-left py-2 px-3 transition-colors text-gray-900 dark:text-white hover:text-blue-700 md:dark:hover:text-blue-500"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <button
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Get started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
