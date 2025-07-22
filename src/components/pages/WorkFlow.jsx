import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const WorkFlow = () => {
  return (
    <motion.div className="bg-lime-500 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better workflow for environmental sustainability
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                We coordinate and facilitate the implementation of Environmental
                Strategy, working with a range of other companies and external
                partners to manage and protect the environment and ensure
                environmental sustainability.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <p>
                    We are serious about following a holistic approach to
                    sustainability and about managing our environment in a way
                    that enhances economic opportunities and social wellbeing.
                    It is, however, not only the responsibility of the City and
                    its partners to protect and conserve this wonderful place we
                    call home – every single one of us has a role to play. Our
                    department's vision is to enhance, protect and manage Cape
                    Town's natural and cultural resources for long term
                    prosperity; in a way that optimises economic opportunities
                    and promotes access and social wellbeing
                  </p>
                </div>
              </dl>
              <div className="mt-10 flex items-center gap-x-6">
                <NavLink
                  to="/about"
                  className="bg-black text-white rounded-xl px-9 py-4  hover:bg-gray-800 transition-colors duration-300"
                >
                  Who we are?
                </NavLink>
              </div>
            </div>
          </div>
          <img
            src="/images/envi-4.jpg"
            alt="Product screenshot"
            className="w-3xl max-w-none rounded-xl shadow-xl ring-3 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            width="1200"
            height="1442"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WorkFlow;
