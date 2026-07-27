import React from "react";
import { FaBolt, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Arka_power() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* LEFT SIDE */}
          <div className="bg-[#0b1740] p-8 rounded-2xl flex flex-col">


            {/* Animated Icon */}
            <div className="relative w-[120px] h-[120px] flex items-center justify-center mx-auto mb-5">


              {/* Ring 1 */}
              <div className="absolute w-[120px] h-[120px] rounded-full border-2 border-orange-500 animate-ping opacity-30">
              </div>


              {/* Ring 2 */}
              <div className="absolute w-[100px] h-[100px] rounded-full border-2 border-orange-400 animate-[ping_2s_linear_infinite] opacity-50">
              </div>


              {/* Ring 3 */}
              <div className="absolute w-[80px] h-[80px] rounded-full border-2 border-orange-300 animate-[pulse_1.5s_ease-in-out_infinite] opacity-70">
              </div>



              {/* Bolt Icon */}
              <div
                className="
                w-14 h-14
                rounded-full
                bg-orange-500
                flex
                items-center
                justify-center
                text-white
                text-xl
                z-10
                shadow-[0_0_25px_rgba(249,115,22,0.8)]
                animate-[pulse_2s_ease-in-out_infinite]
                "
              >
                <FaBolt />
              </div>


            </div>



            {/* Text */}
            <p className="text-orange-400 uppercase tracking-widest font-semibold text-center">
              ARKA POWER
            </p>

            <p className="text-orange-400 uppercase tracking-widest font-semibold text-center">
              Solution
            </p>



            <h2 className="text-3xl font-bold text-white mt-3 text-center">

              Powering Excellence Through

              <span className="text-orange-400">
                {" "}Smart Engineering
              </span>

            </h2>



            <p className="text-gray-300 mt-4 leading-7 text-center">
              We deliver reliable electrical solutions with a strong focus on
              safety, quality, precision engineering, and customer satisfaction.
            </p>




            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">


              {[
                ["Safety", "First Priority"],
                ["Quality", "Always"],
                ["Precision", "Engineering"],
                ["Client", "Focus"],
              ].map((item, index) => (

                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/10 border border-white/10"
                >

                  <h3 className="text-lg font-bold text-white">
                    {item[0]}
                  </h3>


                  <p className="text-orange-400 font-semibold mt-1">
                    {item[1]}
                  </p>


                </div>

              ))}


            </div>


          </div>






          {/* RIGHT SIDE */}
          <div>


            <h2 className="text-3xl font-bold text-gray-900 mb-8">

              Our Advantage

              <span className="text-orange-500">
                {" "}Why Choose ARKA Power Solutions
              </span>

            </h2>




            <div className="space-y-4">


              {[
                "Expert team with deep domain knowledge in electrical systems",
                "Commitment to safety standards and statutory compliance",
                "Advanced design and simulation tools for efficient planning",
                "Cost-effective, durable, and energy-efficient solutions",
                "Reliable execution and after-sales support",
                "Strong customer focus and transparent processes",
              ].map((item, index) => (


                <div
                  key={index}
                  className="
                  flex
                  items-center
                  gap-4
                  bg-gray-50
                  p-4
                  rounded-lg
                  "
                >


                  {/* Orange Check */}
                  <span
                    className="
                    w-9
                    h-9
                    rounded-full
                    bg-orange-500
                    text-white
                    flex
                    items-center
                    justify-center
                    font-bold
                    flex-shrink-0
                    "
                  >
                    ✓
                  </span>



                  <p className="text-gray-700">
                    {item}
                  </p>



                </div>


              ))}


            </div>



            {/* Button */}
           <button
  className="
  mt-3
  ml-4
  px-8
  py-3
  bg-orange-500
  text-white
  font-semibold
  rounded-lg
  hover:bg-orange-600
  transition
  shadow-lg
  flex
  items-center
  gap-3
  "
onClick={() => navigate("/about")} >
  About Our Company
  <FaArrowRight />
</button>



          </div>


        </div>

      </div>

    </section>
  );
}