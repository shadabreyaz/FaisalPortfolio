import React from "react";

export default function Member() {
  const memberships = [
    {
      org: "Young Leaders AI Community",
      location: "Abu Dhabi",
      role: "Member",
      logo: "/logos/young-leaders-ai.png",
      description: "Collaborating with emerging AI innovators to explore ethical, scalable, and transformative AI solutions.",
    },
    {
      org: "AI for Good",
      location: "Abu Dhabi",
      role: "Member",
      logo: "/logos/ai-for-good.png",
      description: "Engaging in initiatives leveraging AI to address global challenges and promote social impact.",
    },
    {
      org: "Euroweek Foundation",
      location: "Poland",
      role: "Youth Leader",
      logo: "/logos/euroweek.png",
      description: "Leading youth programs that foster international collaboration, leadership, and innovation.",
    },
    {
      org: "Longevity and Wellness Center",
      location: "Dubai",
      role: "Member",
      logo: "/logos/longevity-center.png",
      description: "Contributing to discussions and initiatives focused on health, longevity, and wellness innovation.",
    },
  ];
  

  return (
    <section id="memberships" className="py-12 sm:py-20 bg-[#30395B]">
      <div className="custom-container">
        <h2 className={`text-2xl sm:text-3xl md:text-[40px] leading-tight font-medium capitalize mb-2 sm:mb-4 italic bg-linear-to-t from-[#93C5FD] to-[#3B82F6]
                 bg-clip-text text-transparent`}>
          Memberships
        </h2>

        <h3 className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-semibold mb-4 sm:mb-5 text-white">
          Connecting with Global Innovation and Leadership Communities
        </h3>

        <p className="text-gray-200 text-base sm:text-lg mb-6 sm:mb-10 sm:max-w-[90%]">
          Over the years I have actively engaged with organizations that drive global innovation, social impact and leadership communities. These memberships reflect a commitment to learning, collaboration, and contributing to organizations shaping the future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {memberships.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20
              shadow-[0_20px_40px_rgba(255,255,255,0.06), 0_10px_30px_rgba(0,0,0,0.18)] hover:bg-white/15 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]
              transition-all duration-300"
            >
              <img
                src={member.logo}
                alt={member.org}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-white">{member.org}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-100 mb-1">
                {member.role} — {member.location}
              </p>
              <p className="text-sm md:text-base text-slate-300">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
