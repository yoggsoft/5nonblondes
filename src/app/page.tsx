import {
  Intro,
  ContactUs,
  About,
  TextParallax,
  PhotoGallery,
  Footer
} from '@/components';

export default function Home() {
  return (
    <>
      <main className='min-h-screen bg-purple-700'>
        <Intro />
        <TextParallax />
        <About />
        <ContactUs />
        <TextParallax />
        <PhotoGallery />
        <Footer />
      </main>
    </>
  );
}
