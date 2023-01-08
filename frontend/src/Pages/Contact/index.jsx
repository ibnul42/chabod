import React from "react"
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
  return (
    <div className="px-3">
      <h1 className="text-primary text-3xl font-bold my-8 capitalize">
        About us
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {contactList &&
          contactList.map((item, index) => (
            <div key={index} className="my-3 px-3">
              <p className="text-primary text-xl font-bold my-2 capitalize">
                {item.name}
              </p>
              <p>{item.address}</p>
              <p>Email: {item.mail}</p>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Contact
