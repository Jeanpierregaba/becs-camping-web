
import React from 'react';
import SectionTitle from '@/components/SectionTitle';

const CampingGallery = () => {
  const galleryImages = [
    'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027'
  ];

  return (
    <section className="section-padding bg-camping-cream">
      <div className="container mx-auto container-padding">
        <SectionTitle 
          title="Galerie photos" 
          subtitle="Découvrez notre camping en images" 
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src={image}
                alt={`Photo du camping ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampingGallery;
