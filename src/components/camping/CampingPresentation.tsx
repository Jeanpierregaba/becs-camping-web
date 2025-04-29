
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const CampingPresentation = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto container-padding">
        <SectionTitle 
          title="Notre camping" 
          subtitle="Bienvenue au Camping des 3 becs, votre oasis de nature et de confort en Drôme provençale" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-content mb-4">
              Au cœur de la vallée de la Drôme, dans un cadre naturel préservé, le Camping des 3 becs vous accueille pour des vacances ressourçantes, entre détente et aventure.
            </p>
            <p className="text-content mb-4">
              Notre camping 4 étoiles, familial et à taille humaine, s'étend sur 5 hectares de verdure, offrant des emplacements spacieux et ombragés ainsi que des hébergements confortables pour tous les goûts.
            </p>
            <p className="text-content">
              Depuis plus de 25 ans, nous mettons tout en œuvre pour vous offrir un séjour inoubliable, alliant le charme du camping traditionnel aux services et au confort d'aujourd'hui.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
              alt="Vue panoramique du Camping des 3 becs" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampingPresentation;
