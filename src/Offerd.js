import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBolt,
  FaArrowRight,
  FaCog,
  FaPlug,
  FaMicrochip,
  FaCogs,
  FaSun
} from "react-icons/fa";


export default function Services() {

const navigate= useNavigate();
const services = [

  {
    icon:<FaBolt />,
    title:"HT & LT Electrical Installations",
    desc:"High and low tension installations for industrial, commercial and infrastructure projects."
  },

  {
    icon:<FaCog />,
    title:"Power Distribution Systems",
    desc:"End-to-end power distribution ensuring reliable and efficient power delivery."
  },

  {
    icon:<FaPlug />,
    title:"Industrial & Commercial Wiring",
    desc:"Professional wiring solutions for industrial plants and commercial buildings."
  },

  {
    icon:<FaMicrochip />,
    title:"Building Management Systems (BMS)",
    desc:"Smart building automation for efficient monitoring and control."
  },

  {
    icon:<FaCogs />,
    title:"Automation & Control Panels (PLC/SCADA)",
    desc:"PLC programming, SCADA integration and MCC panel fabrication."
  },

  {
    icon:<FaSun />,
    title:"Solar Power & Renewable Energy",
    desc:"Complete solar PV system design, supply and installation."
  }

];



return (

<section className="
relative
py-20
min-h-screen
bg-[#0b1740]
overflow-hidden
">


<style>{`

@keyframes floatUp {

0%{
transform:translateY(100px) scale(0.8);
opacity:0;
}

50%{
opacity:.7;
}

100%{
transform:translateY(-700px) scale(1.2);
opacity:0;
}

}

`}</style>





{/* Background Grid */}

<div
className="absolute inset-0 opacity-20"
style={{

backgroundImage:`
linear-gradient(#8ba4d8 1px, transparent 1px),
linear-gradient(90deg,#8ba4d8 1px,transparent 1px)
`,

backgroundSize:"60px 60px"

}}
></div>






{/* Floating Bubbles */}

<div className="
absolute
inset-0
overflow-hidden
pointer-events-none
">


{

[
["left-[10%]","w-5 h-5","bg-blue-400/30","5s"],
["left-[25%]","w-8 h-8","bg-orange-500/30","7s"],
["left-[45%]","w-4 h-4","bg-blue-300/40","4s"],
["left-[65%]","w-10 h-10","bg-blue-500/20","8s"],
["left-[80%]","w-6 h-6","bg-orange-400/30","6s"],
["left-[90%]","w-3 h-3","bg-blue-300/40","5s"]

].map((bubble,index)=>(


<div

key={index}

className={`
absolute
bottom-0
${bubble[0]}
${bubble[1]}
${bubble[2]}
rounded-full
`}

style={{
animation:`floatUp ${bubble[3]} linear infinite`
}}

></div>


))


}


</div>







<div className="
relative
z-10
max-w-7xl
mx-auto
px-6
">






{/* Heading */}

<div className="text-center mb-14">


<p className="
text-orange-500
uppercase
tracking-widest
font-semibold
">

Our Services

</p>



<h2 className="
text-4xl
md:text-5xl
font-bold
text-white
mt-3
">

Electrical Engineering Solutions

</h2>


</div>







{/* Cards */}

<div className="
grid
md:grid-cols-3
gap-8
">


{

services.map((service,index)=>(


<div

key={index}

className="
bg-white/10
border
border-blue-300/20
p-8
rounded-2xl
transition
duration-300
group
hover:bg-blue-900/40
hover:border-orange-500/50
hover:-translate-y-2
hover:shadow-xl
"


>






{/* Icon */}

<div

className="
w-14
h-14
rounded-xl
bg-orange-500/10
border
border-orange-500/40
flex
items-center
justify-center
text-orange-500
text-xl
mb-6
group-hover:bg-orange-500
group-hover:text-white
transition
duration-300
"

>

{service.icon}

</div>







<h3 className="
text-xl
font-bold
text-white
mb-4
">

{service.title}

</h3>






<p className="
text-blue-100
leading-relaxed
">

{service.desc}

</p>







<button

className="
mt-6
flex
items-center
gap-3
text-orange-500
font-semibold
group-hover:text-white
transition
"

>

Learn More

<FaArrowRight />

</button>




</div>


))


}


</div>








{/* Bottom Button */}

<div className="text-center mt-14">


<button

className="
bg-orange-500
hover:bg-orange-600
text-white
px-10
py-4
rounded-lg
font-bold
transition
duration-300
hover:-translate-y-1" onClick={() => navigate("/service")}>

View All Services

</button>


</div>





</div>


</section>


);


}