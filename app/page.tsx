import About from '@/components/about.component';
import Intro from '@/components/intro.component';
import SectionDivider from '@/components/section-divider.conponent';
export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
}
