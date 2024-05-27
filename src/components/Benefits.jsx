import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "./HText";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ActionButton from "../shared/ActionButton";
import BenefitsPageGraphic from "../assets/BenefitsPageGraphic.png";
const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime obcaecati, error consequatur blanditiis illum velit accusantium fugit quidem doloremque ratione.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime obcaecati, error consequatur blanditiis illum velit accusantium fugit quidem doloremque ratione.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime obcaecati, error consequatur blanditiis illum velit accusantium fugit quidem doloremque ratione.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};
const Benefits = () => {
  return (
    <section className="benefits mx-auto min-h-full w-5/6">
      <div className="md:my-5 md:w-3/5">
        <HText>More than just gym.</HText>
        <p className="my-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam vitae
          exercitationem totam necessitatibus voluptatem illum voluptatum iusto
          quae pariatur eum veritatis nesciunt ea aut, itaque laborum illo
          tenetur unde ducimus!
        </p>
      </div>
      <motion.div
        className="md:flex items-center justify-between gap-8 mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-2 px-5 py-16 text-center border-solid"
            key={index}
          >
            <div className="flex justify-center">
              <div className="border-2 rounded-full border-gray-2 p-2 bg-primary-100 text-white">
                <span>{benefit.icon}</span>
              </div>
            </div>

            <h4 className="font-bold">{benefit.title}</h4>
            <p className="my-3">{benefit.description}</p>
            <Link
              to="contactus"
              className="text-sm font-bold text-primary-500 underline"
            >
              <p>Learn More</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Graphics and Descriptions */}
      <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
        <img
          className="mx-auto"
          alt="benefits-page-graphic"
          src={BenefitsPageGraphic}
        />
        <div>
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport = {{once:true,amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                  hidden:{opacity:0, x:50},
                  visible:{opacity:1,x:0}
                }}
              >
                <HText>
                  Millions Of Happy Members Getting{" "}
                  <span className="text-primary-500">FIT</span>
                </HText>
              </motion.div>
            </div>
          </div>
          <motion.div
                initial="hidden"
                whileInView="visible"
                viewport = {{once:true,amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                  hidden:{opacity:0, x:50},
                  visible:{opacity:1,x:0}
                }}
              >
            <p className="my-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              voluptatibus quaerat illo corrupti cum vel repudiandae, quia ex
              quam veniam magni ab modi neque accusamus repellat soluta
              repellendus ipsa ut?
            </p>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate deleniti mollitia voluptatum assumenda recusandae,
              sequi dolores. Quae dolorum cupiditate placeat?
            </p>
          </motion.div>
          {/* Button */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
              <ActionButton link="contactus">Join Now</ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
