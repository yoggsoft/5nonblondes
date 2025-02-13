import {
  Intro,
  Listen,
  ContactUs,
  About,
  TextParallax,
  Shows,
  PhotoGallery,
  Footer
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
        <Footer />
      </main>
    </>
  );
}
