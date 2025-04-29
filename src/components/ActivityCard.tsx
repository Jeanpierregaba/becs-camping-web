
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  image: string;
  description: string;
  onSite: boolean;
  icon?: LucideIcon;
  className?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  image,
  description,
  onSite,
  icon: Icon,
  className,
}) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden h-full", className)}>
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
        <div className="flex items-center mb-3">
          {Icon && <Icon className="h-5 w-5 text-camping-darkgreen mr-2" />}
          <h3 className="text-lg font-display font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
