import Image from "next/image";
import { FaTiktok, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <header className="container">
        <nav
          aria-label="header"
          className="
            absolute
            h-20
            flex
            items-center
            w-full
            justify-center
            gap-4
            sm:gap-8
            md:gap-10
            lg:gap-16
            xl:gap-20
            font-bold
            text-2xl
            transition-all
            duration-200
            backdrop-blur-lg
          "
        >
          <a className="hover:opacity-75 transition-opacity duration-350" href="#home">5NB</a>
          <a className="hover:opacity-75 transition-opacity duration-350" href="#about">About</a>
          <a
            className="hover:opacity-75"
            href="https://www.facebook.com/people/5NonBlondes-5NB/61550656681487/?sk=about"
          ><FaFacebookF size={36} /></a>
          <a
            className="hover:opacity-75"
            href="https://www.instagram.com/5nblondes"
          ><FaInstagram size={36} /></a>
          <a
            className="hover:opacity-75"
            href="https://www.tiktok.com/@5non.blondes"
          ><FaTiktok size={36} /></a>
        </nav>
      </header>
      <main>
        <section id="home" className="hero">
          <div>
            <Image
              width={1920}
              height={1080}
              className="w-full backd"
              src={`/img/portraits/portrait7.jpg`}
              alt='5 Non Blondes'
            />
          </div>
        </section>
        <section
          id="about"
          className="relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56"
        >
          <div className="container mx-auto px-2.5 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            <div className="relative flex flex-col lg:max-w-md xl:max-w-2xl 2xl:max-w-4xl">
              <h2 className="font-bold text-6xl pb-6">About</h2>
              <p className='text-2xl pb-6'>
                We are a lively party cover band, based in Brussels, who bring a burst of energy to every performance.
                With a diverse mix of classic rock, pop, and dance hits from the 70, 80 90s and 00.
              </p>
              <p className='text-2xl'>
                We know how to get any crowd on their feet.
                Whether it`s a wedding or a corporate event, their high-energy shows always create an unforgettable vibe.
              </p>
            </div>
          </div>
          <Image
            alt="Holding guitar"
            loading="lazy"
            width="750"
            height="533"
            decoding="async"
            data-nimg="1"
            className="w-full mt-5 max-h-96 object-cover lg:mt-0 lg:max-h-none lg:max-w-lg lg:block xl:max-w-xl text-transparent"
            src={'/img/portraits/portrait1.jpg'}
          />
        </section>
        <section className="projects relative flex flex-col items-center justify-end w-full mt-16 mx-auto max-w-[150rem] lg:flex-row lg:mt-56">
          <div className="">
            <Image
              width={1920}
              height={1080}
              className="w-full"
              src={'/img/portraits/portrait2.jpg'} alt='5 Non Blondes'
            />
          </div>
        </section>
        <footer>
          <nav
            aria-label="footer"
            className="h-60 w-full flex justify-center items-center flex-col gap-4"
          >
            <div className="flex gap-4">
              <a
                className="hover:opacity-75"
                href="https://www.facebook.com/people/5NonBlondes-5NB/61550656681487/?sk=about"
                >
                <FaFacebookF size={30} />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.instagram.com/5nblondes"
                >
                <FaInstagram size={30} />
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.tiktok.com/@5non.blondes"
                >
                <FaTiktok size={30} />
              </a>
            </div>
            <a href="#home" className="text-2xl">
              {(new Date).getFullYear()} - 5NB
            </a>
          </nav>
        </footer>
      </main>
    </div>
  );
}
