
import React from 'react';
import { ShowerHead, Utensils, ShoppingBag, WifiIcon, Car } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from './ServiceCard';

const CampingServices = () => {
  const services = [
    {
      icon: ShowerHead,
      title: "Sanitaires",
      description: "Blocs sanitaires modernes et impeccables avec cabines individuelles, douches chaudes, espace bébé et installations PMR."
    },
    {
      icon: Utensils,
      title: "Bar-Restaurant",
      description: "Savourez des plats locaux et des boissons rafraîchissantes dans notre bar-restaurant avec terrasse ombragée."
    },
    {
      icon: ShoppingBag,
      title: "Épicerie",
      description: "Épicerie de dépannage proposant produits frais, pain et viennoiseries sur commande, et produits locaux."
    },
    {
      icon: WifiIcon,
      title: "Wifi",
      description: "Connexion Wifi gratuite dans les espaces communs et payante sur les emplacements pour rester connecté."
    },
    {
      icon: Car,
      title: "Aire de services camping-car",
      description: "Espace dédié aux camping-cars avec vidange des eaux usées et approvisionnement en eau potable."
    },
    {
      icon: WifiIcon,
      title: "Piscine",
      description: "Piscine chauffée avec pataugeoire pour enfants et transats pour la détente au soleil."
    }
  ];

  return (
    <section className="section-padding bg-camping-beige">
      <div className="container mx-auto container-padding">
        <SectionTitle 
          title="Nos services et équipements" 
          subtitle="Tout le confort nécessaire pour un séjour agréable" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampingServices;
