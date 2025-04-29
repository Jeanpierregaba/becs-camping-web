
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Notre Camping', path: '/camping' },
    { name: 'Hébergements', path: '/hebergements' },
    { name: 'Activités', path: '/activites' },
    { name: 'La Drôme', path: '/drome' },
    { name: 'Tarifs', path: '/tarifs' },
    { name: 'Réservation', path: '/reservation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-display font-bold text-camping-darkgreen">
              Camping des 3 becs
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium text-gray-700 hover:text-camping-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bouton de réservation (visible uniquement sur desktop) */}
          <div className="hidden md:block">
            <Link
              to="/reservation"
              className="btn-primary"
            >
              Réserver maintenant
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-x-0 top-[72px] z-50 w-full bg-white pb-6 shadow-lg md:hidden",
            {
              "block animate-fade-in": isMenuOpen,
              "hidden": !isMenuOpen,
            }
          )}
        >
          <div className="flex flex-col space-y-4 px-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="py-2 font-medium text-gray-700 hover:text-camping-green"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/reservation"
              className="btn-primary text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
