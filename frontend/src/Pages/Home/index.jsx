import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getAllActivities, getAllTimeline } from "../../features/home/homeSlice"
import parse, { domToReact } from 'html-react-parser'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { timelines, activities } = useSelector((state) => state.home)

  useEffect(() => {
    navigate("/")
    dispatch(getAllTimeline())
    dispatch(getAllActivities())
  }, [])

  const renderHtmlContent = (htmlContent) => {
    const options = {
      replace: (node) => {
        if (node.name === 'ul') {
          return <ul className="list-disc ml-10 py-1 w-full">{domToReact(node.children)}</ul>;
        }
        if (node.name === 'ol') {
          return <ol className="list-decimal ml-10 py-1 w-full">{domToReact(node.children)}</ol>;
        }
        if (node.name === 'li') {
          return <ol className="list-decimal ml-10 w-full">{domToReact(node.children)}</ol>;
        }
        if (node.name === 'strong') {
          return <strong className="font-bold">{domToReact(node.children)}</strong>;
        }
        if (node.name === 'em') {
          return <em className="italic">{domToReact(node.children)}</em>;
        }
        if (node.name === 'u') {
          return <u className="underline">{domToReact(node.children)}</u>;
        }
        // Add more conditions for other HTML elements as needed
      },
    };

    return parse(htmlContent, options);
  }
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
        <p className="max-w-md font-semibold text-center">
          “ተነሺ በሌሊት በመጀመሪያ ክፍል ጩኺ፤ በጌታም ፊት ልብሽን እንደ ውኃ አፍስሺ፤ በጎዳና ሁሉ ራስ ላይ በራብ
          ሰለ ደከሙ ሰለ ሕጻናትሽ ነፍስ እጆችሽን ወደ እርሱ አንሺ” (ሰቆ ኤር 2:19)
        </p>
        <p className="max-w-md font-semibold text-center">
          “በኋለኛው ዝናብ ጊዜ ከእግዚአብሔር ዘንድ ዝናቡን ለምኑ፤ እግዚአብሔር መብረቅ ያደርጋል፤ እርሱም የበልግ
          ዝናብን ለእያንዳንዱም በሜዳ ውስጥ ሣርን ይሰጣል” (ዘካ 10:1)
        </p>
        <Link
          to="/contact"
          className="bg-primary text-white font-bold py-2 px-6 rounded-full capitalize transition duration-300 transform hover:bg-hover"
        >
          Click me
        </Link>
      </section>
      <div className="h-[1px] w-full bg-black opacity-25 my-4"></div>
      <section>
        <div id="timeline" className="">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col gap-3 lg:gap-5 my-8 relative">
              <div className="absolute h-full w-full hidden lg:flex justify-center">
                <div className="h-full w-2 bg-[#CC99A6] rounded-lg"></div>
              </div>
              {timelines &&
                timelines.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 z-10 relative ${index % 2 === 0
                      ? "flex-row-reverse lg:flex-row"
                      : "flex-row-reverse lg:flex-row-reverse"
                      }`}
                  >
                    <div className="bg-gray-100 px-3 py-3 flex flex-col gap-2 rounded-lg shadow-custom lg:w-2/5 z-50">
                      <p className="text-blue-600 text-lg font-semibold capitalize">
                        {item.title}
                      </p>
                      <p className="text-gray-600 min-h-min max-h-44 overflow-x-hidden overflow-y-auto">
                        {renderHtmlContent(item.description)}
                      </p>
                    </div>
                    <div className="absolute h-full w-full hidden lg:flex justify-center items-center">
                      <div className="h-16 lg:h-20 w-16 lg:w-20 flex-shrink-0 rounded-full bg-white shadow- shadow-gray-400 p-1 z-10">
                        <div className="h-full w-full bg-primary rounded-full"></div>
                      </div>
                      {timelines.length === index + 1 && (
                        <div className="absolute top-[50%] h-[50%] w-20 bg-white"></div>
                      )}
                      {index === 0 && (
                        <div className="absolute h-[50%] bottom-[50%] w-20 bg-white"></div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <section className="my-5 flex flex-col items-center gap-3">
          <p className="max-w-md font-semibold italic capitalize">
            please contact us for prayer request
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
              <p className="text-gray-600 min-h-min max-h-44 overflow-x-hidden overflow-y-auto">
                {renderHtmlContent(item.description)}
              </p>
            </div>
          ))}
      </section>
    </div>
  )
}

export default Home
