import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
const navigate = useNavigate();
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/Service" },
    { name: "Contact", path: "/contact" },
  ];


  return (
    <>

      {/* Navbar */}
      <nav className="
        sticky 
        top-0 
        z-50
        bg-[rgb(14,28,74)] 
        shadow-lg 
        border-t-2 
        border-b-2 
        border-orange-500
      ">


        {/* Top Bar */}
        <div className="bg-[rgb(14,28,74)] text-white text-sm">

          <div className="
            max-w-7xl 
            mx-auto 
            px-6 
            py-3 
            flex 
            flex-wrap 
            justify-between 
            items-center 
            gap-3
          ">


            <div className="flex flex-wrap gap-6">


              <span>
                🏠 House No 54-B, Sachal Goth, Karachi
              </span>



              <a
                href="https://wa.me/923133389481"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition duration-300"
              >
                📞 +92 313 3389481
              </a>



              <a
                href="mailto:manthar.bhangwar@arkapowersolution.com"
                className="hover:text-orange-500 transition duration-300"
              >
                ✉️ manthar.bhangwar@arkapowersolution.com
              </a>


            </div>



            <div>

              <span className="hover:text-orange-500 transition duration-300">
                🕘 Mon–Sat: 9:00 AM – 6:00 PM
              </span>

            </div>


          </div>

        </div>





        {/* Main Navbar */}

        <div className="max-w-7xl mx-auto px-6">


          <div className="flex justify-between items-center h-20">


            {/* Logo */}

            <div className="flex items-center">

              <img
                src={`${import.meta.env.BASE_URL}images/logo-full-dark.png`}
                alt="ARKA Power Solutions"
                className="h-14 w-auto object-contain cursor-pointer"
              />

            </div>






            {/* Menu */}

            <ul className="
              hidden 
              md:flex 
              items-center 
              space-x-8 
              text-white 
              font-medium
            ">


              {menuItems.map((item) => (

                <li key={item.path}>


                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>

                      `
                      relative
                      py-7
                      block
                      transition
                      duration-300

                      ${
                        isActive
                        ? "text-orange-500"
                        : "hover:text-orange-500"
                      }
                      `
                    }
                  >


                    {({ isActive }) => (

                      <>

                        {item.name}



                        {/* Active Orange Line */}

                        <span
                          className={`
                            absolute
                            left-0
                            bottom-0
                            h-[3px]
                            bg-orange-500
                            transition-all
                            duration-500

                            ${
                              isActive
                              ? "w-full"
                              : "w-0"
                            }
                          `}
                        ></span>


                      </>

                    )}


                  </NavLink>


                </li>

              ))}






              {/* Quote Button */}

              <li>
  <button
    onClick={() => navigate("/contact")}
    className="
      bg-white
      text-[rgb(14,28,74)]
      px-5
      py-2
      rounded-lg
      font-semibold
      hover:bg-orange-500
      hover:text-white
      transition
      duration-300
    "
  >
    Get a Quote
  </button>
</li>






              {/* Admin Button */}

              <li>


                <NavLink
                  to="/admin"
                  className="
                    border
                    border-white
                    px-5
                    py-2
                    rounded-lg
                    hover:bg-white
                    hover:text-[rgb(14,28,74)]
                    transition
                    duration-300
                  "
                >
                  Admin
                </NavLink>


              </li>



            </ul>



          </div>


        </div>



      </nav>


    </>
  );
}


export default Navbar;