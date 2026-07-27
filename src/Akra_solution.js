import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProgressBar({ name, percent }) {

  const [width, setWidth] = useState(0);


  useEffect(() => {

    const timer = setTimeout(() => {
      setWidth(parseInt(percent));
    }, 300);


    return () => clearTimeout(timer);

  }, [percent]);


  return (

    <div>

      <div className="flex justify-between mb-2">

        <h3 className="font-semibold text-[#0b1740]">
          {name}
        </h3>

        <span className="font-bold text-orange-500">
          {percent}
        </span>

      </div>


      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        <div
          className="
          h-3
          bg-orange-500
          rounded-full
          transition-all
          duration-[1500ms]
          ease-out
          "
          style={{
            width:`${width}%`
          }}
        ></div>


      </div>


    </div>

  );

}





export default function Akra_solution(){

 const navigate = useNavigate();
const skills=[

{
name:"Electrical Installations",
percent:"95%"
},

{
name:"Power Distribution",
percent:"90%"
},

{
name:"Automation & BMS",
percent:"85%"
},

{
name:"Solar & Renewables",
percent:"80%"
}

];



return (

<section className="py-16 bg-white">



<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-stretch
">





{/* LEFT SIDE */}


<div className="
bg-gray-50
p-8
rounded-2xl
flex
flex-col
justify-between
h-full
">



{/* Progress Bars */}

<div className="space-y-4">


{
skills.map((skill,index)=>(

<ProgressBar

key={index}

name={skill.name}

percent={skill.percent}

/>

))

}


</div>







{/* About Company */}


<div className="mt-8">


<p className="
text-orange-500
font-semibold
uppercase
tracking-widest
text-sm
">
About The Company
</p>



<h2 className="
mt-3
text-4xl
font-bold
text-[#0b1740]
">
ARKA Power Solutions
</h2>



<p className="
mt-4
text-gray-600
leading-relaxed
">

Founded in September 2025, ARKA Power Solutions powers progress through
electrical projects for commercial, industrial, and infrastructure clients.

</p>



<p className="
mt-3
text-gray-600
leading-relaxed
">

Safety, precision, and client satisfaction are central to everything we do.

</p>




<button

className="
mt-5
bg-orange-500
hover:bg-orange-600
text-white
px-8
py-3
rounded-lg
font-semibold
transition
"
onClick={() => navigate("/about")}
>
Learn More
</button>


</div>



</div>









{/* RIGHT SIDE */}


<div className="
flex
flex-col
justify-between
space-y-8
h-full
">





{/* Vision */}

<div className="
bg-[#0b1740]
p-8
rounded-2xl
text-white
flex-1
">


<h2 className="
text-3xl
font-bold
text-orange-500
mb-5
">
Vision
</h2>



<p className="
text-blue-100
leading-relaxed
">

To be Pakistan's most trusted and innovative provider of electrical
engineering solutions that power sustainable growth.

</p>



</div>









{/* Mission */}

<div className="
bg-gray-50
border
p-8
rounded-2xl
flex-1
">


<h2 className="
text-3xl
font-bold
text-[#0b1740]
mb-5
">
Mission
</h2>



<ul className="
space-y-4
text-gray-600
">


<li>
✓ Design & deliver safe, efficient, future-ready electrical systems.
</li>


<li>
✓ End-to-end solutions with precision and integrity.
</li>


<li>
✓ Partner of choice for high-quality project execution.
</li>


</ul>



</div>





</div>







</div>



</section>


);


}