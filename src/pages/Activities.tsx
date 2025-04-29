
import React from 'react';
import { Hiking, Fish, Sun, Kayak, Horse, Mountain, Paragliding } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ActivityCard from '@/components/ActivityCard';

const Activities = () => {
  const activities = [
    {
      title: "Randonnées",
      description: "Profitez de magnifiques sentiers de randonnée autour du camping, offrant des vues panoramiques sur les 3 becs et la vallée de la Drôme.",
      image: "/placeholder.svg",
      icon: Hiking,
      onSite: true
    },
    {
      title: "Pêche",
      description: "La rivière Drôme à proximité du camping est un lieu idéal pour la pêche. Venez taquiner la truite dans un cadre naturel préservé.",
      image: "/placeholder.svg",
      icon: Fish,
      onSite: false
    },
    {
      title: "Bains de soleil",
      description: "Notre camping dispose d'une plage aménagée au bord de la rivière, parfaite pour bronzer et se détendre au soleil.",
      image: "/placeholder.svg",
      icon: Sun,
      onSite: true
    },
    {
      title: "Kayak",
      description: "Descendez la Drôme en kayak et découvrez des paysages à couper le souffle. Location de kayaks et organisation de sorties depuis le camping.",
      image: "/placeholder.svg",
      icon: Kayak,
      onSite: true
    },
    {
      title: "Équitation",
      description: "Le centre équestre partenaire à 3km du camping propose des balades à cheval pour tous les niveaux dans les collines environnantes.",
      image: "/placeholder.svg",
      icon: Horse,
      onSite: false
    },
    {
      title: "Escalade",
      description: "Les falaises des 3 becs offrent de nombreuses voies d'escalade pour tous les niveaux. Guides et matériel disponibles sur réservation.",
      image: "/placeholder.svg",
      icon: Mountain,
      onSite: false
    },
    {
      title: "Parapente",
      description: "Découvrez la Drôme vue du ciel avec des vols en parapente. Plusieurs sites de décollage à proximité du camping.",
      image: "/placeholder.svg",
      icon: Paragliding,
      onSite: false
    },
    {
      title: "Montgolfière",
      description: "Vivez une expérience inoubliable avec un vol en montgolfière au lever du soleil, survolant les paysages spectaculaires de la Drôme.",
      image: "/placeholder.svg",
      icon: Sun, // Remplacé par Sun car la montgolfière n'est pas disponible dans lucide-react
      onSite: false
    }
  ];

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12">
        <SectionTitle 
          title="Activités et loisirs" 
          subtitle="Découvrez toutes les activités disponibles au camping et aux alentours"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex">
              <ActivityCard
                title={activity.title}
                description={activity.description}
                image={activity.image}
                onSite={activity.onSite}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-camping-beige p-8 rounded-lg">
          <h3 className="text-xl font-display font-bold mb-4">Informations pratiques</h3>
          <p className="mb-4">Toutes nos activités sont accessibles à tous les âges et niveaux. Pour plus d'informations ou pour réserver une activité, n'hésitez pas à contacter l'accueil du camping.</p>
          <p>Des tarifs préférentiels sont proposés à nos résidents pour les activités de nos partenaires.</p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
