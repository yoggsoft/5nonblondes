import {
  Intro,
  About,
  TextParallax,
  PhotoGallery,
  Footer,
  Shows
} from '@/components';

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-background-primary'>
        <Intro />
        <TextParallax />
        <About />
        <Shows />
        <TextParallax />
        <PhotoGallery />
        <Footer />
      </main>
    </>
  );
}
