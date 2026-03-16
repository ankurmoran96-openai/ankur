import { Hero } from '@/components/Hero';
import { TimelineSection } from '@/components/TimelineSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <TimelineSection />
    </div>
  );
}
