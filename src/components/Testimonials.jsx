import "./TestimonialsStyles.css";
import { FaDatabase } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase />
              Staxx
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a
              beatae aliquid laborum deleniti impedit fuga cum earum aliquam
              blanditiis! Sed dolorum aliquam eos.
            </p>
            <div className="name">
              <p>Marie Chilvers</p>
              <p>CEO, Staxx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
