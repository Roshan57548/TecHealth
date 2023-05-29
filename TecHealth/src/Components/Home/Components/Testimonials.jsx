import React from "react";
import "./Style/Testimonials.css";
import { useState, useEffect } from "react";
import Testimonial_Image from "../../Home/Images/Testimonial_Image.jpg";

const Testimonials = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      heading: props.data.Heading,
      sub_heading: props.data.Testimonial1.Sub_Heading1,
      paragraph: props.data.Testimonial1.Paragraph1,
    },
    {
      id: 2,
      heading: props.data.Heading,
      sub_heading: props.data.Testimonial2.Sub_Heading2,
      paragraph: props.data.Testimonial2.Paragraph2,
    },
    {
      id: 3,
      heading: props.data.Heading,
      sub_heading: props.data.Testimonial3.Sub_Heading3,
      paragraph: props.data.Testimonial3.Paragraph3,
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <>
      <div className="Testimonials_outer_div">
        <div className="Testimonials_inner_div">
          <div className="Testimonials_child_div1">
            <img
              src={Testimonial_Image}
              height="100%"
              width="100%"
              className="Testimonial_border_left"
            />
          </div>
          <div className="Testimonials_child_div2 Testimonial_border_right">
            <div className="Testimonial_carousel">
              <div className="Testimonial_slides-container">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`Testimonial_slide ${
                      index === currentSlide ? "active" : ""
                    }`}
                  >
                    <br />
                    <h2 className="Testimonial_heading">{slide.heading}</h2>
                    <br />
                    <h5 className="Testimonial_sub_heading">
                      {slide.sub_heading}
                    </h5>
                    <br />
                    <p className="Testimonial_paragraph">{slide.paragraph}</p>
                  </div>
                ))}
              </div>
              <div className="Testimonial_indicators">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`Testimonial_indicator ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
