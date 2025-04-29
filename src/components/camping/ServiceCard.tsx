
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="bg-camping-darkgreen p-3 rounded-full mr-4">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-display font-bold">{title}</h3>
      </div>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
