import React, { useState, useEffect } from 'react';
import './index.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

import HeaderSVG from '../../assets/undraw2.svg';
import PythonLogo from '../../assets/python.svg';
import JavaLogo from '../../assets/java.svg';
import GoLogo from '../../assets/go.svg';
import JSLogo from '../../assets/javascript.svg';
import CppLogo from '../../assets/Cpp.svg';
import ReactLogo from '../../assets/react.svg';
import DjangoLogo from '../../assets/django.svg';
import SpringLogo from '../../assets/spring-boot.svg';
import AWSLogo from '../../assets/aws.svg';
import GCPLogo from '../../assets/gcp.svg';

import { IconArrowRight, IconArrowDown } from '@tabler/icons-react';

const technologies = [
  { name: 'Python', image: <img src={PythonLogo} alt="Python" /> },
  { name: 'Java', image: <img src={JavaLogo} alt="Java" /> },
  { name: 'Golang', image: <img src={GoLogo} alt="Golang" /> },
  { name: 'Javascript', image: <img src={JSLogo} alt="Javascript" /> },
  { name: 'C++', image: <img src={CppLogo} alt="C++" /> },
  { name: 'React', image: <img src={ReactLogo} alt="React" /> },
  { name: 'Django', image: <img src={DjangoLogo} alt="Django" /> },
  { name: 'SpringBoot', image: <img src={SpringLogo} alt="SpringBoot" /> },
  { name: 'AWS', image: <img src={AWSLogo} alt="AWS" /> },
  { name: 'GCP', image: <img src={GCPLogo} alt="GCP" /> },
];

const Home = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [bouncingLetter, setBouncingLetter] = useState(-1);
  const [animationStage, setAnimationStage] = useState('initial');
  const scrollText = 'SCROLL';
  const resumeUrl =
    'https://drive.google.com/file/d/1UJXW1fz2rOPMIysJAIvhGwICA8Mc9T5K/view?usp=sharing';

  const handleResume = () => {
    window.open(resumeUrl, '_blank');
  };

  // Scroll Text Animation Logic
  useEffect(() => {
    if (animationStage === 'initial') {
      const visibilityInterval = setInterval(() => {
        setVisibleLetters((prev) => {
          if (prev < scrollText.length) {
            return prev + 1;
          } else {
            clearInterval(visibilityInterval);
            setTimeout(() => setAnimationStage('bounce'), 1000); // Wait 1 second before bouncing
            return prev;
          }
        });
      }, 300);

      return () => clearInterval(visibilityInterval);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 'bounce') {
      const bounceInterval = setInterval(() => {
        setBouncingLetter((prev) => {
          if (prev < scrollText.length) {
            return prev + 1;
          } else {
            clearInterval(bounceInterval);
            setTimeout(() => {
              setAnimationStage('pause');
              setBouncingLetter(-1);
            }, 1000); // Wait 1 second before restarting bounce
            return prev;
          }
        });
      }, 300); // Adjusted for up and down motion

      return () => clearInterval(bounceInterval);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 'pause') {
      // Restart the cycle
      const restartTimeout = setTimeout(() => {
        setAnimationStage('bounce'); // Restart the animation cycle
      }, 1000); // 1-second pause before restarting

      return () => clearTimeout(restartTimeout);
    }
  }, [animationStage]);

  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the animation duration
      once: true, // Only animate once when the element enters the viewport
    });
  }, []);

  return (
    <div name="home" className="w-full h-auto px-4 lg:px-0 bg-ligtish-blue">
      {/* Section 1 */}
      <main className="relative flex flex-col md:flex-row items-center justify-start w-full max-w-6xl mx-auto h-screen">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start font-bitter h-full py-0 md:py-4 text-animate">
          <h1 className="text-5xl md:text-7xl text-navy-blue leading-tight">
            Hi, my
            <br />
            name is{' '}
            <span className="font-bold">
              Bhanu<span className="text-cyan-green">.</span>
            </span>
          </h1>
          <p className="text-lg md:text-2xl mt-4 text-navy-blue">
            I'm a <span className="font-semibold">software developer</span> from
            New York City.
          </p>
          {/* <div className="mt-5">
            <button
              onClick={handleResume}
              className="text-[#0f1b61] group border-[#0f1b61] border-2 px-4 py-4  flex items-center hover:bg-[#0f1b61] hover:border-[#0f1b61] hover:text-[#F2EDE4] text-sm md:text-base"
            >
              Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <IconArrowRight stroke={2} className="ml-1" />
              </span>
            </button>
          </div> */}
        </div>

        {/* SVG Section */}
        <div className="w-full md:w-1/2 flex justify-center svg-animate">
          <img
            src={HeaderSVG}
            alt="Header Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-400 flex flex-col items-center">
          <span className="text-xs mb-4 h-4 flex">
            {scrollText.split('').map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-300 mr-2 ${
                  index < visibleLetters
                    ? `opacity-100 ${index === bouncingLetter ? 'translate-y-[-5px]' : 'translate-y-0'}`
                    : 'opacity-0'
                }`}
              >
                {letter}
              </span>
            ))}
          </span>
          <div className="w-px bg-gray-400 scroll-line"></div>
        </div>
      </main>

      {/* Section 2 - Animations on scroll */}
      <div
        className="relative flex flex-col items-center justify-center w-full max-w-6xl mx-auto py-20 mt-10"
        data-aos="fade-up"
      >
        <div className="text-center font-bitter">
          <h2 className="text-5xl md:text-6xl lg:text-6xl font-bold text-navy-blue mb-4 tracking-wide">
            Let's work together<span className="text-cyan-green">.</span>
          </h2>

          <div className="h-1 bg-cyan-green w-16 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg md:text-lg my-8 text-navy-blue pb-10">
            From robust backend systems to interactive full-stack applications,
            or crafting intensive data pipelines, I help awesome people to build
            ambitious yet accessible projects -{' '}
            <span className="font-bold">the wilder, the better.</span>
          </p>
        </div>
        <div className="w-full text-center font-bitter" data-aos="zoom-in">
          <div className="tech-container">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item group" data-aos="fade-up">
                {tech.image}
                <span className="mt-2 text-gray-600 group-hover:text-navy-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
