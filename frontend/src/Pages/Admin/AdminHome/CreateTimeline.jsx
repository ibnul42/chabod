import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createTimeline, reset } from "../../../features/home/homeSlice"

const CreateTimeline = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
  })

  const { title, description } = inputValue

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isSingleTimeline, isError, message } = useSelector(
    (state) => state.home
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSingleTimeline) {
      dispatch(reset())
      navigate("/admin/home")
    }
  }, [isError, isSingleTimeline])

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createTimeline(inputValue))
  }
  return (
    <div className="h-full">
      <div className="flex justify-between">
        <h1 className="px-3 py-2 text-center text-xl font-semibold">
          Create Timeline
        </h1>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="max-w-lg space-y-3">
          <div className="flex flex-col gap-1 items-center">
            <label htmlFor="title" className="w-full text-left font-medium">
              Title
            </label>
            <input
              placeholder="Title"
              type="text"
              id="title"
              name="title"
              value={title}
              required
              onChange={handleChange}
              className="px-2 py-1 border border-primary rounded-md w-52 focus-visible:outline-primary"
            />
          </div>
          <div className="flex flex-col gap-1 items-center">
            <label htmlFor="title" className="w-full text-left font-medium">
              Description
            </label>
            <textarea placeholder="Description"
              type="text"
              id="description"
              name="description"
              value={description}
              required
              onChange={handleChange}
              className="px-2 py-1 border border-primary rounded-md w-52 focus-visible:outline-primary" cols="30" rows="10"></textarea>
            {/* <input
              placeholder="Description"
              type="text"
              id="description"
              name="description"
              value={description}
              required
              onChange={handleChange}
              className="px-2 py-1 border border-primary rounded-md w-52 focus-visible:outline-primary"
            /> */}
          </div>
          <div className="flex justify-center gap-3">
            <button className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-hover focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 capitalize m-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTimeline
