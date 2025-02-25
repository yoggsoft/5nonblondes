'use client';

import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  MotionValue
} from 'framer-motion';

const Slide = ({
  left,
  progress,
  direction
}: {
  left: string,
  progress: MotionValue<number>,
  direction: 'left' | 'right'
}) => {
  const moveDirection = direction == 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [200 * moveDirection, -200 * moveDirection]);

  return (
    <motion.div style={{ x: translateX, left: left }} className='relative flex whitespace-nowrap'>
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
      <Phrase />
    </motion.div>
  );
};

const Phrase = () => {
  return (
    <div>
      <p className='
        font-robotoCondensed
        text-[5rem]
        leading-none
        overflow-hidden
        uppercase
        font-bold
        italic
        pointer-events-none
      text-white'
      >
        5 NON BLONDES&nbsp;-&nbsp;5 NON BLONDES&nbsp;-&nbsp;5 NON BLONDES&nbsp;-&nbsp;5 NON BLONDES&nbsp;-&nbsp;5 NON BLONDES&nbsp;-&nbsp;
      </p>
    </div>
  );
};

export default function TextParallax() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      className='overflow-hidden mt-4 lg:mt-8'
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      ref={sectionRef}>
      <div ref={containerRef}>
        <Slide direction={'left'} left={'-40%'} progress={scrollYProgress} />
        <Slide direction={'right'} left={'-25%'} progress={scrollYProgress} />
      </div>
    </section>
  );
}
