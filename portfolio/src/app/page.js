"use client";

import { useEffect, useState } from "react";
import projects from "@/data/projects.json";
import workItems from "@/data/workitems.json";
import Project from "@/components/project";
import WorkItem from "@/components/workitem";
import EmailIcon from "@/components/emailicon";
import LinkedinIcon from "@/components/linkedinicon";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const { ref: welcomeRef, inView: inViewWelcome } = useInView({
    threshold: 0.5,
  });
  const { ref: projectsRef, inView: inViewProjects } = useInView({
    threshold: 0.5,
  });
  const { ref: workExperienceRef, inView: inViewWorkExperience } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    updateNav();
  }, [inViewWelcome, inViewProjects, inViewWorkExperience]);
  const updateNav = () => {
    console.log("update nave called");
    if (inViewWelcome) {
      setActiveSection(0);
      console.log("welcome");
    } else if (inViewProjects) {
      setActiveSection(1);
      console.log("projects");
    } else if (inViewWorkExperience) {
      setActiveSection(2);
      console.log("expereince");
    }
  };

  return (
    <div className="px-8 grid lg:grid-cols-2 lg:px-28">
      <div className="">
        <div className="pt-12 lg:py-28 lg:sticky lg:top-0 flex flex-col lg:justify-between lg:h-full lg:max-h-screen gap-3">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-4xl text-accent">Michael Dratch</h1>
            <p className="font-semibold text-lg text-accent">
              Fullstack Software Developer
            </p>
            <p className="max-w-[300px] text-dark">
              I build engaging websites and powerful online tools to help
              businesses make a bigger impact.
            </p>
            <ul className="my-8 hidden lg:block">
              <li className="mt-4">
                <a
                  href="#welcome"
                  className={`${
                    activeSection == 0 ? "active-nav" : "text-slate-500"
                  } text-sm font-bold hover:text-cyan-600 transition-all duration-200 relative left-0`}
                >
                  Welcome
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#projects"
                  className={`${
                    activeSection == 1 ? "active-nav" : "text-slate-500"
                  } text-sm font-bold hover:text-cyan-600 transition-all duration-200 relative left-0`}
                >
                  Projects
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="#workexperience"
                  className={`${
                    activeSection == 2 ? "active-nav" : "text-slate-500"
                  } text-sm font-bold hover:text-cyan-600 transition-all duration-200 relative left-0`}
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-3 flex gap-4 lg:gap-6">
            <EmailIcon></EmailIcon>
            <LinkedinIcon></LinkedinIcon>
          </div>
        </div>
      </div>
      <div className="pt-20 lg:pt-28">
        <section ref={welcomeRef} id="welcome" className="scroll-mt-28">
          <p className="text-light">
            <span className="font-bold text-cyan-800">Welcome to my site!</span>{" "}
            I’m a Fullstack Web Developer specializing in creating dynamic and
            engaging websites. From clean and interactive sites to powerful
            business applications, I use the latest tools to bring your vision
            to life. Whether you're running a business or working on a community
            project, a tailored web solution can extend your reach and enhance
            your impact. Ready to make something amazing together? Let’s connect
            and turn your ideas into reality!
          </p>
        </section>
        <section ref={projectsRef} id="projects" className="scroll-mt-28">
          <h2 className="font-bold pt-20 text-cyan-800">Projects</h2>
          <div className="mt-4 flex flex-col gap-8">
            {projects.map((item) => {
              return <Project data={item}></Project>;
            })}
          </div>
        </section>
        <section ref={workExperienceRef} id="workexperience">
          <h2 className="font-bold pt-20 text-cyan-800">Work Experience</h2>
          <div className="mt-4 mb-12 flex flex-col gap-8">
            {workItems.map((item) => {
              return <WorkItem data={item}></WorkItem>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
