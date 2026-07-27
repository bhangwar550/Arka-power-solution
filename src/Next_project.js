import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Next_project() {
  const navigate = useNavigate();

  const bubbles = Array.from({ length: 40 });

  return (
    <section className="relative py-20 bg-orange-500 overflow-hidden">

      {/* Bubble Animation */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }

          50% {
            opacity: 0.6;
          }

          100% {
            transform: translateY(-500px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>


      {/* Moving Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {bubbles.map((_, index) => (
          <span
            key={index}
            className="
            absolute
            bottom-0
            bg-blue-900/30
            rounded-full
            "
            style={{
              width: `${Math.random() * 12 + 5}px`,
              height: `${Math.random() * 12 + 5}px`,
              left: `${Math.random() * 100}%`,
              animation: `floatUp ${
                Math.random() * 5 + 4
              }s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></span>
        ))}

      </div>



      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">


        <p className="text-white uppercase tracking-widest font-semibold">
          Ready to Start?
        </p>


        <h2 className="text-4xl font-bold text-white mt-3">
          Let's Power Your Next Project
        </h2>


        <p className="text-orange-100 mt-5 max-w-3xl mx-auto leading-7">
          Contact ARKA Power Solutions today for a free consultation.
          Our experts deliver tailored electrical engineering solutions.
        </p>



        <button
          className="
          mt-8
          px-8
          py-3
          bg-orange-600
          text-white
          font-semibold
          rounded-lg
          transition
          duration-300
          shadow-lg
          flex
          items-center
          gap-2
          mx-auto
          hover:-translate-y-2
          hover:shadow-xl
          "
       onClick={() => navigate("/contact")}  >
          Contact Us Today
          <FaArrowAltCircleRight />
        </button>


      </div>


    </section>
  );
}