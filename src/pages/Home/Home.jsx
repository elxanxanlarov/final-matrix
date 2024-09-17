import HomeHero from "./Components/HomeHero/HomeHero";
import HomeHighly from "./Components/HomeHighly/HomeHighly";
import HomeBest from "./Components/HomeBest/HomeBest";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Instagram from "../../Components/Instagram/Instagram";
import Counter from "./Components/Counter/Counter";

const Home = () => {
  
  return (
   
      <div>
        <HomeHero />
        <Counter/>
        <HomeHighly />
        <HomeBest />
        <Testimonial />
        <Instagram />
      </div>
  );
};

export default Home;
