import React from "react";
import Lottie from "lottie-react";
import image from "../../assets/leftAbout";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className="min-h-[60vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold loading-[0.8]  mb-6"
            >
              Md ABDUR <span>RAHIM</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[30px] lg:text-[40px] uppercase font-semibold"
            >
              <span className=" mr-4">Junior</span>
              <TypeAnimation
                sequence={["MERN Developer", 2000, "Front-end Developer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Welcome to my portfolio!!! I am a creative MERN Stack Web
              Developer based in Bangladesh, and I'm very passionate and
              dedicated to my work....
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span class="relative text-white">Hire Me</span>
              </span>

              <Link to="" className="text-gradient btn-link">
               
              </Link>
              <a
                href="#_"
                class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              >
                <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                My Resume
                </span>
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/abdurrahim220"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub  size={35} color="black"/>
              </a>
              <a
                href="https://www.linkedin.com/in/md-abdur-rahim-35609723a/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin size={35} color="blue"/>
              </a>
              <a
                href="https://www.facebook.com/royal.wd"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook size={35} color="skyBlue"/>
              </a>
            </motion.div>
          </div>
          {/* image? */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <Lottie animationData={image} />;
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
