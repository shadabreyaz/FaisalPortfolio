import React from 'react'
import Timeline from './Timeline';

export default function HorizontalJourney() {
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
    const education = [
        {
          role: "Corporate Strategy",
          company: "University of London",
          period: "2020",
          description:
            "A focused foundation in strategic planning, market analysis, and financial decision-making, aligning vision, execution, and innovation.",
        },
        {
          role: "Master of Science in Information Technology",
          company: "School of Engineering & Technology, BGSB University (State University)",
          period: "2016 – 2018",
          description:
            "Advanced studies in information systems and enterprise technologies, reinforcing system design, analytical thinking, and scalable platform architecture.",
        },
        {
          role: "Bachelor of Computer Applications (BCA)",
          company: "University of Kashmir",
          period: "2013 – 2016",
          description:
            "Built core expertise in computer science, software development, and systems thinking.",
        },
    ];
    
  return (
    <div>
        <Timeline id="journey"
            title="Experience"
            subtitle="Leadership in Technology, Strategy & Digital Transformation"
            description="A decade-long journey shaping innovation across government, enterprise, and emerging technology ecosystems in the Middle East. Each role reflects a commitment to turning vision into impact leveraging AI, scalable systems, and operational excellence to build the future."
            items={experiences}
            background="#B5F9FA"
        />
        <Timeline id="education"
            title="Education"
            subtitle="Strategic Thinking Grounded in Technical Excellence"
            description="My academic path mirrors the same philosophy that defines my professional journey combining strategic insight with strong technical foundations. Each stage of education strengthened my ability to navigate complexity, lead change, and design technology-driven solutions with long term impact."
            items={education}
            background="#B5F9FA"
        />
    </div>
  )
}
