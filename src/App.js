import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import CursorCircle from "./CursorCircle";
import Header from "./Header";
import Akra_solution from "./Akra_solution";
import Offerd from "./Offerd";
import Work from "./Work";
import Gallery from "./Gallery";
import Arka_power from "./Arka_power";
import Trusted from "./Trusted";
import Core_value from "./Core_value";
import Next_project from "./Next_project";
import Footer from "./Footer";
import About from "./About";
import Service from "./Service";
import Contact_us from "./Contact_us";
import Admin from "./Admin";




function Home() {
  return (
    <>
      <Header />
      <Akra_solution />
      <Offerd />
      <Work />
      <Gallery />
      <Arka_power />
      <Trusted />
      <Core_value />
      <Next_project />
      <Footer />
         
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <CursorCircle />

      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/Service" element={<Service />} />
       <Route path="/contact" element={<Contact_us />} />
       <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}


export default App;