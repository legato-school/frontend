import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import { hero } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legato School - Piano & Cello Lessons for All Ages',
  description: 'Unleash your musical potential with personalized piano and cello lessons. Expert instruction for beginners to advanced students.',
};

export default function HomePage() {
  return (
    <>
      <Hero title={hero.title} subtitle={hero.subtitle} />
      <ServicesOverview />
    </>
  );
}
