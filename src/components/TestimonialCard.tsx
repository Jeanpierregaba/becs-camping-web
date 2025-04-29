
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  date: string;
  comment: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  date,
  comment,
  rating,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-camping-beige overflow-hidden mr-4 flex-shrink-0">
            {image ? (
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-camping-green text-white text-xl font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? "text-camping-ochre fill-camping-ochre" : "text-gray-300"}
            />
          ))}
        </div>
      </div>
      <p className="text-gray-700 italic">{comment}</p>
    </div>
  );
};

export default TestimonialCard;
