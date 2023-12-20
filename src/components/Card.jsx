import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative w-60 h-72 bg-zinc-900 rounded-[40px] text-white px-8 py-10 overflow-hidden"
    >
      <FaFileAlt></FaFileAlt>
      <p className="text-sm leading-tight mt-3 ">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5 className="">{data.size}</h5>
          <span className="w-9 h-9 flex items-center justify-center rounded-[20px] text-lg bg-sky-600">
            {data.download ? <GoDownload /> : <MdClose />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag flex items-center justify-center w-full bg-${data.tag.color}-600 py-3`}
          >
            <h3 className="text-base">{data.tag.title}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
