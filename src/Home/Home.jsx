import { Link } from "react-router-dom";
import FeaturedFoods from "./FeaturedFoods";
import Slide from "./Slider";
import { Helmet } from "react-helmet-async";
import Maps from "./Maps";
import Featured from "./Featured";
import ClientReview from "./ClientReview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Food Picky </title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Slide></Slide>
      <div className="my-5">
        <h1 className="text-3xl text-center text-black underline dark:text-white font-semibold font-anton">
          Featured Foods
        </h1>
        <FeaturedFoods></FeaturedFoods>
        <div className="flex justify-center items-center my-5 ">
          <Link to='/availFood'>
          <button className="rounded-md  btn  overflow-hidden relative group cursor-pointer border-2  font-medium border-[#1e847f] text-white bg-[#1e847f] hover:text-black">
             Show All button
          </button>
          </Link>
        </div>
        <div className="mt-10">
          <Featured></Featured>
        </div>
        <div>
       <h1 className="text-3xl text-center my-5 text-black underline dark:text-white font-semibold font-anton ">
          Our Satisfied Customer 
        </h1>
        <ClientReview></ClientReview>
       </div>
        <div>
          <Maps></Maps>
        </div>
       
      </div>
    </div>
  );
};

export default Home;
