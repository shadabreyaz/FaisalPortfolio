import React from 'react'

export default function Timeline({ id, background = "#EFF6dd", title, subtitle, description, items}) {

      return (
        <section id={id} className={`py-12 sm:py-20 ${background}`}>
          <div className="custom-container flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
    
            {/* LEFT SIDE — INTRO */}
            <div className="w-full">
              <h2 className={`text-2xl sm:text-3xl md:text-[40px] leading-tight font-medium capitalize mb-2 sm:mb-4 italic bg-linear-to-t from-[#93C5FD] to-[#3B82F6]
                 bg-clip-text text-transparent`}>
                 {title}
              </h2>

              <h3 className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-semibold mb-4 sm:mb-5 text-white">
               {subtitle}
              </h3> 
              <p className="text-base sm:text-lg mb-6 sm:max-w-[90%] text-gray-200">
               {description}
              </p>
            </div>
    
            {/* RIGHT SIDE — EXPERIENCE STACK */}
            <div className="w-full flex flex-col justify-center gap-8 border-l border-slate-300 pl-8">
              {items.map((exp, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Dot indicator */}
                  <span className="timeline-dot absolute -left-10 top-3 size-4 rounded-full bg-[rgb(var(--brand-light-blue))] transition-transform duration-500 ease-in-out 
                     group-hover:scale-150" />
    
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-100">
                    {exp.role}
                  </h3>
    
                  <p className="font-medium text-[rgb(var(--brand-light-blue))]">
                    {exp.company}  {exp.location? '—' : ''} {exp.location}
                  </p>
    
                  <p className="text-sm text-gray-200 mb-1">
                    {exp.period}
                  </p>
    
                  <p  className="text-base sm:text-lg text-gray-300 max-w-[92%] md:max-w-[98%]">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
    
          </div>
        </section>
      );
}
