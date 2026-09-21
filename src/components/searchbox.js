import { useState } from "react";
import {
  IconPlaneTilt,
  IconBuilding,
  IconCar,
  IconMapPin,
  IconCalendar,
  IconUsers,
  IconSearch,
} from "@tabler/icons-react";

const tabs = [
  { label: "Flights", icon: IconPlaneTilt },
  { label: "Hotels", icon: IconBuilding },
  { label: "Cars", icon: IconCar },
];

const SearchBox = () => {
  const [activeTab, setActiveTab] = useState("Flights");

  return (
    <div className="bg-white rounded-lg shadow-lg p-3 w-full max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {tabs.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === label
                ? "bg-[#1e3a5f] text-white"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-2" />

      {/* Search fields */}
      <div className="flex items-center gap-1">
        {/* From */}
        <div className="flex flex-col gap-1 flex-1 border-r border-gray-200 pr-4">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">
            From
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-800">
            <IconMapPin size={15} className="text-gray-400" />
            <span>Cairo (Any)</span>
          </div>
        </div>

        {/* To */}
        <div className="flex flex-col gap-1 flex-1 border-r border-gray-200 pr-4">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">
            To
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <IconMapPin size={15} className="text-gray-300" />
            <span>Country, city or...</span>
          </div>
        </div>

        {/* Departure */}
        <div className="flex flex-col gap-1 flex-1 border-r border-gray-200 pr-4">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">
            Departure
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <IconCalendar size={15} className="text-gray-300" />
            <span>Add date</span>
          </div>
        </div>

        {/* Return */}
        <div className="flex flex-col gap-1 flex-1 border-r border-gray-200 pr-4">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">
            Return
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <IconCalendar size={15} className="text-gray-300" />
            <span>Add date</span>
          </div>
        </div>

        {/* Travelers */}
        <div className="flex flex-col gap-1 flex-1 pr-4">
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase">
            Travelers & Cabin Class
          </span>
          <div className="flex items-center gap-1 text-sm text-gray-800">
            <IconUsers size={15} className="text-gray-400" />
            <span>1 Adult, Economy</span>
          </div>
        </div>

        {/* Search button */}
        <button className="flex items-center gap-2 bg-[#1e3a5f] text-white px-6 py-4 rounded-md text-sm font-medium hover:bg-[#16304f] transition-colors">
          <IconSearch size={16} />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
