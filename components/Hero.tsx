import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import MagicButton from "./ui/MagicButton"
import { FaLocationArrow, FaChartBar } from "react-icons/fa"

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36">
        {/* Spotlights - gardons le même effet visuel */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="-top-10 -left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight
            className="-top-28 -left-80 h-[80vh] w-[50vw]"
            fill="blue" 
          />
        </div>

        {/* Grid background - identique */}
        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        {/* Contenu principal - nouvelle approche agence */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-4xl lg:max-w-[70vw] flex flex-col items-center justify-center">
            
            {/* Badge expert */}
            <div className="mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                <FaChartBar className="mr-2" />
                Expert Transformation Digitale
              </span>
            </div>

            {/* Titre principal orienté business */}
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-7xl font-bold"
              words="Transformez votre activité en machine à générer des clients"
            />

            {/* Sous-titre avec proposition de valeur */}
            <p className="text-center md:tracking-wider mb-6 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl">
              Expert en marketing digital et développement web, j'aide les entrepreneurs à 
              <span className="text-purple-400 font-semibold"> doubler leur chiffre d'affaires </span>
              grâce au numérique
            </p>

            {/* Preuves sociales rapides */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base text-gray-400">
              <div className="flex items-center">
                <span className="text-green-400 font-bold text-lg mr-1">+150%</span>
                <span>ROI moyen clients</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 font-bold text-lg mr-1">25+</span>
                <span>projets réussis</span>
              </div>
              <div className="flex items-center">
                <span className="text-purple-400 font-bold text-lg mr-1">95%</span>
                <span>clients satisfaits</span>
              </div>
            </div>

            {/* CTAs principaux */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a href="#contact">
                <MagicButton 
                  title="Audit gratuit de votre site" 
                  icon={<FaLocationArrow />} 
                  position="right" 
                />
              </a>
              <a 
                href="#realisations" 
                className="px-6 py-3 text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Voir nos résultats clients
              </a>
            </div>

            {/* Petite mention de réassurance */}
            <p className="text-xs text-gray-500 mt-6 text-center">
              ✅ Audit gratuit sans engagement • ✅ Première consultation offerte • ✅ ROI garanti
            </p>
          </div>
        </div>

        {/* Section problème/solution condensée */}
        <div className="relative z-10 mt-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 px-4">
            
            {/* Problèmes clients */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">Vous vous reconnaissez ?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  Votre site ne génère pas de leads qualifiés
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  Vos investissements digitaux ne sont pas rentables
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  Vous perdez des clients face à la concurrence
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">❌</span>
                  Vous ne savez pas mesurer vos performances
                </li>
              </ul>
            </div>

            {/* Solutions apportées */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">Je vous aide à :</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Créer un site qui convertit vos visiteurs en clients
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Mettre en place une stratégie marketing ROIste
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Vous démarquer de vos concurrents
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Mesurer et optimiser vos résultats
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero