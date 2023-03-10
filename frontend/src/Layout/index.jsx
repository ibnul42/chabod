import React from "react"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

const Index = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Index
