import Cards from "./Cards";
//import NavWrapper from "./NavWrapper";
import SpecialitiesCard from "./SpecialitiesCard";

const Card = () => {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <Cards
        containerVariants={gridContainerVariants}
        squareVariants={gridSquareVariants}
        title="Future Project"
      />
      <SpecialitiesCard
        containerVariants={gridContainerVariants}
        squareVariants={gridSquareVariants}
        title="Our Specialities"
      />
    </>
  );
};

export default Card;
