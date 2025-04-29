
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  className 
}) => {
  return (
    <div 
      className={cn(
        "mb-12", 
        centered ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="title-medium text-camping-darkgreen relative inline-block">
        {title}
        <span className="block h-1 bg-camping-ochre w-2/3 mt-2 mx-auto"></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
