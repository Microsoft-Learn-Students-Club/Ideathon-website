import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import RotatingText from '../blocks/TextAnimations/RotatingText/RotatingText';
import TextType from '../blocks/TextAnimations/TextType/TextType';
import { SplitText } from 'gsap/all';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 769 })

  useGSAP(() => {
    const heroSplit = new SplitText('.title', {type: 'chars, words'});
    const paraSplit = new SplitText('.subtitle', {type: 'lines'});
    
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

    const startValue = isMobile ? 'top 10%' : 'center 60%';
    const endValue = isMobile ? '40% top' : 'center top';

    let tl = gsap.timeline({
	  scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};
  }, [])

  return (
    <>
     <section id="hero" className="noisy">
      <h1 className='title'>Ideathon 2025</h1>
      <br />
      <div className="body">
       <div className="content">
        <div className="space-y-5 hidden md:block">
         <p><RotatingText 
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
         <p className='subtitle'>
          <TextType className='font-bold text-xl'
           text={["A creativity-driven challenge where innovators come together to brainstorm, collaborate, and pitch groundbreaking solutions to real-world problems.", 
            "An idea marathon that brings minds together to innovate, solve, and shape the future.",
            "A platform for creators to brainstorm, collaborate, and turn bold ideas into impactful solutions."]}
           typingSpeed={75} pauseDuration={1500}
           showCursor={true} cursorCharacter="|"
          /> 
         </p>
        </div>
       </div>
      </div>
     </section>
     <div className='video absolute inset-0'>
      <video src='/output.mp4' ref={videoRef}
      muted playsInline preload='auto' />
     </div>
    </>
  )
}

export default Hero