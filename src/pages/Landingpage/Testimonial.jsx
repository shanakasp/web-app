import React from "react";
import testimonila from "../../Images/testimonial.png";
function Testimonial() {
  return (
    <div>
      <span className="items-center flex text-4xl justify-center font-semibold opacity-80">
        Testimonial
      </span>
      <p className="items-center flex justify-center mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <img
        src={testimonila}
        alt="testimonial"
        className="mx-auto my-4 w-1/3 h-auto"
      />
    </div>
  );
}

export default Testimonial;
