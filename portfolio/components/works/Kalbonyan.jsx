import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Kalbonyan = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 text-xl font-medium font-titleFont">
        MERN Stack Intern
        <a href="https://www.albonyanalmarsos.org/" target="_blank">
          <span className="relative inline-flex overflow-x-hidden cursor-pointer text-textGreen h-7 group">
            @Kalbonyan Elmarsos
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>{" "}
      </h3>
      <p className="mt-1 text-sm font-medium text-textDark">
        Dec 2022 - Present
      </p>
      <ul className="flex flex-col gap-3 mt-6">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>{" "}
          Acquired a solid foundation in programming fundamentals, starting with
          Python and then progressing to HTML, CSS, and modern responsive web
          design techniques.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>{" "}
          learned JavaScript, starting from the basics and gradually delving
          into advanced topics, expanding my knowledge and skills in this
          versatile language.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>{" "}
          Developed proficiency in React 18, the latest version of the
          widely-used JavaScript framework alongside various tools and libraries
          within the React ecosystem like react router and redux toolkit and
          much more.
        </li>
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-1 text-textGreen">
            <TiArrowForward />
          </span>{" "}
          Expanded my skill set to include backend development by learning
          Node.js, along with Express and MongoDB. This enabled me to venture
          into the realm of server-side programming and build robust web
          applications.
        </li>
      </ul>
    </motion.div>
  );
};

//
// Expanded my skill set to include backend development by learning Node.js, along with Express and MongoDB. This enabled me to venture into the realm of server-side programming and build robust web applications.
export default Kalbonyan;
