import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { allEvent, eventsByDate, reset } from "../../features/event/eventSlice"

const Event = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [data, setData] = useState(null)

  const dispatch = useDispatch()

  const { event, dateEvents, isSuccess, isError, isEventsBydate } = useSelector(
    (state) => state.event
  )

  useEffect(() => {
    if (isEventsBydate) {
      setData(dateEvents)
      dispatch(reset())
    }
    if (isError) {
      setData(null)
      dispatch(reset())
    }
    dispatch(allEvent())
  }, [dateEvents, isSuccess])

  const dateChange = (e) => {
    setSelectedDate(e.target.value)
  }

  const onSubmit = () => {
    dispatch(eventsByDate(selectedDate))
  }

  const dateFromEvent = (date) => {
    setSelectedDate(date)
    dispatch(eventsByDate(date))
  }
  return (
    <div className="px-3">
      <h1 className="text-primary text-3xl font-bold my-8">Event</h1>
      <div className="flex justify-center">
        <form action="" className="flex flex-col gap-3 max-w-xs text-center">
          <label
            htmlFor="date"
            className="uppercase text-primary font-semibold"
          >
            Events in
          </label>
          <input
            className="text-primary font-semibold px-3 py-2 rounded-full border border-primary"
            type="date"
            id="date"
            name="date"
            defaultValue={selectedDate}
            onChange={dateChange}
          />
          <button
            className="px-3 py-2 rounded-full bg-primary text-white font-medium cursor-pointer"
            type="button"
            onClick={onSubmit}
          >
            Find Events
          </button>
        </form>
      </div>
      {data && data.length > 0 ? (
        data.map((d, index) => (
          <div key={index} className="my-4">
            <p className="text-center text-primary text-xl font-semibold capitalize">
              {d.title}
            </p>
            <table className="table-auto w-full border my-5 border-primary">
              <thead className="">
                <tr className="bg-primary text-white grid grid-cols-3">
                  <th className="px-4 py-2 col-span-2 border-r border-white">
                    Event
                  </th>
                  <th className="px-4 py-2 col-span-1">Time</th>
                </tr>
              </thead>
              <tbody>
                {d.event ? (
                  d.event.map((item, index) => (
                    <tr
                      key={index}
                      className="even:bg-rose-200 grid grid-cols-3"
                    >
                      <td className="px-4 py-2 col-span-2 border-r border-primary">
                        {item.title}
                      </td>
                      <td className="px-4 py-2 col-span-1">{item.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr className="odd:bg-gray-100 grid grid-cols-3">
                    <td className="px-4 py-2 col-span-3 border-r border-primary text-center">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <table className="table-auto w-full border my-5 border-primary">
          <thead className="">
            <tr className="bg-primary text-white grid grid-cols-3">
              <th className="px-4 py-2 col-span-2 border-r border-white">
                Event
              </th>
              <th className="px-4 py-2 col-span-1">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-100 grid grid-cols-3">
              <td className="px-4 py-2 col-span-3 border-r border-primary text-center">
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <div className="my-10">
        <p className="text-center text-primary text-xl font-bold capitalize">
          All Events
        </p>
        {event && event.events && event.events.length > 0 ? (
          event.events.map((item, index) => (
            <table className="table-auto w-full border my-5 border-primary">
              <thead className="">
                <tr className="bg-primary text-white grid grid-cols-3">
                  <th className="px-4 py-2 col-span-2 border-r border-white">
                    Event Title
                  </th>
                  <th className="px-4 py-2 col-span-1">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr key={index} className="even:bg-rose-200 grid grid-cols-3">
                  <td className="px-4 py-2 col-span-2 border-r border-primary">
                    <button
                      onClick={() => dateFromEvent(item.date)}
                      className=" text-left"
                    >
                      {item.title}
                    </button>
                  </td>
                  <td className="px-4 py-2 col-span-1">{item.date}</td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <table className="table-auto w-full border my-5 border-primary">
            <thead className="">
              <tr className="bg-primary text-white grid grid-cols-3">
                <th className="px-4 py-2 col-span-2 border-r border-white">
                  Event
                </th>
                <th className="px-4 py-2 col-span-1">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-gray-100 grid grid-cols-3">
                <td className="px-4 py-2 col-span-3 border-r border-primary text-center">
                  No data available
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Event
