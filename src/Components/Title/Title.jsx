import React from "react";
import "./title.css";
import { motion } from "framer-motion";


const Title = ({ subTitle, title }) => {
  return (
    <motion.div initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }} className="title">
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {subTitle}
      </motion.p>
      <motion.h2       initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}>{title}</motion.h2>
    </motion.div>
  );
};

export default Title;
