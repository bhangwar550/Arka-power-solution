import React from "react";

export default function Work() {

  return (

    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">

          <p className="
          text-orange-500
          uppercase
          tracking-widest
          font-semibold
          text-sm
          ">
            See Us In Action
          </p>


          <h2 className="
          mt-3
          text-4xl
          md:text-5xl
          font-bold
          text-[#0b1740]
          ">
            Our Work in Action
          </h2>


          <p className="
          mt-5
          text-gray-600
          text-lg
          max-w-3xl
          mx-auto
          ">
            A look at our teams commissioning, testing, and maintaining
            electrical infrastructure on site.
          </p>


        </div>




        {/* Videos */}


        <div className="
        grid
        md:grid-cols-2
        gap-8
        ">



          {/* Video 1 */}

          <div className="
          rounded-2xl
          overflow-hidden
          shadow-lg
          border
          border-gray-200
          ">

            <video
              className="w-full h-[350px] object-cover"  autoPlay
  muted
  loop
  playsInline
              controls
            >

              <source 
                src="/images/project-showcase.mp4"
                type="video/mp4"
              />

            </video>


          </div>






          {/* Video 2 */}

          <div className="
          rounded-2xl
          overflow-hidden
          shadow-lg
          border
          border-gray-200
          ">


            <video
              className="w-full h-[350px] object-cover "  autoPlay
  muted
  loop
  playsInline
              controls
            >

              <source 
                src="/images/project-gallery-2.mp4"
                type="video/mp4"
              />

            </video>


          </div>



        </div>


      </div>


    </section>

  );

}