import { Link } from "react-router-dom";
import "./style.scss"
const AboutHead = () => {
  return (
    <>
      <div className="about-head">
        <div className="my-container">
          <h3>About Us</h3>
          <div className="dp-align gap-2">
            <p><Link className="link" to="/">Home</Link></p>/<p><Link className="link" to="/about">About Us</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHead;
