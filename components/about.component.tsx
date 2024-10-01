'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './section-header.component';

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p className='mb-3'>
        After graduating with a Bachelor degree in <span className='font-medium'>Computer Science</span>, I decided to
        pursue my passion for programming. I worked with a friend who was already a professional developer and learned{' '}
        <span className='font-medium'>backend development</span>.{' '}
        <span className='italic'>My favorite part of programming</span> is the problem-solving aspect. I{' '}
        <span className='underline'>love</span> the feeling of finally figuring out a solution to a problem. My core
        stack is <span className='font-medium'>ASP.Net(C#), Node.js, React, Next.js and SQL Database</span>. I am also
        familiar with TypeScript, Prisma and Tailwind CSS. I am always looking to learn new technologies. I am currently
        looking for a <span className='font-medium'>full-time position</span> as a software developer.
      </p>
      <p>
        <span className='italic'>When I am not coding</span>, I enjoy playing video games and watching movies. I also
        enjoy <span className='font-medium'>learning new technologies</span>. I am currently learning about{' '}
        <span className='font-medium'>Project Management with Agile Methodology</span>.
      </p>
    </motion.section>
  );
}
