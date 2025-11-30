import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import useScrollPosition from "../hooks/useScrollPosition";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  // const navItems = ['Home', 'Gallery', 'Process', 'Services', 'About', 'Team', 'Contact']; //commented out duplicate line
  const navItems = ['Home', 'Gallery', 'Process', 'Services', 'About', 'Contact'];
  const isScrolled = scrollPosition > 50;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "bg-black/90 shadow-lg backdrop-blur-md py-2"
        : "bg-white/95 shadow-sm py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
        <Logo isScrolled={isScrolled} />

        <nav className="hidden md:flex space-x-2">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`uppercase tracking-wider font-medium text-sm px-4 py-2 rounded-full transition-all duration-300 ${isScrolled
                ? "text-gray-300 hover:bg-white hover:text-black"
                : "text-gray-800 hover:bg-black hover:text-white"
                }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className={`md:hidden transition-colors duration-300 ${isScrolled ? "text-gray-200" : "text-gray-800"
            }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={30} />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black/95 py-4 flex flex-col items-center space-y-4 absolute w-full left-0 top-full border-t border-gray-800">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg text-gray-200 hover:text-amber-400">
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
