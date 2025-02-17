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
      <div className="scanlines motion-reduce:hidden"></div>
      <main className='min-h-screen bg-background-primary'>
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
