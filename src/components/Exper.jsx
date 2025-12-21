import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Chief Executive Officer / CTO",
      company: "Qutbee Technologies",
      location: "Abu Dhabi, UAE",
      period: "2020 – Present",
      description:
        "Leading technology, strategy, and operations with a strong focus on AI-driven solutions, digital ecosystems, and scalable innovation.",
    },
    {
      role: "TechOps Specialist",
      company: "Abu Dhabi Investment Authority",
      location: "Abu Dhabi, UAE",
      period: "2017 – 2020",
      description:
        "Oversaw IT operations, infrastructure optimization, and enterprise-level systems supporting critical government initiatives.",
    },
    {
      role: "Lead Operations (NOC / IT)",
      company: "Digital Dubai",
      location: "Dubai, UAE",
      period: "2014 – 2017",
      description:
        "Contributed to Dubai’s digital transformation, including the landmark initiative that established the world’s first paperless government.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#EFF6FF] flex items-center">
      <div className="custom-container w-full grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE — INTRO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#20283f] mb-6">
            Professional Journey
          </h2>

          <p className="text-lg text-[#2E559B] mb-4 max-w-md">
            A decade-long journey across technology, government, and innovation,
            shaping digital ecosystems and leading transformative initiatives.
          </p>

          <p className="text-base text-gray-700 max-w-md">
            From enterprise infrastructure to executive leadership, each role
            reflects a commitment to impact, scale, and future-ready solutions.
          </p>
        </div>

        {/* RIGHT SIDE — EXPERIENCE STACK */}
        <div className="flex flex-col justify-center gap-8 border-l border-[#3B82F6]/30 pl-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              
              {/* Dot indicator */}
              <span className="absolute -left-[14px] top-2 w-3 h-3 rounded-full bg-[#3B82F6]" />

              <h3 className="text-xl font-semibold text-[#20283f]">
                {exp.role}
              </h3>

              <p className="text-sm font-medium text-[#3B82F6]">
                {exp.company} — {exp.location}
              </p>

              <p className="text-sm text-gray-500 mb-2">
                {exp.period}
              </p>

              <p className="text-gray-700 max-w-xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
