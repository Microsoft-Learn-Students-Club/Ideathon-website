import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import RotatingText from '../blocks/RotatingText/RotatingText';
import TextType from '../blocks/TextType/TextType';
import { SplitText } from 'gsap/all';
import { motion } from 'framer-motion';
import Tape2 from "../assets/tape2.png";
import mlsclogo from "../assets/about/mlsclogo.png"

const Hero = () => {

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
      <section id="hero" className="bg-yellow-50">
        <h1 className='title'>Ideathon 2025</h1>
        <br />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <img src={mlsclogo} alt="logo" className="absolute -top-3 right-10 w-30 rotate-[6deg] subtitle" />
              <p className='subtitle'><RotatingText
                texts={['Ignite Your Idea.', 'Collaborate For Change.', 'Innovate To Impact.', 'Build The Future.']}
                mainClassName="font-bold px-2 sm:px-2 md:px-3 bg-[#94D2BD] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"} initial={{ y: "100%" }} animate={{ y: 0 }}
                exit={{ y: "-120%" }} staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              /></p>
              <p className='subtitle'>
                Where Ideas <br /> Spark Solutions
              </p>
            </div>

            <div className='view-right'>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`relative group bg-[color:var(--color-pastel-blue)] p-6 rounded-xl border-3 border-amber-950 transition-transform duration-300`}
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

export default Hero