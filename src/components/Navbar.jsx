import BubbleMenu from "../blocks/Components/BubbleMenu/BubbleMenu";
import { NAV_LINKS } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <BubbleMenu 
      logo={<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src="https://tse4.mm.bing.net/th/id/OIP.uoC7cZscAU3fwDsrxAC3UgHaHa?pid=Api&P=0&h=180"
                  className="h-8 rounded-lg"
                  alt="Ideathon Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black mr-8">
                  Ideathon
                </span>
              </Link>}
      items={NAV_LINKS}
      menuAriaLabel="Toggle navigation"
      menuBg="#ffffff"
      menuContentColor="#111111"
      useFixedPosition={true}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12} />
  )
}

export default Navbar;