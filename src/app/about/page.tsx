import { AboutSection } from '@/components/AboutSection';
import { TimelineSection } from '@/components/TimelineSection';

export default function AboutPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <AboutSection />
      <TimelineSection />
    </div>
  );
}
