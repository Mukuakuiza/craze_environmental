const Banner = () => {
  return (
    <section className="bg-black lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center rounded-2xl bg-lime-500 p-8">
          <h1 className="text-4xl font-bold  sm:text-5xl">Purpose</h1>

          <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
            Elevate the industry. Provide healthy environments for people to
            thrive.
          </p>
        </div>

        <div className="mt-10  mx-auto max-w-prose text-center rounded-2xl bg-lime-500 p-8">
          <h1 className="text-4xl font-bold   sm:text-5xl">Mission</h1>

          <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
            We provide exemplary environmental, custodial, and maintenance
            services for complex facilities.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-prose text-center rounded-2xl bg-lime-500 p-8">
          <h1 className="text-4xl font-bold sm:text-5xl">Vision</h1>

          <p className="mt-4 text-base text-pretty sm:text-lg/relaxed">
            Create healthy environments for a better working future for all
            Human Beings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
