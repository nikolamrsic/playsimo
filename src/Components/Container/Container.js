import React from 'react'
import {animate, motion} from 'framer-motion'
export default function Container(props) {
  return (
    <motion.section  transition={{ delay: 0.5 }} initial={{opacity:0}} animate={{opacity:1}} className="w-full h-full  overflow-hidden m-auto bg-hero-pattern  max-w-8xl bg-cover bg-origin-content bg-center relative  bg-right bg">
        {props.children}
        </motion.section>
  )
}
