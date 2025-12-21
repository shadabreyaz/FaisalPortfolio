import React from 'react'

export default function Timeline({ id, background = "#EFF6dd", title, subtitle, description, items}) {
      
      return (
        <section id={id} className="py-12 sm:py-20"  style={{ background }}>
          <div className="custom-container flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
    
            {/* LEFT SIDE — INTRO */}
            <div className="w-full">
              <h2 className={`text-2xl sm:text-3xl md:text-[40px] leading-tight font-medium capitalize mb-2 sm:mb-4 italic text-[#2E559B]`}>
                 {title}
              </h2>

              <h3 className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-semibold mb-4 sm:mb-5">
               {subtitle}
              </h3> 
              <p className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-6 sm:max-w-[90%]">
               {description}
              </p>
            </div>
    
            {/* RIGHT SIDE — EXPERIENCE STACK */}
            <div className="w-full flex flex-col justify-center gap-8 border-l border-[#3B82F6]/30 pl-8">
              {items.map((exp, idx) => (
                <div key={idx} className="relative">
                  
                  {/* Dot indicator */}
                  <span className="absolute -left-9.5 top-3 w-3 h-3 rounded-full bg-[#3B82F6]" />
    
                  <h3 className="text-xl sm:text-2xl font-medium">
                    {exp.role}
                  </h3>
    
                  <p className="font-medium">
                    {exp.company}  {exp.location? '—' : ''} {exp.location}
                  </p>
    
                  <p className="text-sm text-gray-600 mb-1">
                    {exp.period}
                  </p>
    
                  <p  className="text-base sm:text-lg text-gray-700 max-w-[92%] md:max-w-[98%]">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
    
          </div>
        </section>
      );
}
