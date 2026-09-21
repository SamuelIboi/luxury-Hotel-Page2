import sky from "../assets/sky.jpg";
import coaster from "../assets/coaster.jpg";
import mount from "../assets/mount.jpg";

const activities = [
  { name: "Six Flags Qiddiya City — Riyadh", image: coaster },
  { name: "Mountain Hiking — Nepal", image: mount },
  { name: "Sky Diving — Dubai", image: sky },
];

const MustTryActivities = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full py-10 px-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Must-Try Activities
        </h2>
        <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
          Discover unforgettable experiences designed to make every journey
          extraordinary.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 w-full mt-4">
        {activities.map((activity) => (
          <div
            key={activity.name}
            className="flex flex-col gap-3 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
          >
            <img
              src={activity.image}
              alt={activity.name}
              className="w-full h-56 object-cover"
            />
            <div className="px-4 pb-4 text-start font-semibold text-gray-900 text-sm">
              {activity.name}
            </div>
          </div>
        ))}
      </div>

      {/* View all button */}
      <button className="mt-4 px-8 py-2 border border-gray-300 text-sm text-gray-600 rounded-sm hover:bg-gray-50 transition-colors">
        View All Activities
      </button>
    </div>
  );
};

export default MustTryActivities;
