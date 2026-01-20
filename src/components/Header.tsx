import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ROUTE_PATHS } from "@/constants/routes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", path: ROUTE_PATHS.HOME, end: true },
  { label: "Projects", path: ROUTE_PATHS.HOME, scrollTo: "projects" as const },
  { label: "Contact", path: ROUTE_PATHS.HOME, scrollTo: "contact" as const },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = (e: React.MouseEvent, scrollTo: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to={ROUTE_PATHS.HOME}
          className="group flex flex-col items-start"
        >
          <span className="font-serif text-xl md:text-2xl tracking-tighter text-primary">
            Bengisu Gokalp
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
            Architectural Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) =>
            link.scrollTo ? (
              <Link
                key={link.scrollTo}
                to={link.path}
                state={{ scrollTo: link.scrollTo }}
                onClick={(e) => handleScrollClick(e, link.scrollTo!)}
                className="text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-primary text-muted-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-primary",
                    isActive ? "text-primary border-b border-primary/20 pb-1" : "text-muted-foreground"
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-border p-8 md:hidden shadow-xl"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) =>
                link.scrollTo ? (
                  <Link
                    key={link.scrollTo}
                    to={link.path}
                    state={{ scrollTo: link.scrollTo }}
                    onClick={(e) => handleScrollClick(e, link.scrollTo!)}
                    className="text-lg font-serif tracking-wide text-primary border-b border-muted pb-2"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif tracking-wide text-primary border-b border-muted pb-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};