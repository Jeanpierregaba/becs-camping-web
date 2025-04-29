
import React from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import AccommodationCard from '@/components/AccommodationCard';

const accommodations = [
  {
    id: 'emplacement-tente',
    category: 'emplacement',
    title: 'Emplacement Tente',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    description: 'Emplacements spacieux pour tentes dans un cadre naturel préservé, avec accès aux sanitaires modernes.',
    capacity: 6,
    price: '15€/nuit'
  },
  {
    id: 'emplacement-caravane',
    category: 'emplacement',
    title: 'Emplacement Caravane',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    description: 'Grands emplacements pour caravanes avec branchements électriques et proximité des services.',
    capacity: 6,
    price: '20€/nuit'
  },
  {
    id: 'emplacement-camping-car',
    category: 'emplacement',
    title: 'Emplacement Camping-car',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    description: 'Emplacements dédiés aux camping-cars avec aire de service, électricité et accès facilité.',
    capacity: 4,
    price: '22€/nuit'
  },
  {
    id: 'mobil-home-confort',
    category: 'mobil-home',
    title: 'Mobil-Home Confort',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    description: 'Mobil-home tout équipé avec terrasse, idéal pour les familles cherchant confort et praticité.',
    capacity: 4,
    bedrooms: 2,
    price: '65€/nuit'
  },
  {
    id: 'mobil-home-premium',
    category: 'mobil-home',
    title: 'Mobil-Home Premium',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    description: 'Mobil-home haut de gamme avec grande terrasse couverte, climatisation et équipements premium.',
    capacity: 6,
    bedrooms: 3,
    price: '85€/nuit'
  },
  {
    id: 'chalet-nature',
    category: 'chalet',
    title: 'Chalet Nature',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    description: 'Chalet en bois intégré dans la nature avec vue panoramique sur les montagnes environnantes.',
    capacity: 5,
    bedrooms: 2,
    price: '80€/nuit'
  },
  {
    id: 'chalet-famille',
    category: 'chalet',
    title: 'Chalet Famille',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    description: 'Grand chalet familial avec terrasse spacieuse et tout le confort nécessaire pour les familles nombreuses.',
    capacity: 8,
    bedrooms: 3,
    price: '110€/nuit'
  },
  {
    id: 'tente-lodge',
    category: 'insolite',
    title: 'Tente Lodge Safari',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    description: 'Expérience glamping dans une tente safari sur pilotis alliant charme authentique et confort moderne.',
    capacity: 5,
    bedrooms: 2,
    price: '90€/nuit'
  },
  {
    id: 'cabane-perchee',
    category: 'insolite',
    title: 'Cabane Perchée',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    description: 'Cabane dans les arbres avec terrasse panoramique pour une expérience unique en pleine nature.',
    capacity: 4,
    bedrooms: 1,
    price: '120€/nuit'
  }
];

const categories = [
  { id: 'all', name: 'Tous les hébergements' },
  { id: 'emplacement', name: 'Emplacements' },
  { id: 'mobil-home', name: 'Mobil-homes' },
  { id: 'chalet', name: 'Chalets' },
  { id: 'insolite', name: 'Hébergements insolites' }
];

const Accommodations = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [showFilters, setShowFilters] = React.useState(false);

  const filteredAccommodations = activeCategory === 'all'
    ? accommodations
    : accommodations.filter(acc => acc.category === activeCategory);

  return (
    <div className="pt-24">
      <section className="bg-camping-beige py-12">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos hébergements" 
            subtitle="Du simple emplacement de camping aux hébergements tout confort, trouvez la formule idéale pour vos vacances" 
          />

          {/* Filtres pour mobile */}
          <div className="md:hidden mb-6">
            <button 
              className="flex items-center justify-center w-full bg-white py-3 rounded-md shadow-sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filtrer par type
            </button>
            
            {showFilters && (
              <div className="mt-2 bg-white rounded-md shadow-md p-4">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`block w-full text-left px-4 py-2 rounded-md mb-1 ${
                      activeCategory === category.id 
                        ? 'bg-camping-darkgreen text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setShowFilters(false);
                    }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filtres pour desktop */}
          <div className="hidden md:flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-lg shadow-sm">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-6 py-3 ${
                    activeCategory === category.id 
                      ? 'bg-camping-darkgreen text-white font-medium' 
                      : 'text-gray-700 hover:bg-gray-50'
                  } ${
                    category.id === 'all' ? 'rounded-l-lg' : ''
                  } ${
                    category.id === 'insolite' ? 'rounded-r-lg' : ''
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Liste des hébergements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map(accommodation => (
              <AccommodationCard
                key={accommodation.id}
                id={accommodation.id}
                title={accommodation.title}
                image={accommodation.image}
                description={accommodation.description}
                capacity={accommodation.capacity}
                bedrooms={accommodation.bedrooms}
                price={accommodation.price}
                className="h-full"
              />
            ))}
          </div>

          {filteredAccommodations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Aucun hébergement ne correspond à votre sélection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-display font-bold mb-4">Informations importantes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-2">Équipements inclus</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Cuisine équipée (réfrigérateur, plaques de cuisson, micro-ondes, vaisselle)</li>
                  <li>Salle d'eau avec douche et WC (selon hébergement)</li>
                  <li>Mobilier de jardin</li>
                  <li>Chauffage dans tous les hébergements locatifs</li>
                  <li>Couettes et oreillers (draps et linge de toilette non fournis)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-2">Conditions de réservation</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Arrivées à partir de 15h et départs avant 10h</li>
                  <li>Acompte de 30% à la réservation</li>
                  <li>Solde à régler 30 jours avant l'arrivée</li>
                  <li>Caution de 300€ pour les hébergements locatifs</li>
                  <li>Taxe de séjour en supplément</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-bold text-lg mb-2">Options et services supplémentaires</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Location de draps : 12€/lit</li>
                <li>Location de serviettes : 8€/personne</li>
                <li>Forfait ménage : 60€</li>
                <li>Lit bébé : 15€/séjour</li>
                <li>Animaux : 5€/jour (carnet de vaccination obligatoire)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="bg-camping-green py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Prêt à réserver votre hébergement idéal ?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Consultez nos disponibilités et tarifs pour planifier votre séjour au Camping des 3 becs.
          </p>
          <Link 
            to="/reservation" 
            className="bg-white hover:bg-camping-beige text-camping-darkgreen font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Accommodations;
