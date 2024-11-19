import ecoTour1 from "../assets/ecoTour1.jpg";

const AboutUs = () => {
  return (
    <section className="w-full mx-auto bg-polar-white my-20">
      <h2 className="text-center text-4xl font-bold text-slate-gray mb-20">
        About Us
      </h2>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img src={ecoTour1} className="rounded-lg shadow-lg w-full" />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-12 mt-10 lg:mt-0 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-gray mb-6">
              We make nature <span className="text-icy-teal">accessible</span>
            </h2>
            <p className="text-lg text-glacier-gray leading-relaxed mb-6">
              At Eco Adventure, we bring you closer to nature through
              sustainable travel experiences. From serene winter treks to
              breathtaking glacier dives, we design eco-friendly adventures that
              connect you to the earth without harming it.
            </p>
            <p className="text-lg text-glacier-gray leading-relaxed">
              Our mission is to inspire a deeper appreciation for the
              environment while promoting responsible tourism. Join us on a
              journey that leaves footprints only in the snow, not on the
              planet.
            </p>
            <div className="mt-6">
              <a className="inline-block px-8 py-3 bg-icy-teal text-polar-white rounded-lg shadow-md hover:bg-hover-teal transition">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
