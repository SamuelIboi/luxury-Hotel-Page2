import { IconCircleCheck } from "@tabler/icons-react";
import bg from "../assets/bg1.jpg";

const amenities = [
  "Luxury rooms",
  "Fine dining",
  "Spa & Wellness",
  "Private pools",
  "City views",
];

const FeaturedHotel = () => {
  return (
    <div className="flex flex-col gap-4 w-full mx-10">
      <div className="flex flex-row gap-8 ml-10 items-center justify-center text-center">
        <img
          src={bg}
          alt="La Mamounia Morocco"
          className="h-[400px] w-[400px] rounded-md object-cover w-1/2 justify-end"
        />

        <div className="text-start flex flex-col w-1/2 gap-5 pr-18">
          <div className="text-3xl font-semibold">La Mamounia — Morocco</div>
          <div className="text-sm text-black/60">
            Experience world-class luxury with breathtaking views, private
            <br />
            villas, infinity pools, and exceptional dining.
          </div>

          {/* Amenity badges */}
          <div className="flex flex-row flex-wrap gap-3 text-sm">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="flex items-center gap-1 rounded-xl text-blue-900 font-semibold bg-blue-100 p-2 w-fit"
              >
                <IconCircleCheck size={16} />
                <span>{amenity}</span>
              </div>
            ))}
          </div>

          <button className="text-blue-100 bg-blue-900 w-fit text-sm font-semibold py-3 px-5 rounded-sm mt-4 hover:bg-blue-800 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHotel;
