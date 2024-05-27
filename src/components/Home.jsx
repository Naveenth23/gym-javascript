import React from "react";
import HomePageText from "../assets/HomePageText.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import SponsorFortune from "../assets/SponsorFortune.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import ActionButton from "../shared/ActionButton";
import { Link } from "react-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
const Home = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <>
      <section className="home flex flex-col gap-16 bg-gray-50 py-10 md:h-full md:pb-0">
        {/* Image & Main Header */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
          <div className="z-10 mt-32 md:basis-3/5">
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport = {{once:true,amount:0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden:{opacity:0, x:-50},
              visible:{opacity:1,x:0}
            }}
            className="md:-mt-20">
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                  <img src={HomePageText} />
                </div>
              </div>
              <p className="mt-8 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi sint ut laboriosam quibusdam enim, impedit perferendis
                velit aperiam ea blanditiis.
              </p>
            </motion.div>
            <div className="mt-8 flex items-center gap-8">
              <ActionButton link="contactus">Join Now</ActionButton>
              <Link
                to="contactus"
                className="text-sm font-bold text-primary-500 underline"
              >
                <p>Learn More</p>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="flex basis-3/5 justify-center md:z-10 md:ml-42 md:mt-16 md:justify-items-end">
            <img alt="home-pageGraphic" src={HomePageGraphic} />
          </div>
        </div>
        {/* sponsors */}
        {isAboveMediumScreen && (
          <div className="h-[150px] w-full bg-primary-100 py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="redbull-fortune" src={SponsorFortune} />
                <img alt="redbull-forbes" src={SponsorForbes} />
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
