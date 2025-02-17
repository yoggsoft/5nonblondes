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
      <div className="scanlines"></div>
      <main className='min-h-screen bg-amethyst-primary'
        style={{background: 'linear-gradient(-45deg, #D100FF 0%, rgba(209,0,255,1) 15%, rgba(209,0,255,1) 15%, rgba(209,0,255,1) 33%, rgba(2,0,36,1) 33%, rgba(2,0,36,1) 70%, rgba(124,124,245,1) 70%, rgba(130,130,255,1) 73%)'}}
      >
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
