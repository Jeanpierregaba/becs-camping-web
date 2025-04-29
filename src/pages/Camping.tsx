
import React from 'react';
import { Link } from 'react-router-dom';
import { ShowerHead, Utensils, ShoppingBag, WifiIcon, Car, SwimmingPool } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const Camping = () => {
  return (
    <div className="pt-24">
      {/* Présentation du camping */}
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

      {/* Services et équipements */}
      <section className="section-padding bg-camping-beige">
        <div className="container mx-auto container-padding">
          <SectionTitle 
            title="Nos services et équipements" 
            subtitle="Tout le confort nécessaire pour un séjour agréable" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-camping-darkgreen p-3 rounded-full mr-4">
                  <ShowerHead className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold">Sanitaires</h3>
              </div>
              <p className="text-gray-700">
                Blocs sanitaires modernes et impeccables avec cabines individuelles, douches chaudes, espace bébé et installations PMR.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-camping-darkgreen p-3 rounded-full mr-4">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold">Bar-Restaurant</h3>
              </div>
              <p className="text-gray-700">
                Savourez des plats locaux et des boissons rafraîchissantes dans notre bar-restaurant avec terrasse ombragée.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-camping-darkgreen p-3 rounded-full mr-4">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold">Épicerie</h3>
              </div>
              <p className="text-gray-700">
                Épicerie de dépannage proposant produits frais, pain et viennoiseries sur commande, et produits locaux.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-camping-darkgreen p-3 rounded-full mr-4">
                  <WifiIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold">Wifi</h3>
              </div>
              <p className="text-gray-700">
                Connexion Wifi gratuite dans les espaces communs et payante sur les emplacements pour rester connecté.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-camping-darkgreen p-3 rounded-full mr-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold">Aire de services camping-car</h3>
              </div>
              <p className="text-gray-700">
                Espace dédié aux camping-cars avec vidange des eaux usées et approvisionnement en eau potable.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-camping-darkgreen p-3 rounded-full mr-4">
                  <SwimmingPool className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold">Piscine</h3>
              </div>
              <p className="text-gray-700">
                Piscine chauffée avec pataugeoire pour enfants et transats pour la détente au soleil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Histoire et valeurs */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionTitle 
            title="Notre histoire et nos valeurs" 
            subtitle="Un camping familial depuis plus de 25 ans" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-display font-bold mb-4">Une aventure familiale</h3>
              <p className="text-content mb-4">
                Créé en 1998 par la famille Durand, le Camping des 3 becs est né d'une passion pour la nature et l'accueil. Ce qui était au départ un simple terrain avec quelques emplacements s'est progressivement transformé en un camping de qualité, sans jamais perdre son âme et son authenticité.
              </p>
              <h3 className="text-xl font-display font-bold mb-4 mt-6">Nos valeurs</h3>
              <ul className="list-disc pl-5 space-y-2 text-content">
                <li><span className="font-semibold">Respect de la nature</span> - Nous nous engageons dans une démarche éco-responsable avec tri des déchets, économies d'eau et d'énergie.</li>
                <li><span className="font-semibold">Convivialité</span> - Nous privilégions une ambiance familiale et chaleureuse où chacun peut se sentir comme chez soi.</li>
                <li><span className="font-semibold">Qualité d'accueil</span> - Nous sommes attentifs à vos besoins pour vous offrir un séjour sur mesure.</li>
                <li><span className="font-semibold">Authenticité</span> - Nous valorisons le patrimoine local et les produits du terroir drômois.</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                alt="Histoire du Camping des 3 becs" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galerie photos */}
      <section className="section-padding bg-camping-cream">
        <div className="container mx-auto container-padding">
          <SectionTitle 
            title="Galerie photos" 
            subtitle="Découvrez notre camping en images" 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={`https://images.unsplash.com/photo-${[
                    '1472396961693-142e6e269027',
                    '1482938289607-e9573fc25ebb',
                    '1509316975850-ff9c5deb0cd9',
                    '1465146344425-f00d5f5c8f07',
                    '1518495973542-4542c06a5843',
                    '1469474968028-56623f02e42e',
                    '1470071459604-3b5ec3a7fe05',
                    '1472396961693-142e6e269027'
                  ][index]}`}
                  alt={`Photo du camping ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-action */}
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
    </div>
  );
};

export default Camping;
