import React from "react";

export default function Core_value() {

  const values = [
    {
      number: "1",
      title: "Integrity",
      text: "Honesty & ethical responsibility"
    },
    {
      number: "2",
      title: "Safety",
      text: "Safety in every project, every stage"
    },
    {
      number: "3",
      title: "Innovation",
      text: "Smart technology & modern solutions"
    },
    {
      number: "4",
      title: "Excellence",
      text: "Quality, precision & reliability"
    },
    {
      number: "5",
      title: "Sustainability",
      text: "Energy-efficient & eco-conscious"
    },
    {
      number: "6",
      title: "Client Focus",
      text: "Listen, understand & deliver value"
    },
  ];


  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}
        <div className="text-center mb-12">

          <p
            className="
            inline-block
            px-5
            py-2
            rounded-full
            text-orange-500
            bg-orange-50
            border
            border-orange-200
            uppercase
            tracking-widest
            font-semibold
            text-sm
            "
          >
            What We Stand For
          </p>


          <h2 className="text-4xl font-bold text-blue-900 mt-3">
            Core Values
          </h2>

        </div>



        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-6
          gap-5
          "
        >


          {values.map((item, index) => (

            <div
              key={index}
              className="
              group
              bg-white
              p-4
              rounded-xl
              shadow-md
              transition
              duration-300
              border
              border-gray-100
              hover:bg-orange-500
              hover:shadow-xl
              hover:-translate-y-1
              "
            >


              {/* Number */}
              <div
                className="
                w-12
                h-12
                rounded-full
                bg-orange-100
                text-orange-500
                flex
                items-center
                justify-center
                text-xl
                font-bold
                mb-4
                mx-auto
                transition
                duration-300
                group-hover:bg-blue-900
                group-hover:text-white
                "
              >
                {item.number}
              </div>



              {/* Title */}
              <h3
                className="
                text-lg
                font-bold
                text-blue-900
                text-center
                transition
                duration-300
                group-hover:text-white
                "
              >
                {item.title}
              </h3>



              {/* Description */}
              <p
                className="
                text-gray-600
                text-sm
                mt-2
                leading-6
                text-center
                transition
                duration-300
                group-hover:text-white
                "
              >
                {item.text}
              </p>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
}