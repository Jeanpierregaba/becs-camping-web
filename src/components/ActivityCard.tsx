
import React from 'react';
import { cn } from '@/lib/utils';

interface ActivityCardProps {
  title: string;
  image: string;
  description: string;
  onSite: boolean;
  className?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  image,
  description,
  onSite,
  className,
}) => {
  return (
    <div className={cn("card-activity group", className)}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {onSite && (
          <div className="absolute top-4 left-4 bg-camping-darkgreen text-white text-sm px-3 py-1 rounded-full">
            Sur place
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-display font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
