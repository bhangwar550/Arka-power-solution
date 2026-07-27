import React, { useEffect, useState } from "react";
import { FaBolt, FaPlay, FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

 function Counter({ number }) {
  
  const [count, setCount] = useState(1);

  useEffect(() => {

    let start = 1;

    const timer = setInterval(() => {

      start += Math.ceil(number / 50);  // speed increase

      if (start >= number) {
        start = number;
        clearInterval(timer);
      }

      setCount(start);

    }, 10); // pehle 20 tha, ab 10

    return () => clearInterval(timer);

  }, [number]);


  return <>{count.toLocaleString()}+</>;
}

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
    <section className="relative min-h-[650px] overflow-hidden bg-[#0b1740] text-white">
      {/* Inline Keyframes for Upward Floating Bubbles */}
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
            transform: translateY(-700px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>

      {/* 1. Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#8ba4d8 1px, transparent 1px),
            linear-gradient(90deg, #8ba4d8 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* ------------------------------------------------------------- */}
      {/* REAL FLOATING BUBBLES ANIMATION */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <span
          className="absolute bottom-0 left-[10%] w-5 h-5 bg-blue-400/30 rounded-full blur-[1px]"
          style={{ animation: "floatUp 5s linear infinite" }}
        ></span>
        <span
          className="absolute bottom-0 left-[25%] w-8 h-8 bg-orange-500/25 rounded-full blur-[1px]"
          style={{ animation: "floatUp 7s linear infinite 1.5s" }}
        ></span>
        <span
          className="absolute bottom-0 left-[45%] w-4 h-4 bg-blue-300/40 rounded-full"
          style={{ animation: "floatUp 4s linear infinite 0.5s" }}
        ></span>
        <span
          className="absolute bottom-0 left-[60%] w-10 h-10 bg-blue-500/20 rounded-full blur-[2px]"
          style={{ animation: "floatUp 8s linear infinite 2s" }}
        ></span>
        <span
          className="absolute bottom-0 left-[75%] w-6 h-6 bg-orange-400/30 rounded-full blur-[1px]"
          style={{ animation: "floatUp 6s linear infinite 3s" }}
        ></span>
        <span
          className="absolute bottom-0 left-[90%] w-3 h-3 bg-blue-200/50 rounded-full"
          style={{ animation: "floatUp 4.5s linear infinite 1s" }}
        ></span>
      </div>

      <div
        className="absolute right-[-60px] top-[-140px] w-[550px] h-[880px] bg-gradient-to-br from-orange-500/15 via-orange-600/5 to-transparent rotate-[-22deg] pointer-events-none rounded-3xl border-l-[3px] border-orange-500/60 shadow-[0_0_30px_rgba(249,115,22,0.3)]"
        style={{
          animation: "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        }}
      ></div>

     
      <div
        className="absolute right-[-110px] top-[-100px] w-[500px] h-[850px] bg-gradient-to-br from-blue-500/20 via-blue-700/5 to-transparent rotate-[-22deg] pointer-events-none rounded-3xl border-l-[3px] border-blue-400/70 shadow-[0_0_30px_rgba(96,165,250,0.3)]"
        style={{
          animation: "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.3s",
        }}
      ></div>

      {/* 3. Small Orange Glowing Dot Element (Top Right) */}
      <div className="absolute right-[38%] top-[22%] w-6 h-6 border border-orange-500/50 rounded-full flex items-center justify-center pointer-events-none">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
      </div>

      {/* 4. Rounded Square Outline Element */}
      <div
        className="absolute right-[12%] top-[28%] w-20 h-20 border border-blue-400/20 rounded-2xl pointer-events-none animate-bounce"
        style={{ animationDuration: "5s" }}
      ></div>

      {/* 5. Bottom Right Concentric Circles Graphic */}
      <div className="absolute right-[-30px] bottom-[10%] md:right-[5%] md:bottom-[15%] w-[300px] h-[300px] rounded-full border-2 border-orange-500/40 flex items-center justify-center pointer-events-none">
        {/* Outer Ripple Wave */}
        <div
          className="absolute inset-0 rounded-full border-2 border-orange-500/60 opacity-60"
          style={{ animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite" }}
        ></div>

        {/* Middle Circle */}
        <div
          className="w-[210px] h-[210px] rounded-full border-2 border-orange-500/60 flex items-center justify-center"
          style={{ animation: "pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
        >
          {/* Inner Circle */}
          <div className="w-[130px] h-[130px] rounded-full border-2 border-orange-500/80 flex items-center justify-center bg-orange-500/10 shadow-[0_0_25px_rgba(249,115,22,0.4)]">
            {/* Center Icon Badge */}
            <div className="w-12 h-12 rounded-full border-2 border-orange-500 bg-[#0b1740] flex items-center justify-center text-orange-500 text-lg shadow-[0_0_15px_rgba(249,115,22,0.7)] z-10">
              <FaBolt />
            </div>
          </div>
        </div>
      </div>

      {/* 6. Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 md:py-28">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 border border-orange-500/60 bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
          ELECTRICAL ENGINEERING SOLUTIONS — PAKISTAN
        </div>

        {/* Main Heading with Dynamic Typewriter Effect */}
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-white">
          Powering <span className="text-orange-500">Progress</span>
          <br />
          Through{" "}
          <span className="text-orange-500">
            <Typewriter
              words={["Precision", "Innovation", "Integrity", "Excellence"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-blue-100/80 text-base md:text-lg leading-relaxed">
          ARKA Power Solutions delivers safe, efficient, and future-ready
          electrical engineering services for commercial, industrial, and
          infrastructure clients across Pakistan.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <a href="#quote" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs tracking-wider px-7 py-4 rounded transition-all flex items-center gap-3 shadow-lg shadow-orange-500/20" onClick={() => navigate("/contact")} >
            GET A FREE QUOTE <FaArrowRight />
          </a>
          <a
            href="#services"
            className="border border-blue-400/40 hover:bg-blue-800/30 text-white font-bold text-xs tracking-wider px-7 py-4 rounded transition-all flex items-center gap-3" onClick={() => navigate("/service")}  >
            <FaPlay className="text-[10px] text-blue-300" /> OUR SERVICES
          </a>
        </div>
   {/* Stats */}
<div className="mt-14 flex flex-wrap gap-10 md:gap-16">
  <div>
    <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
      500+
    </h2>
    <p className="mt-2 text-blue-100/80 text-sm uppercase tracking-widest">
      Projects
    </p>
  </div>

  <div>
    <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
      200+
    </h2>
    <p className="mt-2 text-blue-100/80 text-sm uppercase tracking-widest">
      Clients
    </p>
  </div>

  <div>
    <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500">
      50+
    </h2>
    <p className="mt-2 text-blue-100/80 text-sm uppercase tracking-widest">
      Engineers
    </p>
  </div>
</div>

      </div>
      
    </section>
    <div className="bg-orange-500 py-10 px-6">

  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <div>
      <h2 className="text-4xl font-extrabold text-white">
  <Counter number={500} />
</h2>
      <p className="text-white uppercase">
        Projects Completed
      </p>
    </div>


    <div>
      <h2 className="text-4xl font-extrabold text-white">
     <Counter number={200}/>
      </h2>
      <p className="text-white uppercase">
        Happy Clients
      </p>
    </div>


    <div>
      <h2 className="text-4xl font-extrabold text-white">
      <Counter number={50}/>
      </h2>
      <p className="text-white uppercase">
        Expert Engineers
      </p>
    </div>


    <div>
      <h2 className="text-4xl font-extrabold text-white">
      <Counter number={2025}/>
      </h2>
      <p className="text-white uppercase">
        Year Founded
      </p>
    </div>


  </div>

</div>

    </>
    
  );
}