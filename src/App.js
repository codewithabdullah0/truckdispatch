// import logo from './logo.svg';
// import './App.css';

import About from "./Component/About";
import Home from "./Component/Home";
import Kamil from "./Component/Kamil";
import Kevin from "./Component/Kevin";
import Navbar from "./Component/Navbar";
import TruckDispatch from "./Component/TruckDispatch";
import Contact from "./Component/Contact";
import Billing from "./Component/Billing";
import Document from "./Component/Document";
import Rate from "./Component/Rate";
import Safety from "./Component/Safety";
import Factoring from "./Component/Factoring";

import IFTA from "./Component/IFTA";
import Company from "./Component/Company";



import Footer from "./Component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from './Component/ScrollTop.js' 
import DryVan from "./Component/DryVan";
import Straighttruck from "./Component/Straighttruck";
import BoxTruck from "./Component/BoxTruck";
import Power from "./Component/Power";
import Hotshot from "./Component/Hotshot";
import Reefer from "./Component/Reefer";
import FlatBed from "./Component/FlatBed";
import StepDeck from "./Component/StepDeck";
import Howtostart from "./Component/Howtostart";
import Shippers from "./Component/Shippers";
// import callbutton from "./Component/callbutton.js";
import Callbtn from "./Component/Callbtn.js";
import ScrollToTop from "react-scroll-to-top";





function App() {
  return (
    <div>



      <BrowserRouter>
        <ScrollToTop smooth color="#fff" width='20' height='20' />
        <ScrollTop></ScrollTop>
        <Navbar></Navbar>
        <Callbtn></Callbtn>
        {/* <callbutton></callbutton/> */}
        

        <Routes>

          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/kamil" element={<Kamil></Kamil>} />
          <Route path="/kevin" element={<Kevin></Kevin>} />
          <Route path="/truck-dispatch" element={<TruckDispatch></TruckDispatch>} />
          <Route path="/billing" element={<Billing></Billing>} />
          <Route path="/document-management" element={<Document></Document>} />
          <Route path="/rate-negotiation" element={<Rate></Rate>} />
          <Route path="/safety&dot-compliance" element={<Safety></Safety>} />
          <Route path="/ifta-reporting" element={<IFTA></IFTA>} />
          <Route path="/factoring-service" element={<Factoring></Factoring>} />
          <Route path="/company-formation" element={<Company></Company>} />
          <Route path="/dry-van" element={<DryVan></DryVan>} />
          <Route path="/step-deck" element={<StepDeck></StepDeck>} />

          <Route path="/reefer" element={<Reefer></Reefer>} />

          <Route path="/flat-bed" element={<FlatBed></FlatBed>} />
          <Route path="/straight-truck" element={<Straighttruck></Straighttruck>} />

          <Route path="/box-truck" element={<BoxTruck></BoxTruck>} />

          <Route path="/power-only" element={<Power></Power>} />
          <Route path="/hotshot-truck" element={<Hotshot></Hotshot>} />
          <Route path="/how-to-start" element={<Howtostart></Howtostart>} />
          <Route path="/shippers" element={<Shippers></Shippers>} />




       
          


          <Route path="/contact" element={<Contact></Contact>} />

          


        </Routes>

        <Footer></Footer>
      </BrowserRouter>


      {/* <Navbar></Navbar> */}
      {/* <Home></Home> */}
      {/* <Kamil></Kamil> */}
      {/* <Kevin></Kevin> */}
      {/* <TruckDispatch></TruckDispatch> */}
      {/* <About></About> */}
  
    </div>
  );
}

export default App;
