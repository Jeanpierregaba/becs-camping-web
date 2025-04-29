
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sun, Tent, Trees, Bike, Clock } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import SectionTitle from '@/components/SectionTitle';
import AccommodationCard from '@/components/AccommodationCard';
import ActivityCard from '@/components/ActivityCard';
import TestimonialCard from '@/components/TestimonialCard';

const Home = () => {
  // Données pour le slider
  const sliderData = [
    {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      title: 'Bienvenue au Camping des 3 becs',
      description: 'Au cœur de la Drôme provençale, un havre de paix en pleine nature'
    },
    {
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Découvrez nos hébergements de qualité',
      description: 'Des emplacements spacieux aux hébergements tout confort'
    },
    {
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
      title: 'Explorez la splendeur naturelle de la Drôme',
      description: 'Randonnées, baignades et découvertes au programme de vos vacances'
    }
  ];

  // Données pour les hébergements
  const accommodations = [
    {
      id: 'emplacement-tente',
      title: 'Emplacement Tente',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
      description: 'Emplacements spacieux pour tentes dans un cadre naturel préservé, avec accès aux sanitaires modernes.',
      capacity: 6,
      price: '15€/nuit'
    },
    {
      id: 'mobil-home-confort',
      title: 'Mobil-Home Confort',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      description: 'Mobil-home tout équipé avec terrasse, idéal pour les familles cherchant confort et praticité.',
      capacity: 4,
      bedrooms: 2,
      price: '65€/nuit'
    },
    {
      id: 'chalet-nature',
      title: 'Chalet Nature',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      description: 'Chalet en bois intégré dans la nature avec vue panoramique sur les montagnes environnantes.',
      capacity: 6,
      bedrooms: 2,
      price: '85€/nuit'
    }
  ];

  // Données pour les activités
  const activities = [
    {
      title: 'Baignade et détente',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      description: 'Profitez de notre piscine chauffée avec pataugeoire pour les enfants et espace détente pour les adultes.',
      onSite: true
    },
    {
      title: 'Randonnées pédestres',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
      description: 'Explorez les sentiers balisés au départ du camping pour découvrir les paysages spectaculaires de la Drôme.',
      onSite: false
    },
    {
      title: 'VTT et cyclotourisme',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      description: 'Location de vélos au camping et nombreux circuits à proximité pour tous les niveaux.',
      onSite: true
    }
  ];

  // Données pour les témoignages
  const testimonials = [
    {
      name: 'Sophie L.',
      date: 'Août 2024',
      comment: 'Camping parfait pour des vacances en famille. La piscine a fait le bonheur des enfants et le cadre naturel est magnifique. Nous reviendrons !',
      rating: 5
    },
    {
      name: 'Pierre M.',
      date: 'Juillet 2024',
      comment: 'Séjour très agréable dans un chalet bien équipé. Le personnel est attentionné et l\'emplacement idéal pour découvrir la région. Un grand merci !',
      rating: 4
    },
    {
      name: 'Marie D.',
      date: 'Juin 2024',
      comment: 'Nous avons séjourné une semaine en mobil-home et tout était parfait. Camping calme et bien entretenu, sanitaires impeccables.',
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section avec le slider */}
      <section>
        <HeroSlider slides={sliderData} />
      </section>

      {/* Présentation du camping */}
      <section className="section-padding bg-camping-cream">
        <div className="container mx-auto container-padding">
          <SectionTitle 
            title="Votre évasion nature au cœur de la Drôme" 
            subtitle="Découvrez le Camping des 3 becs, un havre de paix niché dans un écrin de verdure au pied des majestueuses montagnes des Trois Becs." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-content mb-6">
                Situé dans la magnifique vallée de la Drôme, notre camping 4 étoiles vous accueille dans un cadre naturel préservé offrant le parfait équilibre entre détente, aventure et découverte.
              </p>
              <p className="text-content mb-6">
                Que vous soyez amateur de randonnées, passionné de sports nautiques ou simplement à la recherche d'un refuge paisible pour vous ressourcer, le Camping des 3 becs est l'endroit idéal pour vos vacances.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link to="/camping" className="btn-primary">
                  Découvrir notre camping
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
                alt="Vue panoramique du Camping des 3 becs" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Points forts du camping */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <SectionTitle 
            title="Pourquoi choisir notre camping ?" 
            subtitle="Une expérience unique au plus proche de la nature et du confort" 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-camping-beige p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-camping-darkgreen rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Emplacement idéal</h3>
              <p className="text-gray-600">Au cœur d'une région touristique d'exception, proche de nombreux sites naturels et culturels.</p>
            </div>
            
            <div className="bg-camping-beige p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-camping-darkgreen rounded-full flex items-center justify-center mx-auto mb-4">
                <Tent className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Hébergements variés</h3>
              <p className="text-gray-600">Du simple emplacement pour tente aux hébergements tout confort, pour tous les goûts et tous les budgets.</p>
            </div>
            
            <div className="bg-camping-beige p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-camping-darkgreen rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Cadre naturel exceptionnel</h3>
              <p className="text-gray-600">Un environnement préservé offrant calme, verdure et air pur pour un ressourcement total.</p>
            </div>
            
            <div className="bg-camping-beige p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-camping-darkgreen rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Climat idéal</h3>
              <p className="text-gray-600">Profitez du doux climat méditerranéen de la Drôme, ensoleillé mais jamais caniculaire.</p>
            </div>
            
            <div className="bg-camping-beige p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-camping-darkgreen rounded-full flex items-center justify-center mx-auto mb-4">
                <Bike className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Activités pour tous</h3>
              <p className="text-gray-600">Des animations pour tous les âges et tous les goûts, au camping et dans les environs.</p>
            </div>
            
            <div className="bg-camping-beige p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-camping-darkgreen rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Ouvert de avril à octobre</h3>
              <p className="text-gray-600">Profitez de la belle saison, du printemps aux couleurs automnales de la Drôme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hébergements */}
      <section className="section-padding bg-camping-beige">
        <div className="container mx-auto container-padding">
          <SectionTitle 
            title="Nos hébergements" 
            subtitle="Découvrez nos différentes options d'hébergement pour un séjour confortable au plus près de la nature" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
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
          
          <div className="text-center mt-12">
            <Link to="/hebergements" className="btn-primary">
              Voir tous nos hébergements
            </Link>
          </div>
        </div>
      </section>

      {/* Activités */}
      <section className="section-padding bg-white">
        <div className="container mx-auto container-padding">
          <SectionTitle 
            title="Activités et loisirs" 
            subtitle="Profitez de nombreuses activités sur place et aux alentours pour des vacances dynamiques ou reposantes" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                title={activity.title}
                image={activity.image}
                description={activity.description}
                onSite={activity.onSite}
                className="h-full"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/activites" className="btn-primary">
              Découvrir toutes les activités
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding bg-camping-cream">
        <div className="container mx-auto container-padding">
          <SectionTitle 
            title="Ce que disent nos clients" 
            subtitle="Découvrez les expériences de nos visiteurs au Camping des 3 becs" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                date={testimonial.date}
                comment={testimonial.comment}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-action */}
      <section className="py-20 bg-camping-darkgreen text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Prêt à réserver vos vacances au Camping des 3 becs ?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contactez-nous dès maintenant pour vérifier les disponibilités et planifier votre séjour dans notre havre de paix en Drôme provençale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/reservation" className="btn-primary">
              Réserver maintenant
            </Link>
            <Link to="/contact" className="border-2 border-white hover:bg-white hover:text-camping-darkgreen text-white py-3 px-6 rounded-md transition-all duration-300">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
