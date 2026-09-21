import bg from "../assets/resort.jpg";
import FAQ from "./acccordion";
import FeaturedHotel from "./featuredhotel";
import MustTryActivities from "./musttry";
import Navbar from "./navbar";
import SearchBox from "./searchbox";
import WhyChooseUs from "./whychooseUs";

const HeroSection = () => {
  return (
    <div>
      <div className="relative h-[525px] text-center">
        <div className="absolute inset-0 overflow-hidden">
          <img src={bg} alt="" className="w-full h-full object-cover" />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 z-10">
          <div className="m-3 mx-6">
            <Navbar />
          </div>
          <div className="flex flex-col w-3/5 mx-auto p-9 pt-5 mt-5 items-center text-center justify-center text-white gap-6">
            <div className="text-5xl font-semibold px-1">
              Your Next Adventure Starts Here
            </div>
            <div className="text-white/80 text-md">
              Explore the world's Most Breathtaking Destinations with Exclusive
              deals on Flights, Hotels and Car rentals - All in one seamless
              platform
            </div>
          </div>
          <div className="mt-12">
            <SearchBox />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center text-center mt-25">
        <div className="flex flex-col mb-15 gap-4 w-full">
          <div className="text-3xl font-semibold">Featured Hotel Partners</div>
          <div className="text-sm text-black/60 mb-4">
            Exclusive hotels offering premium member-only rates for
            unforgettable
            <br />
            luxury stays.
          </div>
          <FeaturedHotel />
        </div>
        <MustTryActivities />
        <WhyChooseUs />
        <FAQ />
      </div>
    </div>
  );
};

export default HeroSection;
