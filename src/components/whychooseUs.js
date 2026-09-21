import {
  IconCreditCard,
  IconHeadset,
  IconCalendarStats,
  IconWorld,
} from "@tabler/icons-react";

const reasons = [
  {
    icon: IconCreditCard,
    title: "No Hidden Fees",
    description: "Pay exactly what you see — transparent pricing always.",
  },
  {
    icon: IconHeadset,
    title: "Real Support, Fast",
    description: "24/7 customer support from real humans, not bots.",
  },
  {
    icon: IconCalendarStats,
    title: "Flexible Plans",
    description: "Easy booking changes and cancellation options.",
  },
  {
    icon: IconWorld,
    title: "Local + Global",
    description:
      "Travel worldwide with local expertise and trusted global partnerships.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full py-14 px-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Why Choose Us?
        </h2>
        <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
          The AL-Thuraya advantage — designed to make travel simpler, smarter,
          and stress-free.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-5 w-full mt-4">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div
              key={reason.title}
              className="flex flex-col gap-4 bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
            >
              {/* Icon box */}
              <div className="bg-gray-100 rounded-lg p-2 w-fit">
                <Icon size={20} className="text-blue-900" />
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold text-gray-900 text-sm mb-1">
                  {reason.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
