import { motion } from 'framer-motion';
const SpecialitiesCard = ({ containerVariants, squareVariants, title }) => {
  return (
    <>
      <h2 className="text-center text-3xl underline my-12 decoration-black">
        {title}
      </h2>
      <div className="flex bg-green-100 flex-col gap-10">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 p-10 gap-10  my-32 mx-32"
        >
          {/*Fade up */}
          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/envi-4.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10">
              Environmental Management
            </h2>
          </motion.div>

          {/*Shape Shifting */}
          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/sustainable-product.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10">
              Sustainable Product Development
            </h2>
          </motion.div>

          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/envi-3.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10">
              Waste Management
            </h2>
          </motion.div>

          {/*Drag */}
          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/Sustainable-Consumption.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10">
              Sustainable Consumption and Production
            </h2>
          </motion.div>

          {/*Scroll Progress */}
          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/Sustainable-Transportation.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat py-52 mb-4 bg-cover bg-top bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10">
              Sustainable Transportation
            </h2>
          </motion.div>

          {/**SVG Animation */}
          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/Environmental-Software.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10">
              Environmental Software Development
            </h2>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default SpecialitiesCard;
