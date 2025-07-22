import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Fields = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  const containerRef = useRef(null);

  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();

  //for paragraph
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100", "0%"]
  );

  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100", "0%"]
  );

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <>
      <motion.div variants={gridSquareVariants}>
        <motion.div style={{ scaleY: completionProgress }}></motion.div>
      </motion.div>
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="bg-black text-white py-24 sm:py-32"
      >
        <motion.div
          animate={mainControls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-7xl px-6 lg:px-8"
          ref={containerRef}
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-lime-500">
              -----------
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
              Our focus areas with the city of Cape Town
            </p>
            <p className="mt-6 text-lg/8 text-white">
              We work with the city of Cape Town in various projects be it
              long-term and short-term for environmental sustainability.
            </p>
          </div>
          <motion.div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <motion.div
                style={{ translateX: paragraphOneValue }}
                className="relative pl-16"
              >
                <dt className="text-base/7 font-semibold text-white">
                  Name{" "}
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-lime-500"></div>
                  Biodiversity Management branch
                </dt>
                <dd className="mt-2 text-base/7 text-white">
                  tasked with conserving and restoring Cape Town’s unique
                  biodiversity. This includes managing 20 nature reserves and
                  other conservation areas, which make up much of the natural
                  space in Cape Town. Other responsibilities include
                  conservation planning, environmental education, skills
                  development and invasive alien species management, where job
                  creation is an important component of the work.
                </dd>
              </motion.div>
              <motion.div
                style={{ translateX: paragraphOneValue }}
                className="relative pl-16"
              >
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-lime-500"></div>
                  Coastal Management branch
                </dt>
                <dd className="mt-2 text-base/7 text-white">
                  {" "}
                  assumes accountability for, and the management of, the City’s
                  coastline (seaward of the defined coastal edge) to ensure
                  ongoing economic growth and opportunities. This includes
                  improving access, creating higher social value, reducing
                  coastal risk and effectively managing and conserving the
                  natural coastal environment and systems.{" "}
                </dd>
              </motion.div>
              <motion.div
                style={{ translateX: paragraphTwoValue }}
                className="relative pl-16"
              >
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-lime-500"></div>
                  Environmental Compliance branch
                </dt>
                <dd className="mt-2 text-base/7 text-white">
                  s responsible for ensuring that the municipality’s
                  environmental laws, by-laws, policies and procedures are
                  complied with. Their tasks range from conducting environmental
                  compliance inspections and audits of the City’s facilities, to
                  enforcing civil and criminal environmental laws. This branch
                  also provides environmental spatial data for biodiversity,
                  wetlands and coastal regions, and manages the citywide
                  Environmental Risk register.
                </dd>
              </motion.div>
              <motion.div
                style={{ translateX: paragraphTwoValue }}
                className="relative pl-16"
              >
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-lime-500"></div>
                  Environmental Planning and Sustainability
                </dt>
                <dd className="mt-2 text-base/7 text-white">
                  helps the City embrace and implement a clear and up-to-date
                  environmental strategy and policy, and embeds sustainability
                  principles in all sectors of the City. This branch implements
                  the City’s climate change policy, strives to conserve
                  resources, manages efficiency, conducts environmental reports
                  and plans and coordinates climate change adaptation as well as
                  natural open space systems in Cape Town. The branch is also
                  responsible for environmental communication, education,
                  training and development as well as planning and prioritising
                  the department’s capital programme, overseeing key
                  partnerships and coordinating and implementing key catalytic
                  projects.{" "}
                </dd>
              </motion.div>
            </dl>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Fields;
