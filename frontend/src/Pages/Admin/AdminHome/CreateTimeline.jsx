import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createTimeline, reset } from "../../../features/home/homeSlice"
import ReactQuill from 'react-quill'
import parse, { domToReact } from 'html-react-parser'

const CreateTimeline = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
  })

  const [value, setValue] = useState('')

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
  const renderHtmlContent = (htmlContent) => {
    const options = {
      replace: (node) => {
        if (node.name === 'ul') {
          return <ul className="list-disc ml-10 py-1">{domToReact(node.children)}</ul>;
        }
        if (node.name === 'ol') {
          return <ol className="list-decimal ml-10 py-1">{domToReact(node.children)}</ol>;
        }
        if (node.name === 'li') {
          return <ol className="list-decimal ml-10">{domToReact(node.children)}</ol>;
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

  const [parsedContent, setParsedContent] = useState(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    setParsedContent(renderHtmlContent(value))
    dispatch(createTimeline({
      title,
      description: value
    }))
  }

  // Configure the toolbar options
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // Text style options
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],    // Lists
    // ['link', 'image', 'video'],                      // Insert options
    // ['clean'],                                       // Remove formatting
  ]
  return (
    <div className="h-full">
      <div className="flex justify-between">
        <h1 className="px-3 py-2 text-center text-xl font-semibold">
          Create Timeline
        </h1>
      </div>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-[500px] space-y-3">
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
              className="px-2 py-1 border border-primary rounded-md w-full focus-visible:outline-primary"
            />
          </div>
          {/* <div className="flex flex-col gap-1 items-center">
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
              className="px-2 py-1 border border-primary rounded-md w-full focus-visible:outline-primary" cols="30" rows="10"></textarea>
          </div> */}
          <div className="w-full">
            <label htmlFor="title" className="w-full text-left font-medium">
              Description
            </label>
            <ReactQuill theme="snow" value={value} onChange={setValue} modules={{
              toolbar: toolbarOptions,
            }} className="w-full" />
          </div>
          {/* <div className="border p-3 py-10">{value}</div> */}
          {/* <div className="">
            {parsedContent}
          </div> */}
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
