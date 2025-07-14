import React from 'react';
import { services } from '@/data';
import MagicButton from './ui/MagicButton';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const Services = () => {
  return (
    <section className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mes Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solutions complètes pour transformer votre présence digitale en 
            <span className="text-purple-400 font-semibold"> véritable levier de croissance</span>
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* Service header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="w-12 h-12"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">
                      {service.price}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-white mb-3">Inclus dans ce service :</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <FaCheck className="text-green-400 mt-1 flex-shrink-0" size={12} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <div className="pt-4 border-t border-gray-700">
                <MagicButton
                  title="En savoir plus"
                  icon={<FaArrowRight />}
                  position="right"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Process section */}
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Mon Processus en 4 Étapes
            </h3>
            <p className="text-gray-300 text-lg">
              Une méthodologie éprouvée pour garantir le succès de votre transformation digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Audit",
                description: "J'analyse votre situation actuelle et identifie les opportunités"
              },
              {
                number: "02", 
                title: "Stratégie",
                description: "Je définis un plan d'action personnalisé et chiffré"
              },
              {
                number: "03",
                title: "Exécution", 
                description: "Je développe et déploie les solutions optimales"
              },
              {
                number: "04",
                title: "Optimisation",
                description: "Je mesure les résultats et améliore les performances"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6 text-lg">
            Prêt à transformer votre activité ? Commençons par un audit gratuit de votre présence digitale.
          </p>
          <a href="#contact">
            <MagicButton
              title="Demander un audit gratuit"
              icon={<FaArrowRight />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;