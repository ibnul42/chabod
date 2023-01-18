import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { logout, reset } from "../../features/auth/authSlice"
import AboutUs from "../../Pages/AboutUs"
import AdminEvent from "../../Pages/Admin/AdminEvent"
import CreateAdmin from "../../Pages/Admin/AdminEvent/CreateEvent"
import EditEvent from "../../Pages/Admin/AdminEvent/EditEvent"
import AdminContact from "../../Pages/Admin/Contact"
import CreateContact from "../../Pages/Admin/Contact/CreateContact"
import Prayer from "../../Pages/Admin/Prayer"
import Profile from "../../Pages/Admin/Profile"
import Contact from "../../Pages/Contact"
import Event from "../../Pages/Event"
import Home from "../../Pages/Home"
import Login from "../../Pages/Login"

const adminLinks = [
  { titile: "Profile", path: "/admin/profile" },
  { titile: "Event", path: "/admin/event" },
  { titile: "Contact", path: "/admin/contact" },
  { titile: "Prayer Request", path: "/admin/prayers" },
]

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
      } flex-auto mx-auto w-full`}
    >
      {adminPanel && (
        <div className="col-span-2 border-r bg-white  flex flex-col h-full">
          <div className="flex flex-col">
            {adminLinks &&
              adminLinks.map((item, index) => (
                <Link
                  key={index}
                  className="bg-primary hover:bg-hover py-3 text-white px-3 font-medium"
                  to={item.path}
                >
                  {item.titile}
                </Link>
              ))}
          </div>
          <div className="h-full flex flex-col justify-end">
            <Link
              className="bg-primary py-3 px-3 font-medium hover:bg-hover text-white"
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
          {/* <Route path="/revival" element={<Revival />} /> */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Event />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/event" element={<AdminEvent />} />
          <Route path="/admin/contact" element={<AdminContact />} />
          <Route path="/admin/create-contact" element={<CreateContact />} />
          <Route path="/admin/create-event" element={<CreateAdmin />} />
          <Route path="/admin/edit-event/:id" element={<EditEvent />} />
          <Route path="/admin/prayers" element={<Prayer />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default Index
