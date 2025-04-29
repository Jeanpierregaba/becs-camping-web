
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-camping-darkgreen text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations de contact */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Camping des 3 becs</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Route de Saillans, 26340 Vercheny, Drôme, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>+33 4 75 21 XX XX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>contact@campingdes3becs.fr</span>
              </li>
            </ul>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-camping-beige transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/camping" className="hover:text-camping-beige transition-colors">
                  Notre camping
                </Link>
              </li>
              <li>
                <Link to="/hebergements" className="hover:text-camping-beige transition-colors">
                  Hébergements
                </Link>
              </li>
              <li>
                <Link to="/activites" className="hover:text-camping-beige transition-colors">
                  Activités et loisirs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-camping-beige transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Infos utiles */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Infos utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tarifs" className="hover:text-camping-beige transition-colors">
                  Tarifs et réservations
                </Link>
              </li>
              <li>
                <Link to="/drome" className="hover:text-camping-beige transition-colors">
                  Découvrir la Drôme
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-camping-beige transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/legal" className="hover:text-camping-beige transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter et réseaux sociaux */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Suivez-nous</h3>
            <p className="mb-4">Abonnez-vous à notre newsletter pour recevoir nos actualités et offres spéciales.</p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-800"
              />
              <button className="bg-camping-ochre hover:bg-camping-lightocher px-4 py-2 rounded-r-md transition-colors">
                OK
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-camping-beige transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-camping-beige transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="hover:text-camping-beige transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-camping-green text-center">
          <p>&copy; {new Date().getFullYear()} Camping des 3 becs - Tous droits réservés</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
