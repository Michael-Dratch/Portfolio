import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import projects from "@/data/projects.json";
import Project from "@/components/project";
export default function Home() {
  return (
    <div className="px-8">
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="mt-16 font-bold text-4xl text-accent">
            Michael Dratch
          </h1>
          <p className="font-semibold text-lg text-accent">
            Fullstack Software Developer
          </p>
          <p className="max-w-[300px] text-dark">
            I build engaging websites and powerful online tools to help
            businesses make a bigger impact.
          </p>
        </div>
      </div>
      <div className="pt-20">
        <p className="pt-8 text-light">
          <span className="font-bold text-dark">Welcome to my site!</span> I’m a
          Fullstack Web Developer specializing in creating dynamic and engaging
          websites. From clean and interactive sites to powerful business
          applications, I use the latest tools to bring your vision to life.
          Whether you're running a business or working on a community project, a
          tailored web solution can extend your reach and enhance your impact.
          Ready to make something amazing together? Let’s connect and turn your
          ideas into reality!
        </p>
        <h2 className="font-bold pt-20">Projects</h2>
        <div className="flex flex-col gap-8">
          {projects.map((item) => {
            return <Project data={item}></Project>;
          })}
        </div>
        <h2 className="font-bold pt-20">Work Experience</h2>
      </div>
    </div>
  );
}
