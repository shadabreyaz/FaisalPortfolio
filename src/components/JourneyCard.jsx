import React from "react";

export default function JourneyCard() {
  const experiences = [
    {
      role: "Chief Executive Officer/CTO",
      company: "Qutbee Technologies – Abu Dhabi, UAE",
      period: "2020 – Present",
      description:
        "Leading technology and operations with a focus on AI-driven solutions and digital transformation.",
    },
    {
      role: "TechOps Specialist",
      company: "Abu Dhabi Investment Authority – Abu Dhabi, UAE",
      period: "2017 – 2020",
      description:
        "Managed IT infrastructure and operational efficiency for large-scale government initiatives.",
    },
    {
      role: "Lead Operations (NOC/IT)",
      company: "Digital Dubai – Dubai, UAE",
      period: "2014 – 2017",
      description:
        "Played a key role in Dubai’s Digital transformation programs, including the paperless city initiative.",
    },
  ];

  return (
    <section className="w-full h-screen bg-[#EFF6FF] flex flex-col justify-center items-center py-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#20283f]">
        My Professional Journey
      </h2>

      <div className="w-11/12 md:w-2/3 flex flex-col gap-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-linear-to-r from-[#20283f] to-[#3B82F6]"
          >
            <h3 className="text-2xl font-bold text-[#20283f]">{exp.role}</h3>
            <p className="text-[#3B82F6] font-semibold">{exp.company}</p>
            <p className="text-gray-600 mb-2">{exp.period}</p>
            <p className="text-gray-800">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
