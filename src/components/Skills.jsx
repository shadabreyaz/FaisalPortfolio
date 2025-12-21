import React from "react";

export default function Skills() {
  const skills = [
    "AI-Driven Business Intelligence",
    "Cybersecurity Awareness & Risk Management",
    "Cloud Infrastructure & Digital Ecosystems",
    "Data Analysis & Predictive Insights",
    "Healthcare Technology & Longevity Solutions",
    "Artificial Intelligence",
    "Digital Transformation",
    "Visionary Leadership & Growth Strategy",
    "Project Management",
    "Service Delivery",
    "Technology Integration & Cloud Solutions",
    "Business Development & Strategic Partnerships",
    "Market Expansion (UAE & Middle East)",
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 bg-white">
      <div className="custom-container">
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-medium capitalize mb-4 italic text-[#2E559B]">
          Skills
        </h2>
        <p className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-8 sm:max-w-[90%]">
          Expertise across technology, strategy, and innovation, bridging ideas and execution to deliver scalable impact.
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-[#3B82F6]/20 text-[#3B82F6] text-sm sm:text-base font-medium px-4 py-2 rounded-full shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
