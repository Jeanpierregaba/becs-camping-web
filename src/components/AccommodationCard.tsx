
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Users, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccommodationCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  capacity: number;
  bedrooms?: number;
  price: string;
  className?: string;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({
  id,
  title,
  image,
  description,
  capacity,
  bedrooms,
  price,
  className,
}) => {
  return (
    <div className={cn("card-accommodation", className)}>
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-camping-ochre text-white px-3 py-1 rounded-full">
          À partir de {price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-700">
            <Users className="w-5 h-5 mr-1" />
            <span>{capacity} personnes</span>
          </div>
          
          {bedrooms && (
            <div className="flex items-center text-gray-700">
              <Bed className="w-5 h-5 mr-1" />
              <span>{bedrooms} chambre{bedrooms > 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
        
        <Link 
          to={`/hebergements/${id}`}
          className="inline-flex items-center text-camping-green hover:text-camping-darkgreen font-medium"
        >
          En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default AccommodationCard;
