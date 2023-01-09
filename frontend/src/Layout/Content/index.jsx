import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { logout, reset } from "../../features/auth/authSlice"
import AboutUs from "../../Pages/AboutUs"
import Dashboard from "../../Pages/Admin/Dashboard"
import Profile from "../../Pages/Admin/Profile"
import Contact from "../../Pages/Contact"
import Home from "../../Pages/Home"
import Login from "../../Pages/Login"
import Revival from "../../Pages/Revival"

const adminLinks = [{ titile: "Profile", path: "/admin/profile" }]

const Index = () => {
  const [adminPanel, setAdminPanel] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    // if (!user) {
    //   navigate("/login")
    // }
    if (user && location.pathname.toString().includes("/admin")) {
      setAdminPanel(true)
    }
    if (!location.pathname.toString().includes("/admin")) {
      setAdminPanel(false)
    }
  }, [location, user, dispatch, navigate, location])

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }
  return (
    <div
      className={`${
        adminPanel ? "w-screen grid grid-cols-12" : "max-w-7xl"
      } mx-auto h-full`}
    >
      {adminPanel && (
        <div className="col-span-2 border-r-2 bg-rose-100 border-rose-500 flex flex-col h-full">
          <div className="flex flex-col">
            {adminLinks &&
              adminLinks.map((item, index) => (
                <Link
                  key={index}
                  className="bg-rose-700 hover:bg-rose-900 py-3 text-white px-3 font-medium"
                  to={item.path}
                >
                  {item.titile}
                </Link>
              ))}
          </div>
          <div className="h-full flex flex-col justify-end">
            <Link
              className="bg-white py-3 px-3 font-medium"
              to={"/login"}
              onClick={onLogout}
            >
              Logout
            </Link>
          </div>
        </div>
      )}
      <div className={`${adminPanel ? "col-span-10" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/revival" element={<Revival />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default Index
