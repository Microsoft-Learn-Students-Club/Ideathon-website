// For Rough Notation install:
// npm install react-rough-notation --legacy-peer-deps

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import RotatingText from '../blocks/RotatingText/RotatingText';
import TextType from '../blocks/TextType/TextType';
import { SplitText } from 'gsap/all';
import { motion } from 'framer-motion';
import Tape2 from "../assets/tape2.png";
import mlsclogo from "../assets/about/mlsclogo.png"
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const Hero = () => {
  const dateRef = useRef(null);

  useEffect(() => {
    if (dateRef.current) {
      const annotation = annotate(dateRef.current, {
        type: "circle",
        color: "var(--color-yellow)",
        strokeWidth: 4,
        padding: [15, 0],
        iterations: 3,
      });
      annotation.show();
    }
  }, []);

  useGSAP(() => {
    const heroSplit = new SplitText('.title', { type: 'chars, words' });
    const paraSplit = new SplitText('.subtitle', { type: 'lines' });

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 2,
      ease: 'expo.out',
      stagger: 0.06
    })

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-logo", { y: 200 }, 0)
  }, [])

  return (
    <>
      <section id="hero" className="min-h-screen flex flex-col overflow-x-hidden">

        {/* Blobs */}
        <div className='w-100 h-100 -z-10 absolute rounded-full bg-yellow-100 scale-150'
          style={{
            backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
            backgroundSize: "20px 20px",
          }}
        >
        </div>

        {/* Blobs */}
        <div className="hidden lg:block absolute w-[200px] h-[400px] -z-10 rounded-l-full right-12 top-[20%] bg-yellow-100 scale-150"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        ></div>

        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          src={mlsclogo}
          alt="logo"
          className="block lg:absolute top-[20vh] mx-auto lg:left-1/6 w-30 lg:w-30 lg:rotate-[6deg] mt-[20%] lg:mt-[0%] mb-5"
        />

        {/* Event Logo / Header */}
       <header className="flex justify-center items-center w-full sm:mt-0 lg:mt-[10%]">
       <img 
       src="/logo.png" 
       alt="Ideathon Logo" 
       className="h-40 w-full lg:h-60 lg:pl-10 object-contain"
       />
       </header>

        <br />
        {/* Event Date */}
        <div
          className="block mx-auto scale-90 lg:scale-100 lg:absolute top-[40%] md:left-20 lg:left-6/8 -rotate-3 font-extrabold bg-[var(--color-cream)] rounded-2xl border-3 border-[var(--color-maroon)] h-50 w-50 align-middle text-center"
          style={{
            boxShadow: "-8px 8px 0px rgba(120, 53, 15, 0.4)",
            backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
            backgroundSize: "20px 20px",
          }}
        >
          <div className="w-full h-10 bg-[var(--color-maroon)] border-2 border-[var(--color-maroon)] rounded-t-xl">
            <span className="absolute left-0 w-5 h-5 m-2 rounded-full bg-black border-3 border-amber-700"></span>
            <span className="absolute right-0 w-5 h-5 m-2 rounded-full bg-black border-3 border-amber-700"></span>
          </div>
          <div ref={dateRef} className="flex flex-col my-3"
            style={{ transform: "scaleX(1.2) scaleY(1)" }}
          >
            <span className="my-auto text-7xl relative inline-block">
              17
            </span>
            <span className="text-3xl">SEPT</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut", delay: 1 }}
          className="w-full flex justify-center py-4 lg:mb-25 scale-80 md:scale-100 z-50"
        >
          <a href="https://unstop.com/competitions/novatra-10-where-ideas-meet-impact-vidyavardhinis-college-of-engineering-and-technology-maharashtra-1554303" target="_blank" rel="noopener noreferrer">
            <button
              className="button bg-[var(--color-maroon)] border-5 border-[var(--color-black)] cursor-pointer
        text-[var(--color-cream)] px-8 py-4 rounded-full font-bold 
        hover:bg-amber-700 transition text-3xl uppercase
        shadow-[6px_6px_0px_rgba(120,53,15,0.5)]"
            >
              Register Now!
            </button>
          </a>
        </motion.div>


        <div className="body">
          <div className="content ">

            <div className="space-y-5 block">

              <p className='subtitle'>

                <RotatingText
                  texts={['Bid.','Pitch.', 'Network.']}
                  mainClassName="font-bold px-2 sm:px-2 md:px-3 bg-[var(--color-teal)] shadow-[6px_6px_0px_rgba(120,53,15,0.5)] text-white text-2xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-full border-3 border-black"
                  staggerFrom={"last"} initial={{ y: "100%" }} animate={{ y: 0 }}
                  exit={{ y: "-120%" }} staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />

              </p>
              <p className='subtitle text-xl lg:text-auto'>
                Where Ideas <br /> Spark Solutions
              </p>
            </div>

            <div className='view-right'>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="scale-50 lg:scale-100 hidden lg:relative bg-[color:var(--color-pastel-blue)] p-6 rounded-xl border-3 border-amber-950 transition-transform duration-300"
                style={{
                  rotate: "3deg",
                  boxShadow: "8px 8px 0px rgba(120, 53, 15, 0.4)",
                }}
              >
                <img src={Tape2} alt="tape" className="absolute -top-3 right-6 w-18 -rotate-[6deg]" />
                <p className='subtitle'>
                  <TextType as="span" className='font-bold text-xl'
                    text={["A creativity-driven challenge where innovators come together to brainstorm, collaborate, and pitch groundbreaking solutions to real-world problems.",
                      "An idea marathon that brings minds together to innovate, solve, and shape the future.",
                      "A platform for creators to brainstorm, collaborate, and turn bold ideas into impactful solutions."]}
                    typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="|"
                  />
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;