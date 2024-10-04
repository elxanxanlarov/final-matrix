import HomeHero from "./Components/HomeHero/HomeHero";
import HomeHighly from "./Components/HomeHighly/HomeHighly";
import HomeBest from "./Components/HomeBest/HomeBest";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Instagram from "../../Components/Instagram/Instagram";
import Counter from "./Components/Counter/Counter";
import Time from "./Components/Timer/Time";
import Robotic from "./Components/Robotic/Robotic";
// import TextBanner from "./Components/TextBanner/TextBanner";

const Home = () => {
  
  return (
   
      <div>
        <HomeHero />
        <Counter/>
        <HomeHighly />
        {/* <TextBanner/> */}
        <Robotic/>
        <HomeBest />
        <Time/>
        <Testimonial />
        <Instagram />
      </div>
  );
};

export default Home;
