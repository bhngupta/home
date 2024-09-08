import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import CollabDoc from '../../assets/collabdoc.png';
import Streamify from '../../assets/streamify.png';
import Zippy from '../../assets/zippy.png';

import { IconBrandGithub } from '@tabler/icons-react';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const projects = [
    {
      title: 'Collab Doc',
      description:
        'A real-time text collaboration platform, integrating Operational Transformation to reduce data conflicts by 100%',
      githubLink: 'https://github.com/bhngupta/CollabDoc/',
      image: CollabDoc,
    },
    {
      title: 'Zippy',
      description:
        'An optimized high-performance in-memory database which achieved 40% reduction in response times',
      githubLink: 'https://github.com/bhngupta/zippy/',
      image: Zippy,
    },
    {
      title: 'Streamify',
      description:
        'A scalable distributed video streaming platform which ensures seamless delivery of video content without data loss',
      githubLink: 'https://github.com/bhngupta/streamify/',
      image: Streamify,
    },
  ];

  return (
    <div name="projects" className="bg-[#F4F9FC] py-16 w-full h-auto">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center">
          <h2
            className="text-3xl lg:text-5xl font-bold text-navy-blue mb-4 text-with-shadow font-bitter"
            data-aos="fade-up"
          >
            Projects<span className="text-cyan-green">.</span>
          </h2>
          <div className="h-1 bg-cyan-green w-16 mx-auto mb-0"></div>
        </div>
        <p className="mt-4 text-navy-blue font-bitter" data-aos="fade-up">
          A sample portfolio of my personal projects. Find more at:{' '}
          <a
            href="https://github.com/bhngupta"
            target="_blank"
            className="font-bold text-[#73bbc5] hover:text-navy-blue transition-all"
          >
            https://github.com/bhngupta
          </a>
        </p>
        <div className="grid gap-8 md:grid-cols-3 mt-10 p-6 md:p-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="mx-4 bg-white p-6 rounded-lg rounded-lg border border-[#E0E0E0] hover:shadow-xl shadow-lg project-card transition-transform duration-300
                            transform hover:translate-y-[-10px] hover:shadow-lg hover:border-navy-blue border
                            border-transparent flex flex-col justify-between fade-in-up cursor-pointer"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 rounded-lg shadow-md"
                />
                <h3 className="text-xl font-semibold mb-2 text-navy-blue font-bitter">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 font-bitter">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex justify-center items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#73bbc5] hover:text-navy-blue flex items-center transition-all font-bitter"
                >
                  <IconBrandGithub stroke={2} className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
