import HomeContent from './(public)/page';
import PublicLayoutShell from '../components/public/PublicLayoutShell';

export default function HomePage() {
  return (
    <PublicLayoutShell>
      <HomeContent />
    </PublicLayoutShell>
  );
}
