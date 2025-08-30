import React from "react";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function App(){
  return(
    <>
    <Navbar/>
    <div>Hello</div>
    <p className="font-bold text-black">Bold</p>
    <Faq/>
    <Footer/>
    </>
  )
}