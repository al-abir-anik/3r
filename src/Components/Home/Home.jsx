import { useLoaderData } from "react-router-dom";
import Cards from "../TourDetails/Cards";
import Slider from "./Slider/Slider";
import AboutUs from '../AboutUs/AboutUs';
import Testimonials from '../Testimonial/Testimonial';

const Home = () => {
  const tourdata = useLoaderData();
  return (
    <main>
      <Slider></Slider>
      <section className="w-3/4 mx-auto mt-14 mb-20 space-y-14">
        <h2 className="text-[#2E8B57] text-4xl font-bold text-center">Adventure Experiences</h2>
        <div>
          <Cards tourData={tourdata}></Cards>
        </div>
      </section>
      <section>
        <AboutUs></AboutUs>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
    </main>
  );
};

export default Home;
