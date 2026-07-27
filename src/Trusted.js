import React from "react";

const companies = [
  "ENGRO",
  "LUCKY CEMENT",
  "KARACHI PORT TRUST",
  "PTCL",
  "K-ELECTRIC",
  "FAUJI CEMENT",
  "DHA KARACHI",
  "NESTLE PAKISTAN",
  "PSO",
  "HONDA ATLAS",
];

export default function Trusted() {
  return (
    <section className="py-16 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center mb-10">

        <p className="text-orange-500 uppercase tracking-widest font-semibold">
          Trusted By Industry Leaders
        </p>

      </div>


      {/* Slider */}
      <div className="overflow-hidden">

        <div className="flex w-max animate-marquee gap-10">

          {[...companies, ...companies].map((company, index) => (

            <div
              key={index}
              className="flex items-center gap-3 text-gray-700 font-semibold text-lg whitespace-nowrap"
            >

              <span className="w-3 h-3 rounded-full bg-orange-500"></span>

              {company}

            </div>

          ))}

        </div>

      </div>


    </section>
  );
}