
import React from 'react';
import { Link } from 'react-router-dom';

const CampingCallToAction = () => {
  return (
    <section className="section-padding bg-camping-darkgreen text-white">
      <div className="container mx-auto text-center">
        <h2 className="title-medium mb-6 text-white">
          Envie de découvrir notre camping ?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Réservez dès maintenant votre séjour au Camping des 3 becs et profitez d'un cadre exceptionnel au cœur de la Drôme.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link to="/hebergements" className="bg-white hover:bg-camping-beige text-camping-darkgreen py-3 px-6 rounded-md transition-all duration-300">
            Voir nos hébergements
          </Link>
          <Link to="/reservation" className="border-2 border-white hover:bg-white hover:text-camping-darkgreen text-white py-3 px-6 rounded-md transition-all duration-300">
            Réserver maintenant
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampingCallToAction;
