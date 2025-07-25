import { motion } from "framer-motion";
const SpecialitiesCard = ({ containerVariants, squareVariants, title }) => {
  return (
    <>
      <div className="flex bg-lime-500 flex-col gap-10">
        <div>
          <h2 className="text-center text-3xl font-semibold mt-36">{title}</h2>
          <h2 className="text-base/7 text-center font-semibold text-black">
            ------------------------
          </h2>
        </div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-3 gap-10  my-32 mx-32"
        >
          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/envi-4.jpg')] aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10 bg-lime-500">
              Environmental Management
            </h2>
          </motion.div>

          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/sustainable-product.jpg')] bg-lime-500 max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10 bg-lime-500">
              Sustainable Product Development
            </h2>
          </motion.div>

          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/envi-3.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10 bg-lime-500">
              Waste Management
            </h2>
          </motion.div>

          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/Sustainable-Consumption.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10 bg-lime-500">
              Sustainable Consumption and Production
            </h2>
          </motion.div>

          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/Sustainable-Transportation.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat py-52 mb-4 bg-cover bg-top bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10 bg-lime-500">
              Sustainable Transportation
            </h2>
          </motion.div>

          {/**SVG Animation */}
          <motion.div
            variants={squareVariants}
            className="bg-[url('/images/Environmental-Software.jpg')] bg-hero max-h-full aspect-square rounded-lg bg-no-repeat  py-52 mb-4 bg-cover bg-center bg-fixed"
          >
            <h2 className="text-center text-2xl text-white mt-10 bg-lime-500">
              Environmental Software Development
            </h2>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
};

export default SpecialitiesCard;
