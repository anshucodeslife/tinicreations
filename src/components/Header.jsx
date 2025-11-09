import { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import useScrollPosition from "../hooks/useScrollPosition";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollPosition = useScrollPosition();

  // const navItems = ['Home', 'Gallery', 'Process', 'Services', 'About', 'Team', 'Contact']; //commented out duplicate line
  const navItems = ['Home', 'Gallery', 'Process', 'Services', 'About', 'Contact'];

  return (
    <header className={`fixed w-full z-50 transition duration-300 ${scrollPosition > 50 ? "bg-black/90 shadow-lg backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        <Logo />

        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-amber-400 uppercase tracking-wider">
              {item}
            </a>
          ))}
        </nav>

        <button className="md:hidden text-gray-200" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={30}/>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-black/95 py-4 flex flex-col items-center space-y-4">
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
