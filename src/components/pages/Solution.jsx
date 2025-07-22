import Card from "../Card";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const Solution = () => {
  return (
    <>
      <Card />
      <motion.div className="bg-black overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">
                  Our Window of Opportunity Is Open Now
                </p>
                <p className="mt-6 text-lg/8 text-white">
                  Our planet faces the interconnected crises of rapid climate
                  change and biodiversity loss. We have years, not decades, to
                  address these existential threats.The science is clear: We
                  must act now to halt catastrophic climate change and
                  biodiversity loss. What we do between now and 2030 will
                  determine whether we slow warming to 1.5 degrees Celsius—the
                  level scientists agree will avoid the worst impacts of climate
                  change.
                </p>
                <h2 className="text-base/7 mt-4  font-semibold text-lime-500">
                  ------------------
                </h2>
                <p className="mt-6 text-lg/8 text-white">
                  Our actions will also determine whether we conserve enough
                  land and water to slow the rapid acceleration of species loss.
                  If we do both, we will safeguard people from the disastrous
                  effects of these crises.So much can occur in a single
                  lifetime. Three-quarters of the carbon dioxide emissions
                  driven by humans have occurred since 1950. We have seen a
                  nearly 70% average decline of birds, amphibians, mammals, fish
                  and reptiles since just 1970.
                </p>
              </div>
            </div>
            <img
              src="/images/envi-2.jpg"
              alt="Product screenshot"
              className="w-3xl pt-24 max-w-none rounded-xl shadow-xl ring-3ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
              width="600"
              height="1000"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Solution;
