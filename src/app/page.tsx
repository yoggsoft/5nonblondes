import {
  Intro,
  Listen,
  ContactUs,
  About,
  TextParallax,
  Shows,
  PhotoGallery,
} from '@/components';

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-white'>
        <Intro />
        <About />
        <Listen />
        <Shows />
        <ContactUs />
        <TextParallax />
        <PhotoGallery />
      </main>
    </>
  );
}
