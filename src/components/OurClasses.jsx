import React from "react";
import HText from "./HText";
import { motion } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import Class from "./Class";

const classes = [
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iste.",
    image:image1
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iste.",
    image:image2
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iste.",
    image:image3
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iste.",
    image:image4
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iste.",
    image:image5
  },
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, iste.",
    image:image6
  },
]
const OurClasses = () => {
  return (
    <section className="classes w-full bg-primary-100 py-40">
      <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5">
          <HText>Our Classes</HText>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nihil, modi, eos velit, consectetur quibusdam praesentium qui minus
            corrupti voluptas dolore molestiae quaerat totam itaque alias odit
            architecto excepturi autem.
          </p>
        </div>
      </motion.div>

      <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item,index)=>
            <Class 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          )}
        </ul>
      </div>
    </section>
  );
};

export default OurClasses;
