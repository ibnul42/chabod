import React from "react"
import { Route, Routes } from "react-router-dom"
import Contact from "../../Pages/Contact"
import Home from "../../Pages/Home"

const Index = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Index
