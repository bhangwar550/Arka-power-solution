import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
export default function Contact_us() {
  return (
    <>

      <section className="relative min-h-[450px] overflow-hidden bg-[#0b1740] text-white">


        {/* Animated Orange Bubble */}
        <div
          className="
            absolute
            right-[-100px]
            top-[-150px]
            w-[500px]
            h-[500px]
            bg-orange-500/20
            rounded-full
            animate-bounce
            [animation-duration:6s]
          "
        />


        {/* Animated Blue Bubble */}
        <div
          className="
            absolute
            left-[-120px]
            bottom-[-150px]
            w-[400px]
            h-[400px]
            bg-blue-400/20
            rounded-full
            animate-bounce
            [animation-duration:8s]
          "
        />


        {/* Extra Moving Bubble */}
        <div
          className="
            absolute
            right-[25%]
            bottom-[-100px]
            w-72
            h-72
            bg-orange-400/10
            rounded-full
            animate-pulse
          "
        />



        {/* Content */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            px-6
            py-24
          "
        >

          <div className="max-w-3xl">


            <p
              className="
                text-orange-500
                uppercase
                tracking-widest
                font-semibold
                text-sm
                mb-5
              "
            >
              Get In Touch
            </p>



            <h1
              className="
                text-5xl
                md:text-6xl
                font-extrabold
                mb-6
              "
            >
              Contact
              <span className="text-orange-500">
                {" "}Us
              </span>
            </h1>



            <p
              className="
                text-blue-100/80
                text-lg
                leading-relaxed
                max-w-2xl
              "
            >
              Have a project in mind? We'd love to hear from you.
              Our team will respond within 24 hours.
            </p>



            {/* Breadcrumb */}

            <div
              className="
                flex
                gap-3
                mt-8
                text-sm
                text-blue-200
              "
            >

              <span>
                Home
              </span>

              <span>
                /
              </span>

              <span className="text-orange-500">
                Contact Us
              </span>

            </div>


          </div>


        </div>


      </section>
<section className="py-16 bg-orange-500">

  <div className="max-w-7xl mx-auto px-6">


    {/* Cards */}
    <div
      className="
        grid
        md:grid-cols-3
        gap-6
      "
    >


      {/* Office */}
      <div
        className="
          group
          flex
          items-center
          gap-5
          bg-white/30
          backdrop-blur-sm
          rounded-2xl
          p-6
          border
          border-white/30
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          transition-all
          duration-300
        "
      >

        <div
          className="
            w-14
            h-14
            flex-shrink-0
            rounded-xl
            bg-orange-100
            text-orange-500
            flex
            items-center
            justify-center
            text-2xl
            group-hover:bg-orange-500
            group-hover:text-white
            transition-all
            duration-300
          "
        >
          📍
        </div>


        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Our Office
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            House No 54-B, Sachal Goth, Karachi
          </p>
        </div>


      </div>





      {/* Call */}
      <div
        className="
          group
          flex
          items-center
          gap-5
          bg-white/30
          backdrop-blur-sm
          rounded-2xl
          p-6
          border
          border-white/30
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          transition-all
          duration-300
        "
      >

        <div
          className="
            w-14
            h-14
            flex-shrink-0
            rounded-xl
            bg-orange-100
            text-orange-500
            flex
            items-center
            justify-center
            text-2xl
            group-hover:bg-orange-500
            group-hover:text-white
            transition-all
            duration-300
          "
        >
          ☎
        </div>


        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Call Us
          </h3>

          <p className="text-slate-600 text-sm">
            +92 313 3389481
          </p>
        </div>


      </div>





      {/* Email */}
      <div
        className="
          group
          flex
          items-center
          gap-5
          bg-white/30
          backdrop-blur-sm
          rounded-2xl
          p-6
          border
          border-white/30
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          transition-all
          duration-300
        "
      >

        <div
          className="
            w-14
            h-14
            flex-shrink-0
            rounded-xl
            bg-orange-100
            text-orange-500
            flex
            items-center
            justify-center
            text-2xl
            group-hover:bg-orange-500
            group-hover:text-white
            transition-all
            duration-300
          "
        >
          ✉
        </div>


        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Email Us
          </h3>

          <p className="text-slate-600 text-sm break-all">
            manthar.bhangwar@arkapowersolution.com
          </p>
        </div>


      </div>


    </div>


  </div>

</section>


<section className="py-24 bg-slate-50">

  <div className="max-w-7xl mx-auto px-6">


    {/* Heading */}
    <div className="text-center mb-16">

      <p
        className="
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
        "
      >
        Corporate Office
      </p>


      <h2
        className="
          mt-6
          text-4xl
          md:text-5xl
          font-extrabold
          text-slate-900
        "
      >
        Let's Start a
        <span className="text-orange-500">
          {" "}Conversation
        </span>
      </h2>

    </div>



    <div
      className="
        grid
        lg:grid-cols-2
        gap-10
      "
    >


      {/* Contact Information */}

      <div
        className="
          bg-white
          rounded-3xl
          p-8
          md:p-10
          shadow-lg
          border
          border-slate-200
        "
      >

        <h3
          className="
            text-3xl
            font-bold
            text-slate-900
            mb-8
          "
        >
          Office Address
        </h3>



        <div className="space-y-7">


          {/* Address */}
          <div className="flex gap-5 items-start">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#0b1740]
                text-orange-500
                flex
                items-center
                justify-center
                text-xl
                flex-shrink-0
              "
            >
              <FaMapMarkerAlt />
            </div>


            <div>
              <h4 className="font-bold text-orange-500">
                Office Address
              </h4>

              <p className="text-slate-600 mt-1 leading-relaxed">
                House No 54-B Shahmeer Residency, Near Makhdoom
                Bilawal Society, Sachal Goth, Karachi, Pakistan
              </p>
            </div>

          </div>




          {/* Phone */}
          <div className="flex gap-5 items-center">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#0b1740]
                text-orange-500
                flex
                items-center
                justify-center
                text-xl
                flex-shrink-0
              "
            >
              <FaPhoneAlt />
            </div>


            <div>
              <h4 className="font-bold text-orange-500">
                Phone Number
              </h4>

             <p className="text-slate-600 mt-1">
  <a
    href="https://wa.me/923133389481"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-500 transition"
  >
    +92 313 3389481
  </a>
</p>
            </div>

          </div>





          {/* Email */}
          <div className="flex gap-5 items-center">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#0b1740]
                text-orange-500
                flex
                items-center
                justify-center
                text-xl
                flex-shrink-0
              "
            >
              <FaEnvelope />
            </div>


            <div>
              <h4 className="font-bold text-orange-500">
                Email Address
              </h4>

              <p className="text-slate-600 mt-1 break-all">
  <a
    href="mailto:manthar.bhangwar@arkapowersolution.com"
    className="hover:text-orange-500 transition"
  >
    manthar.bhangwar@arkapowersolution.com
  </a>
</p>
            </div>

          </div>





          {/* Business Hours */}
          <div className="flex gap-5 items-center">

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#0b1740]
                text-orange-500
                flex
                items-center
                justify-center
                text-xl
                flex-shrink-0
              "
            >
              <FaClock />
            </div>


            <div>
              <h4 className="font-bold text-orange-500">
  Business Hours
</h4>

              <p className="text-slate-600 mt-1">
                Mon–Sat: 9:00 AM – 6:00 PM
              </p>
            </div>

          </div>



        </div>


      </div>





      {/* Form */}

      <div
        className="
          bg-white
          rounded-3xl
          p-8
          md:p-10
          shadow-lg
          border
          border-slate-200
        "
      >

        <h3
          className="
            text-3xl
            font-bold
            text-slate-900
            mb-3
          "
        >
          Send a
          <span className="text-orange-500">
            {" "}Message
          </span>
        </h3>


        <p className="text-slate-600 mb-8">
          Fill the form below and we'll respond within 24 hours
        </p>


        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name *"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
          />


          <input
            type="email"
            placeholder="Email *"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
          />


          <input
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
          />


          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
          />


          <textarea
            rows="4"
            placeholder="Tell us about your project or inquiry..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-orange-500 outline-none"
          />


          <button
            className="
              w-full
              py-4
              bg-orange-500
              text-white
              font-semibold
              rounded-xl
              hover:bg-orange-600
              transition-all
            "
          >
            Send Message →
          </button>


        </div>


      </div>


    </div>


  </div>

</section>
    </>
  );
}