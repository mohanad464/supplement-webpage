const Herosection = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-bold sm:text-5xl whitespace-nowrap">
            All Your Nutrition Needs
            <strong className="font-bold text-text sm:block">
              Is One Click Away.
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Fuel your body, unleach your potential.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring sm:w-auto"
              href="/products"
            >
              Shop Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
