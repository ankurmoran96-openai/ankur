import { Hero } from '@/components/Hero';
import { DashboardSection } from '@/components/DashboardSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <DashboardSection />
    </div>
  );
}
