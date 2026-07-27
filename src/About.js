import React from "react";
import Footer from "./Footer";
import {
  FaShieldAlt,
  FaBolt,
  FaLightbulb,
  FaAward,
  FaLeaf,
  FaUsers,
  FaArrowAltCircleRight
} from "react-icons/fa";

export default function About() {
  return (
    <>
     

      <section className="relative min-h-[500px] overflow-hidden bg-[#0b1740] text-white">

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


        {/* Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
            linear-gradient(#8ba4d8 1px, transparent 1px),
            linear-gradient(90deg, #8ba4d8 1px, transparent 1px)
            `,
            backgroundSize:"60px 60px",
          }}
        />



        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">


          <span
            className="absolute bottom-0 left-[10%] w-5 h-5 bg-blue-400/30 rounded-full"
            style={{animation:"floatUp 5s linear infinite"}}
          />


          <span
            className="absolute bottom-0 left-[25%] w-8 h-8 bg-orange-500/25 rounded-full"
            style={{animation:"floatUp 7s linear infinite 1.5s"}}
          />


          <span
            className="absolute bottom-0 left-[45%] w-4 h-4 bg-blue-300/40 rounded-full"
            style={{animation:"floatUp 4s linear infinite .5s"}}
          />


          <span
            className="absolute bottom-0 left-[60%] w-10 h-10 bg-blue-500/20 rounded-full"
            style={{animation:"floatUp 8s linear infinite 2s"}}
          />


          <span
            className="absolute bottom-0 left-[75%] w-6 h-6 bg-orange-400/30 rounded-full"
            style={{animation:"floatUp 6s linear infinite 3s"}}
          />


        </div>



        {/* Diagonal Boxes */}

        <div
          className="
          absolute
          right-[-60px]
          top-[-140px]
          w-[550px]
          h-[880px]
          bg-gradient-to-br
          from-orange-500/15
          via-orange-600/5
          to-transparent
          rotate-[-22deg]
          rounded-3xl
          border-l-[3px]
          border-orange-500/60
          "
        />


        <div
          className="
          absolute
          right-[-110px]
          top-[-100px]
          w-[500px]
          h-[850px]
          bg-gradient-to-br
          from-blue-500/20
          via-blue-700/5
          to-transparent
          rotate-[-22deg]
          rounded-3xl
          border-l-[3px]
          border-blue-400/70
          "
        />



        {/* Hero Content */}

        <div className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-8
          py-24
        ">


          <div className="max-w-3xl">


            <p className="
              text-orange-500
              uppercase
              tracking-widest
              font-semibold
              text-sm
              mb-5
            ">
              Who We Are
            </p>



            <h1 className="
              text-5xl
              md:text-6xl
              font-extrabold
              mb-6
            ">
              About 
              <span className="text-orange-500">
                {" "}ARKA Power
              </span>
            </h1>



            <p className="
              text-blue-100/80
              text-lg
              leading-relaxed
              max-w-xl
            ">
              An emerging electrical engineering solutions provider founded in
              September 2025, delivering safe, efficient and future-ready
              electrical systems.
            </p>



            <div className="
              flex
              gap-3
              mt-8
              text-sm
              text-blue-200
            ">
              <span>Home</span>
              <span>/</span>
              <span className="text-orange-500">
                About Us
              </span>
            </div>


          </div>

        </div>


      </section>




      {/* ================= COMPANY SECTION ================= */}


      <section className="bg-white text-gray-800 py-20">

  <div className="max-w-7xl mx-auto px-6">

    <div className="
      grid
      lg:grid-cols-2
      gap-14
      items-start
    ">


      {/* LEFT SIDE CONTENT */}

      <div>


        <p className="
          text-orange-500
          uppercase
          tracking-widest
          font-semibold
          text-sm
          mb-3
        ">
          About The Company
        </p>



        <h2 className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-[#0b1740]
          mb-8
        ">
          Our Story
        </h2>



        <p className="
          text-gray-600
          text-lg
          leading-8
          mb-5
        ">
          ARKA Power Solutions is an emerging electrical engineering
          solutions provider founded in September 2025. Our core mission
          is to power progress through electrical projects for commercial,
          industrial, and infrastructure clients.
        </p>



        <p className="
          text-gray-600
          text-lg
          leading-8
          mb-5
        ">
          We are committed to delivering high-performance engineering
          services, blending deep technical expertise with innovation
          and quality.
        </p>



        <p className="
          text-gray-600
          text-lg
          leading-8
        ">
          At ARKA Power Solutions, safety, precision, and client
          satisfaction are central to everything we do.
        </p>





        {/* Stats */}

        <div className="
          grid
          grid-cols-3
          gap-5
          mt-12
        ">


          {[
            ["500+","Projects"],
            ["200+","Clients"],
            ["2025","Founded"]
          ].map((item,index)=>(

            <div
            key={index}
            className="
              text-center
              border
              rounded-xl
              p-5
              shadow-md
            "
            >

              <h3 className="
                text-3xl
                font-bold
                text-orange-500
              ">
                {item[0]}
              </h3>


              <p className="
                text-sm
                mt-2
                uppercase
                tracking-wider
                text-gray-600
              ">
                {item[1]}
              </p>


            </div>

          ))}


        </div>


      </div>





      {/* RIGHT SIDE BLUE BOXES */}


      <div className="
        space-y-8
        lg:mt-16
      ">



        {/* Vision */}

        <div className="
          bg-[#0b1740]
          text-white
          p-10
          rounded-2xl
          shadow-xl
        ">


          <h3 className="
            text-3xl
            font-bold
            text-orange-500
            mb-5
          ">
            Vision Statement
          </h3>



          <p className="
            text-blue-100
            leading-8
            text-lg
          ">
            To be Pakistan's most trusted and innovative provider of
            electrical engineering solutions that power sustainable growth.
          </p>


        </div>





        {/* Mission */}

        <div className="
  bg-white
  text-gray-800
  p-10
  rounded-2xl
  shadow-xl
  border
  border-orange-500
">


  <h3 className="
    text-3xl
    font-bold
    text-orange-500
    mb-5
  ">
    Mission Statement
  </h3>



  <ul className="
    space-y-4
    text-gray-600
    text-lg
    leading-7
  ">


    <li>
      <span className="text-orange-500 font-bold">&gt;</span>
      {" "} To design and deliver safe, efficient, and future-ready electrical systems.
    </li>


    <li>
      <span className="text-orange-500 font-bold">&gt;</span>
      {" "} To provide end-to-end electrical solutions across sectors with precision and integrity.
    </li>


    <li>
      <span className="text-orange-500 font-bold">&gt;</span>
      {" "} To be a partner of choice for high-quality electrical project execution.
    </li>


  </ul>


</div>


      </div>



    </div>


  </div>


</section>
{/* ================= CORE VALUES SECTION ================= */}
<section className="bg-[rgb(14,28,74)] py-20">

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
          border-orange-300
          uppercase
          tracking-widest
          font-semibold
          text-sm
        "
      >
        What We Stand For
      </p>



      <h2
        className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-white
          mt-4
        "
      >
        Our Core Values
      </h2>


    </div>





    {/* Cards */}

    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
    >


      {[
        {
          icon:<FaShieldAlt />,
          title:"Integrity",
          text:"Honesty, transparency and ethical responsibility in every project."
        },

        {
          icon:<FaBolt />,
          title:"Safety",
          text:"Safety first approach in every electrical installation."
        },

        {
          icon:<FaLightbulb />,
          title:"Innovation",
          text:"Smart technology and modern engineering solutions."
        },

        {
          icon:<FaAward />,
          title:"Excellence",
          text:"Quality, precision and reliable project execution."
        },

        {
          icon:<FaLeaf />,
          title:"Sustainability",
          text:"Energy efficient and eco-friendly electrical solutions."
        },

        {
          icon:<FaUsers />,
          title:"Client Focus",
          text:"Understanding client needs and delivering maximum value."
        }

      ].map((item,index)=>(


        <div
          key={index}
          className="
            bg-white/20
            backdrop-blur-md
            p-8
            rounded-2xl
            shadow-xl
            border
            border-white/20
            transition
            duration-300
            group
            hover:bg-white/35
            hover:border-orange-500
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >


          {/* Icon */}

          <div
            className="
              w-16
              h-16
              rounded-xl
              bg-orange-100
              text-orange-500
              flex
              items-center
              justify-center
              text-3xl
              mb-6
              transition
              duration-300
              group-hover:bg-orange-500
              group-hover:text-white
            "
          >
            {item.icon}
          </div>





          {/* Title */}

          <h3
            className="
              text-2xl
              font-bold
              text-white
              mb-3
            "
          >
            {item.title}
          </h3>





          {/* Description */}

          <p
            className="
              text-gray-200
              leading-7
            "
          >
            {item.text}
          </p>



        </div>


      ))}


    </div>


  </div>


</section>
<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-6">


    {/* Heading */}

    <div className="text-center mb-14">


      <p
        className="
          inline-block
          px-5
          py-2
          rounded-full
          text-orange-500
          bg-orange-50
          border
          border-orange-300
          uppercase
          tracking-widest
          font-semibold
          text-sm
        "
      >
        Our Advantage
      </p>



      <h2
        className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-[#0b1740]
          mt-4
        "
      >
        Why Choose ARKA
      </h2>


    </div>





    {/* Advantage Cards */}


    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
    >


      {[
        {
          number:"01",
          text:"Expert team with deep domain knowledge in electrical systems"
        },

        {
          number:"02",
          text:"Commitment to safety standards and statutory compliance"
        },

        {
          number:"03",
          text:"Advanced design and simulation tools for efficient planning"
        },

        {
          number:"04",
          text:"Cost-effective, durable, and energy-efficient solutions"
        },

        {
          number:"05",
          text:"Reliable execution and after-sales support"
        },

        {
          number:"06",
          text:"Customized electrical solutions designed according to client requirements"
        }

      ].map((item,index)=>(


        <div
          key={index}
          className="
            bg-white
            p-8
            rounded-2xl
            border
            border-gray-200
            shadow-lg
            transition
            duration-300
            hover:-translate-y-2
            hover:border-orange-500
            hover:shadow-2xl
          "
        >


          {/* Number */}

          <div
            className="
              text-5xl
              font-extrabold
              text-orange-500
              mb-5
            "
          >
            {item.number}
          </div>




          {/* Text */}

          <p
            className="
              text-gray-600
              text-lg
              leading-8
            "
          >
            {item.text}
          </p>



        </div>


      ))}


    </div>


  </div>


</section>
{/* ================= OFFICE SECTION ================= */}

<section className="bg-orange-500 py-20">

  <div className="max-w-7xl mx-auto px-6">


    <div
      className="
        grid
        lg:grid-cols-2
        gap-12
        items-center
      "
    >



      {/* Left Content */}

      <div>


        <p
          className="
            text-white/80
            uppercase
            tracking-widest
            font-semibold
            text-sm
            mb-4
          "
        >
          Corporate Office
        </p>



        <h2
          className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-white
            mb-6
          "
        >
          Visit Our Office
        </h2>



        <p
          className="
            text-white
            text-lg
            leading-8
            max-w-xl
          "
        >
          House No 54-B Shahmeer Residency,
          <br />
          Near Makhdoom Bilawal Society,
          <br />
          Sachal Goth, Karachi, Pakistan
        </p>




        <div
          className="
            mt-6
            inline-block
            bg-white/20
            backdrop-blur-md
            px-6
            py-3
            rounded-xl
            text-white
            font-semibold
          "
        >
          Mon–Sat: 9:00 AM – 6:00 PM
        </div>



      </div>





      {/* Right Contact Box */}


      <div
        className="
          bg-white
          rounded-3xl
          p-10
          shadow-2xl
        "
      >


        <h3
          className="
            text-3xl
            font-bold
            text-[#0b1740]
            mb-5
          "
        >
          Get in Touch
        </h3>



        <p
          className="
            text-gray-600
            text-lg
            leading-8
            mb-8
          "
        >
          Have a project in mind? Contact ARKA Power Solutions
          for reliable electrical engineering services and
          professional support.
        </p>



<button
  className="
    bg-[#0b1740]
    text-white
    px-8
    py-3
    rounded-xl
    font-semibold
    transition
    duration-300
    hover:bg-black
    flex
    items-center
    gap-3
  "
>
  Contact Us 
  <FaArrowAltCircleRight />
</button>



      </div>



    </div>


  </div>


</section>
<Footer />
    </>
  );
}