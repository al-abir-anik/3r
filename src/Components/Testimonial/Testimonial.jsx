import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Testimonials.css"; // Import the custom CSS for animations

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      feedback:
        "Eco Adventure provided me with the most breathtaking experience of my life! The winter trek was stunning, and I felt great knowing it was all eco-friendly.",
      bgImage: "https://i.ibb.co.com/0cCNVDq/Mountain-Trek-to-Everest-Base-Camp.jpg",
    },
    {
      id: 2,
      name: "John Smith",
      feedback:
        "I loved every moment of the glacier dive adventure. It was well-organized, and the team made sure everything was safe and sustainable.",
      bgImage: "https://i.ibb.co.com/pWMJZm4/ecoTour1.jpg",
    },
    {
      id: 3,
      name: "Emily Brown",
      feedback:
        "Traveling with Eco Adventure opened my eyes to the beauty of responsible tourism. Highly recommended!",
      bgImage: "https://i.ibb.co.com/0cCNVDq/Mountain-Trek-to-Everest-Base-Camp.jpg",
    },
    {
      id: 2,
      name: "John Smith",
      feedback:
        "I loved every moment of the glacier dive adventure. It was well-organized, and the team made sure everything was safe and sustainable.",
      bgImage: "https://i.ibb.co.com/pWMJZm4/ecoTour1.jpg",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section>
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-slate-gray">
          <span className="text-icy-teal">Testimonials</span>
        </h2>
      </div>

      {/* Testimonial Content */}
      <div
        className="h-[600px] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${currentTestimonial.bgImage})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 p-8 max-w-3xl text-center text-white">
          <SwitchTransition>
            <CSSTransition
              key={currentIndex}
              timeout={500}
              classNames="testimonial-fade"
            >
              <div>
                <p className="text-xl italic leading-relaxed mb-6">
                  "{currentTestimonial.feedback}"
                </p>
                <h3 className="text-2xl font-bold">{currentTestimonial.name}</h3>
              </div>
            </CSSTransition>
          </SwitchTransition>

          {/* Button */}
          <button
            onClick={handleNextReview}
            className="btn mt-6 px-8 py-3 bg-icy-teal text-black rounded-lg hover:bg-hover-teal transition transform hover:scale-105 shadow-lg"
          >
            Next Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
