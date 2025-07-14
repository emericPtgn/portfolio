import dynamic from 'next/dynamic';

// Importation dynamique des composants existants (à garder)
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const Clients = dynamic(() => import('@/components/Clients'), { ssr: false });

// Nouveaux composants agence
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false }); // Hero modifié
const Services = dynamic(() => import('@/components/Services'), { ssr: false }); // Nouveau
const CaseStudies = dynamic(() => import('@/components/CaseStudies'), { ssr: false }); // Remplace RecentProjects

// Composants UI
import { FloatingNav } from '@/components/ui/FloatingNav';

// Données agence
import { navItems } from '@/data';

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Navigation flottante */}
        <FloatingNav navItems={navItems} />
        
        {/* Hero section transformé en landing agence */}
        <Hero />
        
        {/* Section services (nouveau) */}
        <Services />
        
        {/* Études de cas clients avec résultats (remplace RecentProjects) */}
        <CaseStudies />
        
        {/* Grid de présentation (gardé mais données modifiées) */}
        <Grid />
        
        {/* Témoignages clients (gardé, données enrichies) */}
        <Clients />
        
        {/* Footer (gardé) */}
        <Footer />
      </div>
    </main>
  );
}