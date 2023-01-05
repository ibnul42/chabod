import React from "react"
import { Route, Routes } from "react-router-dom"
import AboutUs from "../../Pages/AboutUs"
import Contact from "../../Pages/Contact"
import Home from "../../Pages/Home"
import Revival from "../../Pages/Revival"

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/revival" element={<Revival />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default Index
