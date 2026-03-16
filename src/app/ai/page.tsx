import { AISection } from '@/components/AISection';
import { TimelineSection } from '@/components/TimelineSection';

export default function AIPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <AISection />
      <TimelineSection />
    </div>
  );
}
