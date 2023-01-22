import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { eventsByDate, reset } from "../../features/event/eventSlice"

const Event = () => {
  const [selectedDate, setSelectedDate] = useState("")
  const [data, setData] = useState(null)

  const dispatch = useDispatch()

  const { event, isSuccess, isError, isEventsBydate } = useSelector(
    (state) => state.event
  )

  useEffect(() => {
    if (isEventsBydate) {
      setData(event)
      dispatch(reset())
    }
    if (isError) {
      setData(null)
      dispatch(reset())
    }
  }, [event, isSuccess])

  const dateChange = (e) => {
    setSelectedDate(e.target.value)
  }

  const onSubmit = () => {
    dispatch(eventsByDate(selectedDate))
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
          <div className="my-4">
            <p className="text-center text-primary text-xl font-semibold capitalize">
              {d.title}
            </p>
            <table
              key={index}
              className="table-auto w-full border my-5 border-primary"
            >
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
        <table
          // key={index}
          className="table-auto w-full border my-5 border-primary"
        >
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
  )
}

export default Event
