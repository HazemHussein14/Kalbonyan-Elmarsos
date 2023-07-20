import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";
import Image from "next/image";

const ArchiveCard = ({ title, link, tags, img }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <a href={link} target="_blank">
        <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-wide font-titleFont group-hover:text-textGreen">
              {title}
            </h2>
            <RxOpenInNewWindow className="text-4xl text-textGreen" />
          </div>
          <Image src={img} alt={title} className="rounded-lg" />
          <ul className="flex flex-wrap items-center justify-between gap-2 text-xs mdl:text-sm text-textDark">
            {tags.map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>
      </a>
    </motion.div>
  );
};
export default ArchiveCard;
