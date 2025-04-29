
import React from 'react';
import CampingPresentation from '@/components/camping/CampingPresentation';
import CampingServices from '@/components/camping/CampingServices';
import CampingHistory from '@/components/camping/CampingHistory';
import CampingGallery from '@/components/camping/CampingGallery';
import CampingCallToAction from '@/components/camping/CampingCallToAction';

const Camping = () => {
  return (
    <div className="pt-24">
      {/* Présentation du camping */}
      <CampingPresentation />

      {/* Services et équipements */}
      <CampingServices />

      {/* Histoire et valeurs */}
      <CampingHistory />

      {/* Galerie photos */}
      <CampingGallery />

      {/* Call-to-action */}
      <CampingCallToAction />
    </div>
  );
};

export default Camping;
