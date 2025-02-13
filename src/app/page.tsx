import {
  Intro,
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
      <main className='min-h-screen bg-purple-700'>
        <Intro />
        <About />
        {/* <Shows /> */}
        <ContactUs />
        <TextParallax />
        <PhotoGallery />
        <Footer />
      </main>
    </>
  );
}
