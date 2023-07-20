import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { profileImg } from "@/public/assets/images";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-8 py-10 mx-auto max-w-containerSmall lgl:py-32"
    >
      <SectionTitle title={"About Me"} titleNo={"01"} />
      <div className="flex flex-col gap-16 lgl:flex-row">
        <div className="flex flex-col w-full gap-4 text-base font-medium lgl:w-2/3 text-textDark">
          <p>
            Hello! My name is Hazem, and I have a genuine passion for creating
            web-based projects. From a young age, I was captivated by the world
            of software and programming, particularly the web. It all started
            with my fascination for video games, which fueled my curiosity about
            their creation and the individuals behind them. This curiosity led
            me to spend countless hours exploring the web, searching for more
            games and unraveling the secrets behind their development. The
            moment I discovered programming, it felt like a magical door
            opening, revealing the incredible power to bring ideas to life.
          </p>
          <p>
            Fast-forward to today, I’m currently learning web development using
            the <span className="text-textGreen">MERN stack</span>. As an intern
            at{" "}
            <a href="https://www.albonyanalmarsos.org/" target="_blank">
              <span className="relative inline-flex overflow-x-hidden cursor-pointer text-textGreen h-7 group">
                Kalbonyan Elmarsos
                <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </a>{" "}
            I’ve been fortunate to receive guidance and support that has
            prepared me for a career as a developer. The experience has allowed
            me to work on exciting projects, pushing the boundaries of what I
            thought was not possible.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              HTML && CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Redux Toolkit
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
          </ul>
        </div>
        <div className="relative hidden w-full lgl:block lgl:w-1/3 h-80 group">
          <div className="absolute w-full rounded-lg h-80 -left-6 -top-6">
            <div className="relative z-20 flex w-full h-full pl-6 lgl:pl-0">
              <Image
                src={profileImg}
                alt="profile image"
                className="object-cover h-full rounded-lg"
              />
              <div className="absolute top-0 left-0 hidden w-full duration-300 rounded-md lgl:inline-block h-80 bg-textGreen/20 group-hover:bg-transparent"></div>
            </div>
          </div>
          <div className="hidden w-full transition-transform duration-300 border-2 rounded-md lgl:inline-flex h-80 border-textGreen group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
        </div>
      </div>
    </section>
  );
};
export default About;
