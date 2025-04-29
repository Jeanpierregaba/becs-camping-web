
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const CampingHistory = () => {
  return (
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
  );
};

export default CampingHistory;
