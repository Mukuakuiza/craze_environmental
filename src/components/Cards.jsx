import Ecomoja from "../assets/images/ecomoja.webp";
import { motion } from "framer-motion";
const Cards = ({
  containerVariants,
  squareVariants,
  title,
  bg = "bg-lime-500",
}) => {
  return (
    <div className="bg-black overflow-hidden py-24 sm:py-32">
      <div className="flex flex-col gap-10 overflow-x-hidden ">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 p-10 gap-20 mx-32"
        >
          <motion.div
            variants={squareVariants}
            // className="bg-green-100 rounded-lg justify-center flex size-92 items-center gap-10"
            className={`${bg} rounded-lg justify-center flex size-92 items-center gap-10`}
          >
            <motion.div
              className="w-1/3 h-1/3 shadow-md"
              animate={{
                scale: [1, 2, 2, 1],
                rotate: [90, 0, 0, 90],
                borderRadius: ["10%", "10%", "50%", "10%"],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <img className="rounded-lg" src={Ecomoja}></img>
            </motion.div>
          </motion.div>

          <motion.div
            variants={squareVariants}
            className=" aspect-square rounded-lg justify-center flex items-center gap-10 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            >
              <div className="text-center text-3xl font-semibold my-10 text-white">
                <h2>{title}</h2>
                <h2 className="text-base/7 text-center  text-lime-500">
                  ------------------------
                </h2>
              </div>
              <p className="mt-2  text-white  text-2xl">
                At Craze Environmental (Pty) Ltd. we understand that our
                well-being, improved quality of life and a secure world for the
                present and future generations depend on the transition to a
                more sustainable lifestyle. Thus, we are proactive and optimize
                innovative thinking to achieve sustainability.{" "}
              </p>
              <p className="mt-2  text-white  text-2xl">
                We are an Environmental technology startup. We are currently
                building our platform EcoMoja to help people transition to an
                eco-friendly lifestyle. A lifestyle that is good for people and
                the planet. Convenient Eco-friendly lifestyle at your
                fingertips.
              </p>
              <h2 className="text-base/7 mt-4 text-end  font-semibold text-lime-500">
                -----------------------------------------
              </h2>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Cards;
