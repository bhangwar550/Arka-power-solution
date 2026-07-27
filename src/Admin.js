import React from "react";
import { useNavigate } from "react-router-dom";
export default function Admin() {
      const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-[#0b1740] flex items-center justify-center px-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">


        {/* Left Content */}
        <div className="text-white">


         <img
  src={`${import.meta.env.BASE_URL}images/logo-full-dark.png`}
  alt="ARKA Power Solutions"
  className="
    h-14
    w-auto
    object-contain
    cursor-pointer
    mb-3
  "
/>


          <p
            className="
              text-orange-500
              text-base
              font-semibold
              mb-4
            "
          >
            Solutions
          </p>



          <h1
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              leading-tight
              mb-5
            "
          >
            Powering Progress
            <span className="text-orange-500">
              {" "}Through Excellence
            </span>
          </h1>



          <p
            className="
              text-blue-100/80
              text-base
              leading-relaxed
              max-w-lg
              mb-6
            "
          >
            ARKA Power Solutions is an emerging electrical engineering
            solutions provider delivering safe, efficient, and future-ready
            electrical systems.
          </p>




          <div className="space-y-2 text-sm md:text-base">


            <p>
              ✓ HT & LT Electrical Installations
            </p>


            <p>
              ✓ Power Distribution Systems
            </p>


            <p>
              ✓ Solar Power & Renewable Energy
            </p>


            <p>
              ✓ Automation & Control Panels (PLC/SCADA)
            </p>


          </div>


        </div>







        {/* Login Card */}

        <div
          className="
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            rounded-3xl
            p-8
            md:p-10
            shadow-2xl
          "
        >


          <h2
            className="
              text-3xl
              font-bold
              text-white
              mb-3
            "
          >
            Admin Login
          </h2>



          <p
            className="
              text-blue-100/80
              mb-8
            "
          >
            Sign in to access the admin panel
          </p>




          <div className="space-y-5">


            {/* Email */}

            <div>

              <label className="text-white font-medium">
                Email Address
              </label>


              <input
                type="email"
                placeholder="admin@arkapower.com"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  rounded-xl
                  bg-white/90
                  text-slate-900
                  outline-none
                  focus:ring-2
                  focus:ring-orange-500
                "
              />


            </div>






            {/* Password */}

            <div>

              <label className="text-white font-medium">
                Password
              </label>


              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full
                  mt-2
                  px-4
                  py-3
                  rounded-xl
                  bg-white/90
                  text-slate-900
                  outline-none
                  focus:ring-2
                  focus:ring-orange-500
                "
              />


            </div>






            {/* Button */}

            <button
              className="
                w-full
                py-4
                bg-orange-500
                text-white
                font-semibold
                text-lg
                rounded-xl
                transition-all
                duration-300
                hover:bg-orange-600
                hover:scale-105
                shadow-lg
              "
            >
              Sign In
            </button>





            <button
  onClick={() => navigate("/")}
  className="
    w-full
    text-white
    mt-3
    hover:text-orange-500
    transition
  "
>
  ← Back to Website
</button>


          </div>


        </div>



      </div>


    </section>
  );
}