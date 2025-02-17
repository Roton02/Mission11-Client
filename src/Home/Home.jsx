import Slide from "./Slider";
import { Helmet } from "react-helmet-async";
import Featured from "./Featured";
import PrepareFood from "./PrepareFood";
import OfficeLonch from "./OfficeLonch";
import Country from "./Country";
import MobileApp from "./MobileApp";
import MenuFeatured from "./Featured/MenuFeatured";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Food Picky </title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>

      <Slide></Slide>
      <div className="my-5">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl    font-semibold font-anton">
            You prepare the food, we handle the rest
          </h1>
        </div>
        <PrepareFood></PrepareFood>

        <div className="my-5">
          <Featured></Featured>
          <MenuFeatured/>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl    font-semibold font-anton">
            Find us in these cities and many more!
          </h1>
        </div>
        <Country></Country>
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl    font-semibold font-anton">
            Take your office out to lunch
          </h1>
        </div>
        <OfficeLonch></OfficeLonch>
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl   mb-10 font-semibold font-anton">
            Take your office out to lunch
          </h1>
        </div>
      </div>
      <MobileApp />
    </div>
  );
};

export default Home;
