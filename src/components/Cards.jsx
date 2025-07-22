import Ecomoja from '../assets/images/ecomoja.webp';
import { motion } from 'framer-motion';
const Cards = ({
  containerVariants,
  squareVariants,
  title,
  bg = 'bg-green-100',
}) => {
  return (
    <>
      <h2 className="text-center text-3xl my-10 underline decoration-black">
        {title}
      </h2>
      <div className="flex flex-col gap-10 overflow-x-hidden ">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 p-10 gap-20 mx-32"
        >
          <motion.div
            variants={squareVariants}
            className=" aspect-square rounded-lg justify-center flex items-center gap-10 text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            >
              <p className="mt-2  text-black  text-2xl">
                At Craze Environmental (Pty) Ltd. we understand that our
                well-being, improved quality of life and a secure world for the
                present and future generations depend on the transition to a
                more sustainable lifestyle. Thus, we are proactive and optimize
                innovative thinking to achieve sustainability.{' '}
              </p>
              <p className="mt-2 mb-20 text-black  text-2xl">
                We are an Environmental technology startup. We are currently
                building our platform EcoMoja to help people transition to an
                eco-friendly lifestyle. A lifestyle that is good for people and
                the planet. Convenient Eco-friendly lifestyle at your
                fingertips.
              </p>
              <motion.a
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'black',
                  color: 'white',
                }}
                transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                className="inline-block bg-black p-10 text-white rounded-lg px-4 py-2 hover:bg-zinc-900 cursor-pointer"
              >
                More on EcoMoja
              </motion.a>
            </motion.div>
          </motion.div>

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
                borderRadius: ['10%', '10%', '50%', '10%'],
              }}
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <img className="rounded-lg" src={Ecomoja}></img>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default Cards;
