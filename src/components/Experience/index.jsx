import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { TabPanel, useTabs } from 'react-headless-tabs';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { IconSchool, IconScreenShare } from '@tabler/icons-react';

import TabSelector from '../TabSelector';

const Experience = () => {
  const [selectedTab, setSelectedTab] = useTabs(
    ['education', 'work experience', 'extra curriculars'],
    'work experience'
  );

  const srm =
    'https://drive.google.com/file/d/1cjobRhBWDvBKzeMdmA-TU6uFVpErjA1z/view?usp=sharing';
  const nyu =
    'https://drive.google.com/file/d/1SNX5TkE7dtR4z4Y0unEhHUC0BAKxNmUt/view?usp=sharing';

  const openSRMTranscript = () => {
    window.open(srm, '_blank');
  };

  const openNYUTranscript = () => {
    window.open(nyu, '_blank');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div
      name="experience"
      className="w-full h-auto px-4 py-10 lg:px-0 bg-ligtish-blue"
    >
      <div className="text-center">
        <h2
          className="text-3xl lg:text-5xl font-bold text-navy-blue mb-4 tracking-wide font-bitter"
          data-aos="fade-up"
        >
          My Life So Far<span className="text-cyan-green">.</span>
        </h2>
        <div className="h-1 bg-cyan-green w-16 mx-auto mb-8 rounded-full"></div>
      </div>

      {/* Section 1 */}
      <div
        className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto py-10 pb-20"
        data-aos="fade-up"
      >
        {/* Left column for text */}
        <div className="md:w-2/3 text-left px-4 lg:px-8 font-bitter">
          <div
            className="bg-white shadow-lg p-6 md:p-8 rounded-lg border border-[#E0E0E0] hover:shadow-xl transition-shadow duration-300 ease-in-out"
            data-aos="zoom-in"
          >
            {/* Intro paragraph */}
            <p className="text-navy-blue text-lg leading-relaxed">
              I’m a software engineer who loves to confront challenges head-on,
              always striving for the optimal solution to intricate problems.
              Currently, I’m working at{' '}
              <span className="font-bold text-navy-blue">Sov.ai.</span> {/* and
              graduated from
              <span className="font-bold text-navy-blue">
                {' '}
                New York University
              </span>{' '}
              with an MS in Computer Engineering.*/} I’m passionate about pushing
              boundaries, whether it’s in intense tennis matches or using my
              skills to make meaningful contributions in the tech world.
            </p>
            <br />

            {/* Skills paragraph */}
            <p className="text-navy-blue text-lg leading-relaxed">
              I primarily code in Java and Python. With 1+ years of
              experience as a Software Engineer, I’m well-versed in Full Stack
              Web Development, API Development, and Data Manipulation. My
              technical expertise includes Java, Python, C++, React.js, Spring
              Boot, Flask, MySQL, MongoDB, AWS, GCP, and more.
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <nav className="flex justify-center border-b bg-ligtish-blue border-[#8890B8] pt-10">
        <TabSelector
          isActive={selectedTab === 'education'}
          onClick={() => setSelectedTab('education')}
        >
          Education
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'work experience'}
          onClick={() => setSelectedTab('work experience')}
        >
          Work Experience
        </TabSelector>
        <TabSelector
          isActive={selectedTab === 'extra curriculars'}
          onClick={() => setSelectedTab('extra curriculars')}
        >
          Extra Curriculars
        </TabSelector>
      </nav>
      <div className="p-10 bg-ligtish-blue">
        <TabPanel hidden={selectedTab !== 'education'}>
          <VerticalTimeline
            lineColor="#ffffff"
            layout="2-columns"
            animate={true}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="September 2022 - May 2024"
              contentStyle={{ background: '#ffffff' }}
              iconStyle={{ background: '#8890B8', color: '#ffffff' }}
              icon={<IconSchool />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg text-navy-blue">
                New York University
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-navy-blue">
                M.S. Computer Engineering
              </h4>
              <p className="text-navy-blue">GPA: 3.89/4.0</p>
              <button
                onClick={openNYUTranscript}
                className="border-[#0f1b61] border-2 p-1 mt-2 text-[#0f1b61] flex items-center text-sm hover:bg-[#0f1b61] hover:border-[#0f1b61] hover:text-[#F2EDE4]"
              >
                Download Transcript
              </button>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="August 2018 - May 2022"
              contentStyle={{ background: '#ffffff' }}
              iconStyle={{ background: '#8890B8', color: '#ffffff' }}
              icon={<IconScreenShare />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg text-navy-blue">
                SRM Institute of Science & Technology
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-navy-blue">
                B.Tech. Computer Science and Engineering
              </h4>
              <p className="text-navy-blue">GPA: 8.7/10.0</p>
              <button
                onClick={openSRMTranscript}
                className="border-[#0f1b61] border-2 p-1 mt-2 text-[#0f1b61] flex items-center text-sm hover:bg-[#0f1b61] hover:border-[#0f1b61] hover:text-[#F2EDE4]"
              >
                Download Transcript
              </button>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
        <TabPanel hidden={selectedTab !== 'work experience'}>
          <VerticalTimeline
            lineColor="#8890B8"
            layout="2-columns"
            animate={true}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="May 2024 - Present"
              contentStyle={{ background: '#ffffff' }}
              iconStyle={{ background: '#8890B8', color: '#ffffff' }}
              icon={<IconScreenShare />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg text-navy-blue">
                Sov.ai
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold text-navy-blue mt-2">
                Quantitative Software Developer
              </h4>
              <ul className="list-disc ml-6 text-navy-blue">
                <li className="mb-2">
                  Collaborated with product team to improve financial simulation tools using React, Javascript and PostgreSQL
                </li>
                <li className="mb-2">
                  Optimized Go & Python pipelines and caching mechanisms, reducing query response times by ≈ 20%
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="October 2020 - June 2022"
              contentStyle={{ background: '#ffffff' }}
              iconStyle={{ background: '#8890B8', color: '#ffffff' }}
              icon={<IconScreenShare />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg text-navy-blue">
                Flipped.ai (Prev Gaius Networks)
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold text-navy-blue mt-2">
                Fullstack Engineer Intern
              </h4>
              <ul className="list-disc ml-6 text-navy-blue">
                <li className="mb-2">
                  Developed talent acquisition application using React, Redux, JavaScript and seamlessly integrated into AWS based CI/CD pipelines
                </li>
                <li className="mb-2">
                  Programmed REST APIs and implemented query-level boosting techniques, driving a 3x increase in search adoption
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="June 2021 - December 2021"
              contentStyle={{ background: '#ffffff' }}
              iconStyle={{ background: '#8890B8', color: '#ffffff' }}
              icon={<IconScreenShare />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-lg text-navy-blue">
                Make A Difference
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-bold text-navy-blue mt-2">
                Software Engineer Intern
              </h4>
              <ul className="list-disc ml-6 text-navy-blue">
                <li className="mb-2">
                  Built and optimised mobile first event management application leveraging ReactJS and Java
                </li>
                <li className="mb-2">
                  Collaborated with product owners to devise modernization initiatives, migrated REST APIs to GraphQL
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
        <TabPanel hidden={selectedTab !== 'extra curriculars'}>
          <VerticalTimeline
            lineColor="#D0D6E0"
            layout="2-columns"
            animate={true}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="September 2022 - Present"
              contentStyle={{ background: '#ffffff' }}
              iconStyle={{ background: '#8890B8', color: '#ffffff' }}
              icon={<IconSchool />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-navy-blue text-lg">
                New York University
              </h3>
              <ul className="list-disc ml-6 text-navy-blue">
                <li className="mb-2">
                  Organized events like Game Night as a committee member of
                  Graduate Indian Student Association.
                </li>
                <li className="mb-2">Member of the Quidditch club at NYU</li>
                <li className="mb-2">Merit Scholarship recepient</li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="July 2017 - June 2021"
              contentStyle={{ background: '#ffffff' }}
              iconStyle={{ background: '#8890B8', color: '#ffffff' }}
              icon={<IconSchool />}
            >
              <h3 className="vertical-timeline-element-title font-bold text-navy-blue text-lg">
                SRM Institute of Science & Technology
              </h3>
              <ul className="list-disc ml-6 text-navy-blue">
                <li className="mb-2">
                  Google HashCode 2022: secured Global Rank 552 (among 10,000+
                  teams) and School Rank 1
                </li>
                <li className="mb-2">
                  Head of the technical team at Team Envision
                </li>
                <li className="mb-2">Merit Scholarship recepient</li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </TabPanel>
      </div>
    </div>
  );
};

export default Experience;
