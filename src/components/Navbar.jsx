import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Efek navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }

      // deteksi section aktif saat scroll
      const sections = ["home", "about", "portfolio", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper: handle klik menu
  const handleMenuClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false); // otomatis tutup hamburger
  };

  const menuItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "about", label: "About", href: "#about" },
    { id: "portfolio", label: "Portfolio", href: "#portfolio" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 
      ${
        active
          ? "bg-transparent-100 shadow-xl rounded-full px-10 py-2.5 backdrop-blur-md gap-x-35 shadow-blue-600/50 ring-2 ring-blue-600"
          : "w-full px-8 py-5"
      } flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="logo">
        <h1 className="text-2xl font-bold">Hfizz.</h1>
      </div>

      {/* Menu Desktop */}
      <ul
        className={`hidden md:flex gap-8 transition-all duration-500 ${
          active ? "text-sm" : "text-base"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={() => handleMenuClick(item.id)}
              className={`relative hover:text-blue-600 transition-colors ${
                activeSection === item.id ? "text-blue-600" : ""
              }`}
            >
              {item.label}
              {/* underline aktif */}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-600 rounded"></span>
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Mobile */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[90%] bg-zinc-800 rounded-2xl shadow-lg p-6 md:hidden text-center">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => handleMenuClick(item.id)}
                  className="hover:text-blue-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
