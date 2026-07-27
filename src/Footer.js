import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaArrowRight
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1740] text-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">


          {/* Company */}
          <div>

            <div className="flex items-center gap-3">

              <img
                src={`${import.meta.env.BASE_URL}images/logo-full-dark.png`}
                alt="ARKA Power Solutions"
                className="h-14 w-auto object-contain cursor-pointer"
              />

            </div>



            <p className="text-gray-300 mt-4 leading-7">
              An emerging electrical engineering solutions provider delivering
              high-performance services with innovation, safety, and quality.
            </p>



            <div className="flex gap-3 mt-6">

              {[FaFacebookF, FaLinkedinIn, FaYoutube, FaTwitter].map(
                (Icon, index) => (

                <a
                  key={index}
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    hover:bg-orange-500
                    transition
                    duration-300
                    cursor-pointer
                  "
                >
                  <Icon />
                </a>

              ))}

            </div>


          </div>






          {/* Services */}
          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-5
                text-orange-400
                border-l-4
                border-orange-500
                pl-3
              "
            >
              Services
            </h3>


            <ul className="space-y-3 text-gray-300">

              {[
                "HT & LT Electrical Installations",
                "Power Distribution Systems",
                "Building Management Systems",
                "Automation & Control Panels",
                "Solar Power Solutions",
                "Earthing & Lightning Protection",
              ].map((item,index)=>(

                <li
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-orange-400
                    transition
                  "
                >

                  <FaArrowRight className="text-orange-500 text-xs"/>

                  {item}

                </li>

              ))}

            </ul>

          </div>








          {/* Quick Links */}
          <div>

            <h3
              className="
                text-xl
                font-bold
                mb-5
                text-orange-400
                border-l-4
                border-orange-500
                pl-3
              "
            >
              Quick Links
            </h3>



            <ul className="space-y-3 text-gray-300">


              <li>

                <a
                  href="/#home"
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-orange-400
                    transition
                  "
                >

                  <FaArrowRight className="text-orange-500 text-xs"/>

                  Home

                </a>

              </li>




              <li>

                <Link
                  to="/about"
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-orange-400
                    transition
                  "
                >

                  <FaArrowRight className="text-orange-500 text-xs"/>

                  About Us

                </Link>

              </li>





              <li>

                <Link
                  to="/Service"
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-orange-400
                    transition
                  "
                >

                  <FaArrowRight className="text-orange-500 text-xs"/>

                  Our Services

                </Link>

              </li>





              <li>

                <Link
                  to="/contact"
                  className="
                    flex
                    items-center
                    gap-2
                    hover:text-orange-400
                    transition
                  "
                >

                  <FaArrowRight className="text-orange-500 text-xs"/>

                  Contact Us

                </Link>

              </li>


            </ul>


          </div>









          {/* Contact */}
          <div>


            <h3
              className="
                text-xl
                font-bold
                mb-5
                text-orange-400
                border-l-4
                border-orange-500
                pl-3
              "
            >
              Contact Us
            </h3>



            <p className="text-gray-300 leading-7">

              House No 54-B Shahmeer Residency,
              Near Makhdoom Bilawal Society,
              Sachal Goth, Karachi

            </p>



            <p className="mt-4 text-orange-400">
              +92 313 3389481
            </p>



            <p className="text-gray-300 mt-2 break-all">
              manthar.bhangwar@arkapowersolution.com
            </p>


          </div>



        </div>







        {/* Bottom */}

        <div
          className="
            border-t
            border-white/20
            mt-12
            pt-6
            text-center
            text-gray-300
          "
        >

          <p>
            © 2026 ARKA Power Solutions (Pvt.) Ltd. All rights reserved.
          </p>


          <p className="mt-2">
            Founded September 2025 · Karachi, Pakistan
          </p>


        </div>


      </div>


    </footer>
  );
}