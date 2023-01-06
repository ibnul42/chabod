import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const timeline = [
  {
    title: "our mission",
    desc: "To stimulate an awareness of the necessity for prayer in the revival of the Church of Jesus Christ.",
  },
  {
    title: "our background",
    desc: "Revival Prayer Fellowship was birthed in the heart of Armin Gesswein in 1931 while pastoring a Lutheran church in Long Island, New York. When the Holy Spirit brought revival to his congregation, God called him into the minis-try of revival prayer. This burden led Armin to be involved in the great revival of Norway. Upon returning to America, he spent 65 years speaking at evangelistic crusades, semi-nars, churches, conferences and camps on prayer and revival. Armin went to be with the Lord in 2001 at the age of 93. At that time the RPF board passed the mantel on to Rev. LaRue Goetz.",
  },
  {
    title: "our vision",
    desc: "To see and facilitate genuine revival in the churches of Jesus Christ.",
  },
]

const activities = [
  {
    title: "Pastors/ Spouses",
    desc: "To minister hope, encouragement and per-sonal revival through Prayer Retreats and to form local clergy prayer groups.",
  },
  {
    title: "Local Church",
    desc: "To encourage a vision for prayer by training leaders in our Schools of Prayer.",
  },
  {
    title: "Students-Colleges",
    desc: "To work together with campus ministries, lifting up the value of prayer among stu-dents who will reach a lost world.",
  },
  {
    title: "Missions",
    desc: "To minister to missionaries, encouraging them in prayer and partnering with others. To minister to nationals through Schools of Prayer or Prayer Summits in cooperation with other mission agencies.",
  },
  {
    title: "Great Awakening",
    desc: "To minister and help prepare the way for the coming of the Lord through a revived church, resulting in a great awakening in completing the task of world evangelism (Matt. 28:18-20).",
  },
]

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/")
  }, [])
  return (
    <div>
      <section className="relative">
        <div className="absolute h-full w-full bg-black z-10 opacity-30"></div>
        <img
          src="/images/hero.png"
          className="max-h-[75vh] w-screen object-cover opacity-90"
          alt=""
        />
      </section>
      <section className="my-5 flex flex-col items-center gap-3 px-3">
        <p className="max-w-md font-semibold">
          God has used prayer events, united prayer gatherings, conferences, and
          Pastor Prayer Pods in North America and throughout the world to help
          restore and rekindle the flame of the Holy Spirit in true revival
          among Christian leaders. We have dedicated ourselves to continue
          teaching and leading the body of Christ back to prayer.
        </p>
        <button className="bg-primary text-white font-bold py-2 px-6 rounded-full capitalize transition duration-300 transform hover:bg-hover">
          Click me
        </button>
      </section>
      <div className="h-[1px] w-full bg-black opacity-25 my-4"></div>
      <section>
        <div id="timeline" className="">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col gap-3 lg:gap-5 my-8 relative">
              <div className="absolute left-7 lg:left-[54%] xl:left-[53.1%] -top-4 h-full w-[6px] bg-[#CC99A6]"></div>
              {timeline &&
                timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 z-10 relative ${
                      index % 2 === 0
                        ? "flex-row-reverse lg:flex-row"
                        : "flex-row-reverse lg:flex-row-reverse"
                    }`}
                  >
                    <div className="bg-gray-100 px-3 py-3 flex flex-col gap-2 rounded-lg shadow-custom lg:w-2/5">
                      <p className="text-blue-600 text-lg font-semibold capitalize">
                        {item.title}
                      </p>
                      <p className="text-gray-600">{item.desc}</p>
                      {/* <p className="text-gray-400">{item.joined_date}</p> */}
                    </div>
                    <div className="h-16 lg:h-20 w-16 lg:w-20 flex-shrink-0 rounded-full bg-white shadow- shadow-gray-400 p-1 lg:absolute left-[50%]">
                      {/* <img
                        src={item.imageLink}
                        className="h-full w-full rounded-full"
                        alt=""
                      /> */}
                      <div className="h-full w-full bg-primary rounded-full"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <section className="my-5 flex flex-col items-center gap-3">
          <p className="max-w-md font-semibold italic">
            We have much to accomplish and we need your help!
          </p>
          <Link
            to={"/contact"}
            className="bg-primary text-white font-bold py-2 px-6 rounded-full capitalize transition duration-300 transform hover:bg-hover"
          >
            Please Contact
          </Link>
        </section>
      </section>
      <div className="h-[1px] w-full bg-black opacity-25 my-4"></div>
      <section className="my-5 flex justify-center flex-wrap gap-5">
        {activities &&
          activities.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-full md:max-w-[47%] lg:max-w-[32%] shadow-custom px-4 py-3 rounded-md flex flex-col gap-2 items-center"
            >
              <p className="text-primary text-lg font-semibold">{item.title}</p>
              <p>{item.desc}</p>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Home
