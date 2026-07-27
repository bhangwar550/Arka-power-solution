import React, { useEffect, useState } from "react";

function CursorCircle() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });


  useEffect(() => {

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };


    window.addEventListener("mousemove", mouseMove);


    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);



  return (
    <div
      className="
        fixed
        top-0
        left-0
        pointer-events-none
        z-[9999]
      "
      style={{
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
      }}
    >

      {/* Circle */}
      <div
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          w-10
          h-10
          border-2
          border-orange-500
          rounded-full
        "
      >
      </div>


      {/* Dot (Arrow Point) */}
      <div
        className="
          absolute
          -translate-x-1/2
          -translate-y-1/2
          w-2
          h-2
          bg-orange-500
          rounded-full
        "
      >
      </div>


    </div>
  );
}


export default CursorCircle;