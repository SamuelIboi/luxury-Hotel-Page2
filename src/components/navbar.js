import { IconPlaneTilt } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="flex flex-row text-center items-center text-white px-13 py-3">
      {/* Logo */}
      <div className="w-1/5 flex flex-row items-center gap-2">
        <IconPlaneTilt className="bg-white/50 rounded-full h-10 w-10 p-2" />
        <div className="text-lg font-bold text-white">AL-thuraya</div>
      </div>

      {/* Middle */}
      <div className="w-3/5 flex flex-row gap-4 text-sm font-sans text-white/80 justify-center text-center">
        <div>Flights</div>
        <div>Hotel</div>
        <div>Cars</div>
      </div>

      {/* Auth buttons */}
      <div className="w-1/5 flex flex-row items-center text-md justify-end gap-3">
        <div className="cursor-pointer">Log In</div>
        <div className="bg-white text-black font-semibold text-sm px-5 py-2 rounded-lg cursor-pointer">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Navbar;
