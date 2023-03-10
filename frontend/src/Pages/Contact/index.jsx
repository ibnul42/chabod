import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import {
  createPrayer,
  getContacts,
  reset,
} from "../../features/client/clientSlice"
const contactList = [
  {
    name: "Rev. Laru Goerts, President",
    address: "Bismarch, North Dakota",
    mail: "goertz34@mail.co",
  },
  {
    name: "Sam. Jordan, Vice President",
    address: "Downhill, North Dakota",
    mail: "samj@mail.co",
  },
  {
    name: "M. Larutarez, Chancellor",
    address: "Bismarch, North Dakota",
    mail: "martlz@mail.co",
  },
  {
    name: "Rev. Laru Goerts, President",
    address: "Bismarch, North Dakota",
    mail: "goertz34@mail.co",
  },
]

const Contact = () => {
  const form = useRef()
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const { firstName, lastName, email, phone, message } = inputValue

  const {
    contacts,
    message: sliceMessage,
    isCreatedPrayer,
  } = useSelector((state) => state.client)

  useEffect(() => {
    if (isCreatedPrayer) {
      toast.success(sliceMessage.message)
      setInputValue({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
      dispatch(reset())
    }
    if (!contacts) {
      dispatch(getContacts())
    }
  }, [isCreatedPrayer, contacts])

  const onChange = (e) => {
    const { name, value } = e.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (firstName.trim().length < 1) {
      toast.warning(`Please enter first name`)
    } else if (lastName.trim().length < 1) {
      toast.warning(`Please enter last name`)
    } else if (email.trim().length < 1) {
      toast.warning(`Please enter email`)
    } else if (message.trim().length > 1000) {
      toast.warning(`Message should be less than 1000 characters`)
    } else {
      // await emailjs
      //   .sendForm(
      //     "service_jr7wf7h",
      //     "template_6ddddpd",
      //     form.current,
      //     "haqfaIlGVxw0IJOi2"
      //   )
      //   .then(
      //     () => {
      dispatch(createPrayer(inputValue))
      //   },
      //   (error) => {
      //     console.log(error.text)
      //   }
      // )
      // dispatch(createPrayer(inputValue))
    }
  }
  return (
    <div className="px-3">
      <h1 className="text-primary text-3xl font-bold my-8 capitalize">
        Contact us
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {contacts &&
          contacts.map((item, index) => (
            <div key={index} className="my-3 px-3">
              <p className="text-primary text-xl font-bold my-2 capitalize">
                {item.name}
              </p>
              <p>{item.address}</p>
              <p>Email: {item.email}</p>
            </div>
          ))}
      </section>
      <div className="py-10 px-6 sm:px-5 lg:col-span-2">
        <h3 className="text-primary text-xl font-bold my-2 uppercase">
          Send us a message
        </h3>
        <form
          action="#"
          ref={form}
          onSubmit={onSubmit}
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-warm-gray-900"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={onChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={onChange}
                autoComplete="family-name"
                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                autoComplete="email"
                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-warm-gray-900"
              >
                Phone
              </label>
              <span id="phone-optional" className="text-sm text-warm-gray-500">
                Optional
              </span>
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                value={phone}
                onChange={onChange}
                autoComplete="tel"
                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border"
                aria-describedby="phone-optional"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-warm-gray-900"
              >
                Your Prayer or Praise
              </label>
              <span id="message-max" className="text-sm text-warm-gray-500">
                {inputValue.message.length} / 1000 characters
              </span>
            </div>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={onChange}
                rows={4}
                className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500 border"
                aria-describedby="message-max"
                // defaultValue={""}
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-6 rounded-full capitalize transition duration-300 transform hover:bg-hover"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
