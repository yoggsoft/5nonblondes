import {
  Intro,
  About,
  TextParallax,
} from '@/components';

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-background-primary'>
        <Intro />
        <TextParallax />
        <About />
      </main>
    </>
  );
}
