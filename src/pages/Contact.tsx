
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4 py-12">
        <SectionTitle 
          title="Contactez-nous" 
          subtitle="Nous sommes à votre disposition pour répondre à toutes vos questions" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulaire de contact */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-display font-bold mb-6">Formulaire de contact</h3>
            <ContactForm />
          </div>

          {/* Informations de contact */}
          <div>
            <div className="bg-camping-beige p-6 md:p-8 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-display font-bold mb-6">Nos coordonnées</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-camping-darkgreen mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Adresse</h4>
                    <address className="not-italic">
                      Camping des 3 becs<br />
                      Route de Saillans<br />
                      26340 Vercheny<br />
                      Drôme, France
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-camping-darkgreen mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Téléphone</h4>
                    <p>+33 4 75 21 XX XX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-camping-darkgreen mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p>contact@campingdes3becs.fr</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-camping-darkgreen mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">Horaires d'accueil</h4>
                    <p>Avril à Juin et Septembre à Octobre:<br />
                    9h00 - 12h00 et 14h00 - 19h00</p>
                    <p className="mt-2">Juillet et Août:<br />
                    8h00 - 20h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-display font-bold mb-6">Comment nous trouver</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90733.05463385282!2d5.1457317871094!3d44.70679900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ca68bebf1e4209%3A0x40819a5fd970300!2s26340%20Vercheny!5e0!3m2!1sfr!2sfr!4v1713642520916!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte du Camping des 3 becs"
                ></iframe>
              </div>
              <div className="mt-4">
                <h4 className="font-bold mb-2">Accès</h4>
                <p className="text-gray-700">
                  Depuis Valence, prenez la D93 en direction de Crest puis suivez la D93 jusqu'à Vercheny. À Vercheny, suivez les panneaux "Camping des 3 becs".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
