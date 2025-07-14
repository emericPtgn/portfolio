import React from 'react';
import { caseStudies } from '@/data';
import { FaExternalLinkAlt, FaQuoteLeft, FaArrowUp, FaUsers, FaChartBar, FaClock } from 'react-icons/fa';

const CaseStudies = () => {
  return (
    <section className="py-20" id="realisations">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Résultats Clients
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez comment j'ai aidé mes clients à 
            <span className="text-purple-400 font-semibold"> multiplier leur chiffre d'affaires </span>
            grâce au digital
          </p>
        </div>

        {/* Stats rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: FaArrowUp, value: "150%", label: "ROI moyen" },
            { icon: FaUsers, value: "25+", label: "Clients accompagnés" },
            { icon: FaChartBar, value: "2M€+", label: "CA généré" },
            { icon: FaClock, value: "95%", label: "Satisfaction client" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <stat.icon className="text-purple-400 text-2xl mb-2 mx-auto" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Case studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center bg-gray-900/30 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300`}
            >
              {/* Image et technos */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src={study.img} 
                    alt={study.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <img 
                        key={techIndex}
                        src={tech} 
                        alt="Technology"
                        className="w-8 h-8 bg-white rounded p-1"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="lg:w-1/2">
                <div className="mb-4">
                  <span className="text-purple-400 text-sm font-medium uppercase tracking-wide">
                    {study.sector}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1 mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {study.description}
                  </p>
                </div>

                {/* Résultats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <div className="text-green-400 text-lg font-bold">{study.results.revenue}</div>
                    <div className="text-gray-400 text-sm">Chiffre d'affaires</div>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <div className="text-blue-400 text-lg font-bold">{study.results.traffic}</div>
                    <div className="text-gray-400 text-sm">Trafic web</div>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                    <div className="text-purple-400 text-lg font-bold">{study.results.conversion}</div>
                    <div className="text-gray-400 text-sm">Conversions</div>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                    <div className="text-orange-400 text-lg font-bold">{study.results.timeframe}</div>
                    <div className="text-gray-400 text-sm">Délai</div>
                  </div>
                </div>

                {/* Témoignage */}
                <div className="bg-gray-800/50 rounded-lg p-4 mb-4 border-l-4 border-purple-500">
                  <FaQuoteLeft className="text-purple-400 mb-2" />
                  <p className="text-gray-300 italic text-sm mb-2">
                    "{study.testimonial}"
                  </p>
                  <div className="text-white font-medium text-sm">
                    — {study.client}
                  </div>
                </div>

                {/* Lien vers le site */}
                {study.link !== "#" && (
                  <a 
                    href={study.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Voir le site</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Votre projet pourrait être le prochain succès
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Rejoignez mes clients qui ont transformé leur activité grâce au digital. 
            Commençons par analyser votre potentiel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Demander un audit gratuit
            </a>
            <a 
              href="#services"
              className="border border-gray-600 hover:border-purple-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Découvrir mes services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;