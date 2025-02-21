import React from "react";
import { motion } from "framer-motion";
import "./../styles/styles.css";

const RotatingMedia = () => {
  return (
    <motion.div
      className="rotating-media"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
    >
      <video autoPlay loop muted>
        <source src="your-video.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default RotatingMedia;
