import dynamic from 'next/dynamic';

// Importation dynamique des composants avec typage explicite
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });

import { FloatingNav } from '@/components/ui/FloatingNav';

// Autres importations dynamiques
const Clients = dynamic(() => import('@/components/Clients'), { ssr: false });
const Approach = dynamic(() => import('@/components/ui/Approach'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

// Exemple d'utilisation des éléments de navigation
import { navItems } from '@/data';


export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Approach/>
      <Footer />
    </div>
   </main>
  );
}
