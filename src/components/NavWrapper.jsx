
import { GradualSpacing } from "../animation/GradualSpacing";
import { TextFade } from "../animation/TextFade";


const NavWrapper = () => {
  return (
    <section className="bg-hero max-h-full  bg-no-repeat  py-72 mb-4 bg-cover bg-center bg-fixed ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center text-4xl font-extrabold text-white sm:text-5xl md:text-7xl text-transform: uppercase">
          <GradualSpacing text="Craze Environmental"/>
          <TextFade   direction="up">
            <p className="my-9 text-3xl text-white  text-transform: uppercase">
            Solving Environmental problems using technology.
            </p>
          </TextFade>
          

        </div>
      </div>
    </section>
  );
};

export default NavWrapper;
