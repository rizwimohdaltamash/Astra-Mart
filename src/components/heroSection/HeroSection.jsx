// import Hero1 from '../assets/hero1.png'
import { PiShoppingBagOpenFill } from "react-icons/pi";
const HeroSection = () => {
  return (
    <div className="h-[50vh] bg-black text-white flex flex-col justify-center items-center">
      {/* <img className=" h-44 lg:h-full" src={Hero1} alt='' /> */}
      <div className="text-9xl font-bold text-orange-900">
      <PiShoppingBagOpenFill/>
      </div>
      <div className="flex flex-col justify-center items-center  lg:w-[40%] w-[85%]">
      <h1 className="lg:text-3xl text-xl font-bold lg:font-bold text-orange-900" >Welcome to Astra-Mart</h1>
      <p className="lg:text-xl text-center">
        Find the <span className="text-orange-400">best deals</span>  on the hottest trends in fashion, electronics, home
        decor, and more. Shop now and enjoy exclusive <span className="text-orange-400">discounts</span>  tailored just
        for you!
      </p>
      </div>
      
    </div>
  );
};

export default HeroSection;
