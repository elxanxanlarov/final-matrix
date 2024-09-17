import Instagram from "../../Components/Instagram/Instagram";
import Testimonial from "../../Components/Testimonial/Testimonial";
import AboutHead from "./Components/AboutHead/AboutHead";
import AboutHero from "./Components/AboutHero/AboutHero";
import AboutStory from "./Components/AboutStory/AboutStory";
import AboutTeam from "./Components/AboutTeam/AboutTeam";
import "./style.scss"
const About = () => {
  return (
    <section className="about">
      <AboutHead/>
      <AboutHero/>
      <AboutStory/>
      <AboutTeam/>
      <Testimonial/>
      <Instagram dpNone={"dp-none"}/>
    </section>
  );
};

export default About;
