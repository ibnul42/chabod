import React from "react"

const Index = () => {
  return (
    <div className="bg-primary text-white py-5">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex flex-col gap-3">
          <div className="flex gap-5">
            <img src="/icons/phone.svg" alt="" />
            <p>701-391-0931</p>
          </div>
          <div className="flex gap-5">
            <img src="/icons/mail.svg" alt="" />
            <p>example@mail.com</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white my-4"></div>
      <div className="">
        <p className="text-center">
          &copy; 2018-2022 Revival Prayer Fellowship. All Rights Reserved.
          Website by Creativebase8
        </p>
      </div>
    </div>
  )
}

export default Index
