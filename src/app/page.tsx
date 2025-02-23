import {
  Intro,
  ContactUs,
  About,
  TextParallax,
  PhotoGallery,
  Footer,
  Shows
} from '@/components';

export default function Home() {
  return (
    <>
      <div className="scanlines motion-reduce:hidden"></div>
      <main className='min-h-screen bg-background-primary'>
        <Intro />
        <TextParallax />
        <About />
        <Shows />
        <ContactUs />
        <TextParallax />
        <PhotoGallery />
        <Footer />
      </main>
    </>
  );
}
