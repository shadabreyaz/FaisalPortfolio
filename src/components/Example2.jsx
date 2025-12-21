import React from "react";

export default function Example2() {
  const memberships = [
    {
      org: "Young Leaders AI Community",
      location: "Abu Dhabi",
      role: "Member",
      logo: "/logos/young-leaders-ai.png",
    },
    {
      org: "AI for Good",
      location: "Abu Dhabi",
      role: "Member",
      logo: "/logos/ai-for-good.png",
    },
    {
      org: "Euroweek Foundation",
      location: "Poland",
      role: "Youth Leader",
      logo: "/logos/euroweek.png",
    },
    {
      org: "Longevity and Wellness Center",
      location: "Dubai",
      role: "Member",
      logo: "/logos/longevity-center.png",
    },
  ];

  return (
    <section id="memberships" className="py-12 sm:py-20 bg-[#EFF6dd]">
      <div className="custom-container">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium capitalize mb-4 italic text-[#2E559B]">
          Memberships
        </h2>
        <p className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-8 sm:max-w-[90%]">
          Engaging with global innovation and leadership communities, these memberships reflect a commitment to learning, collaboration, and contributing to organizations shaping the future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {memberships.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={member.logo}
                alt={member.org}
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="font-semibold text-lg">{member.org}</h3>
              <p className="text-sm text-gray-600">
                {member.role} — {member.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
