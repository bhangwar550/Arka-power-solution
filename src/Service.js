import React from "react";
import Footer from "./Footer";
import {
  FaBolt,
  FaSolarPanel,
  FaIndustry,
  FaNetworkWired,
  FaMicrochip,
  FaShieldAlt,
  FaBuilding,
  FaCheckCircle,
  FaCogs,
} from "react-icons/fa";

export default function Service() {
  const services = [
    {
      icon: <FaBolt />,
      title: "HT & LT Electrical Installations",
      description:
        "Complete high-tension and low-tension electrical installations for industrial, commercial and infrastructure projects.",
      points: [
        "11KV / 33KV HT panel installation",
        "LT distribution boards",
        "Cable laying & termination",
        "Switchgear installation",
        "Commissioning & testing",
      ],
    },
    {
      icon: <FaNetworkWired />,
      title: "Power Distribution Systems",
      description:
        "End-to-end power distribution system design and installation ensuring reliable and efficient power delivery.",
      points: [
        "Main distribution boards",
        "Sub-distribution panels",
        "Busbar trunking systems",
        "Load balancing",
        "Power factor correction",
      ],
    },
    {
      icon: <FaIndustry />,
      title: "Industrial & Commercial Wiring",
      description:
        "Professional wiring solutions for industrial plants, commercial buildings and infrastructure projects.",
      points: [
        "Industrial plant wiring",
        "Commercial building wiring",
        "Conduit & cable tray installation",
        "Lighting & power circuits",
        "Emergency & exit lighting",
      ],
    },
    {
      icon: <FaBuilding />,
      title: "Building Management Systems (BMS)",
      description:
        "Smart building automation and management systems for efficient monitoring and control.",
      points: [
        "BMS design & installation",
        "HVAC integration",
        "Lighting control systems",
        "Energy monitoring",
        "Remote access & reporting",
      ],
    },
    {
      icon: <FaMicrochip />,
      title: "Automation & Control Panels (PLC/SCADA)",
      description:
        "Design and fabrication of automation and control panels including PLC programming and SCADA integration.",
      points: [
        "PLC programming (Siemens, Allen-Bradley)",
        "SCADA system integration",
        "MCC panel fabrication",
        "VFD installation & commissioning",
        "Control panel design",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Earthing & Lightning Protection",
      description:
        "Comprehensive earthing and lightning protection systems to safeguard personnel and equipment.",
      points: [
        "Conventional & ESE lightning protection",
        "Equipotential bonding",
        "Earth resistance testing",
        "Surge protection devices",
        "Compliance certification",
      ],
    },
    {
      icon: <FaSolarPanel />,
      title: "Solar Power & Renewable Energy",
      description:
        "Complete solar PV system design, supply and installation for on-grid, off-grid and hybrid applications.",
      points: [
        "Site survey & feasibility study",
        "Solar PV system design",
        "Inverter & battery installation",
        "Net metering application",
        "O&M services",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[450px] overflow-hidden bg-[#0b1740] text-white">
        {/* Background Shapes */}
        <div className="absolute right-[-100px] top-[-150px] w-[500px] h-[700px] bg-orange-500/20 rotate-[-25deg] rounded-3xl" />

        <div className="absolute left-[-120px] bottom-[-150px] w-[400px] h-[400px] bg-blue-400/20 rounded-full" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-orange-500 uppercase tracking-widest font-semibold text-sm mb-5">
              What We Offer
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Services <span className="text-orange-500">Offered</span>
            </h1>

            <p className="text-blue-100/80 text-lg leading-relaxed max-w-2xl">
              ARKA Engineers Pvt. Ltd. offers a comprehensive range of
              electrical engineering services for commercial, industrial,
              and infrastructure clients.
            </p>

            <div className="flex gap-3 mt-8 text-sm text-blue-200">
              <span>Home</span>
              <span>/</span>
              <span className="text-orange-500">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="
        inline-block
        px-5
        py-2
        rounded-full
        bg-orange-100
        text-orange-500
        font-semibold
        uppercase
        tracking-widest
        text-sm
      ">
        Our Expertise
      </p>


      <h2 className="
        mt-6
        text-4xl
        md:text-5xl
        font-extrabold
        text-slate-900
      ">
        Electrical Engineering
        <span className="text-orange-500">
          {" "}Services
        </span>
      </h2>


      <p className="
        mt-6
        text-slate-600
        text-lg
        leading-relaxed
        max-w-3xl
        mx-auto
      ">
        From HT installations to renewable energy integration — we deliver
        complete electrical engineering solutions with reliability,
        quality, and industry expertise.
      </p>

    </div>



    {/* Cards */}
    <div className="
      grid
      gap-8
      md:grid-cols-2
      xl:grid-cols-3
    ">

      {services.map((service, index) => (

        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            bg-white
            rounded-3xl
            p-8
            border
            border-slate-200
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >

          {/* Top Orange Line */}
          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-1.5
              bg-orange-300
              transition-all
              duration-300
              group-hover:bg-orange-500
            "
          />



          {/* Icon */}
          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-orange-50
              text-orange-300
              flex
              items-center
              justify-center
              text-3xl
              mb-6
              transition-all
              duration-300
              group-hover:bg-orange-500
              group-hover:text-white
            "
          >
            {service.icon}
          </div>




          {/* Title */}
          <h3
            className="
              text-2xl
              font-bold
              text-slate-900
              mb-4
              transition-colors
              duration-300
              group-hover:text-orange-500
            "
          >
            {service.title}
          </h3>




          {/* Description */}
          <p className="
            text-slate-600
            leading-relaxed
            mb-6
          ">
            {service.description}
          </p>




          {/* Features */}
          <ul className="space-y-3">

            {service.points.map((point, i) => (

              <li
                key={i}
                className="
                  flex
                  items-start
                  gap-3
                  text-slate-700
                "
              >

                <FaCheckCircle
                  className="
                    mt-1
                    flex-shrink-0
                    text-orange-300
                    transition-colors
                    duration-300
                    group-hover:text-orange-500
                  "
                />

                <span>
                  {point}
                </span>

              </li>

            ))}

          </ul>




          {/* Bottom Hover Line */}
          <div
            className="
              absolute
              bottom-0
              left-0
              h-1
              w-0
              bg-orange-500
              transition-all
              duration-500
              group-hover:w-full
            "
          />

        </div>

      ))}

    </div>





    {/* CTA Section */}
    


      

    <div className="mt-20">

  <div
    className="
      flex
      flex-col
      items-center
      justify-center
      text-center
      gap-6
    "
  >

    {/* Text */}
    <div>

      <h3
        className="
          text-3xl
          md:text-4xl
          font-extrabold
          text-slate-900
          mb-3
        "
      >
        Interested in our
        <span className="text-orange-500">
          {" "}services?
        </span>
      </h3>


      <p
        className="
          text-slate-600
          text-lg
        "
      >
        Get a free consultation today.
      </p>

    </div>



    {/* Button */}
    <button
      className="
        px-9
        py-4
        bg-orange-500
        text-white
        font-semibold
        text-lg
        rounded-full
        transition-all
        duration-300
        hover:bg-orange-600
        hover:scale-105
        shadow-lg
      "
    >
      Request a Quote
      <span className="ml-2">
        →
      </span>
    </button>


  </div>

</div>


  </div>
</section>
{/* Portfolio Section */}
<section className="py-24 bg-[#0b1740]">

  <div className="max-w-7xl mx-auto px-6">


    {/* Heading */}
    <div className="text-center mb-16">

      <p
        className="
          inline-block
          px-5
          py-2
          rounded-full
          bg-orange-500/10
          text-orange-400
          font-semibold
          uppercase
          tracking-widest
          text-sm
        "
      >
        Portfolio
      </p>


      <h2
        className="
          mt-6
          text-4xl
          md:text-5xl
          font-extrabold
          text-white
        "
      >
        Electrical
        <span className="text-orange-500">
          {" "}Works
        </span>
      </h2>


      <p
        className="
          mt-6
          text-blue-100/80
          text-lg
          leading-relaxed
          max-w-3xl
          mx-auto
        "
      >
        A glimpse of our high-quality electrical installation and
        engineering projects delivered across Pakistan.
      </p>

    </div>



    {/* Portfolio Cards */}

    <div
      className="grid gap-8  md:grid-cols-2 xl:grid-cols-3">


      {[
        {
          icon: <FaIndustry />,
          title: "MCC & Distribution Panels",
          desc:
            "Motor Control Centers and main distribution panels installed in industrial facilities with precision and safety compliance.",
        },

        {
          icon: <FaBolt />,
          title: "HT Cable Terminations",
          desc:
            "High-tension cable terminations and bus connections using heat-shrink technology in clean-room environments.",
        },

        {
          icon: <FaCogs />,
          title: "Cable Tray & Trunking",
          desc:
            "Complete cable management systems including ladder trays, power busducts and conduit installations.",
        },

      ].map((item, index) => (


        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            bg-white/60
            backdrop-blur-sm
            rounded-3xl
            p-8
            shadow-lg
            border
            border-white/20
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >


          {/* Top Orange Line */}

          <div
            className="
              absolute
              top-0
              left-0
              w-full
              h-1.5
              bg-orange-300
              transition-all
              duration-300
              group-hover:bg-orange-500
            "
          />



          {/* Icon */}

          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-orange-50
              text-orange-300
              flex
              items-center
              justify-center
              text-3xl
              mb-6
              transition-all
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
              text-slate-900
              mb-4
              transition-colors
              duration-300
              group-hover:text-orange-500
            "
          >
            {item.title}
          </h3>



          {/* Description */}

          <p
            className="
              text-slate-600
              leading-relaxed
            "
          >
            {item.desc}
          </p>



          {/* Bottom Hover Line */}

          <div
            className="
              absolute
              bottom-0
              left-0
              h-1
              w-0
              bg-orange-500
              transition-all
              duration-500
              group-hover:w-full
            "
          />


        </div>


      ))}


    </div>


  </div>

</section>

<section className="py-24 bg-orange-500">

  <div className="max-w-7xl mx-auto px-6">


    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        gap-8
      "
    >


      {/* Content */}
      <div className="max-w-3xl">

        <h2
          className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-white
            mb-5
          "
        >
          Have a Project
          <span className="text-[#0b1740]">
            {" "}in Mind?
          </span>
        </h2>


        <p
          className="
            text-white/90
            text-lg
            leading-relaxed
          "
        >
          Our expert team is ready to provide tailored electrical
          engineering solutions for your specific requirements.
        </p>


      </div>




      {/* Button */}
     <button
  className="
    px-9
    py-4
    bg-orange-500
    text-white
    font-semibold
    text-lg
    rounded-xl
    border-2
    border-white
    transition-all
    duration-300
    hover:bg-orange-600
    hover:scale-105
    shadow-lg
  "
>
  Contact Us Today
  <span className="ml-2">
    →
  </span>
</button>


    </div>


  </div>

</section>
<Footer/>
    </>
  );
}