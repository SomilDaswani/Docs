import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, onRemove, reference }) => {

  const copyToClipboard = () => {
    const textToCopy = data.desc || "No description";

    // Use the Clipboard API to copy text
    navigator.clipboard.writeText(textToCopy)
      .catch(err => {
        // Optional: handle errors
        console.error("Failed to copy text: ", err);
      });
  };

  // Default values if data is undefined
  const {
    desc = "No description",
    filesize = ".0mb",
    tagDetails = { isOpen: false, tagTitle: "", tagColor: "gray" },
  } = data || {};

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      dragElastic={0.1}
      className="relative flex-shrink-0 w-60 h-64 rounded-[30px] bg-zinc-900/90 text-white px-5 py-6 overflow-hidden"
    >
      <button><FaRegFileAlt onClick={copyToClipboard} /></button>
      <p className="text-sm mt-5 font-semibold">{desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-2 mb-3">
          <h5>{filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            <button onClick={onRemove}>
              <IoClose size=".7em" color="#fff" />
            </button>
          </span>
        </div>
        {tagDetails.isOpen && (
          <div
            className={`tag w-full py-3 ${
              tagDetails.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{tagDetails.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
