import axios from "axios"

const API_URL = "http://localhost:5000/api/clients/"

const getContacts = async () => {
  const response = await axios.get(API_URL + "contacts")
  console.log(response)

  return response.data
}

const singleEvent = async (date) => {
  const response = await axios.post(API_URL + "single-event", {
    date,
  })

  return response.data
}

const getEvent = async (id) => {
  const response = await axios.get(`${API_URL}${id}`)

  return response.data
}

const allEvent = async (date) => {
  const token = JSON.parse(localStorage.getItem("user"))["token"]
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.get(API_URL, config)

  return response.data
}

const createEvent = async (data) => {
  const token = JSON.parse(localStorage.getItem("user"))["token"]
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.post(API_URL, data, config)

  return response.data
}

const deleteEvent = async (id) => {
  const token = JSON.parse(localStorage.getItem("user"))["token"]
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.delete(`${API_URL}${id}`, config)

  return response.data
}

const updateEvent = async (data) => {
  const body = {
    title: data.title,
    date: data.date,
    event: data.event,
  }
  const token = JSON.parse(localStorage.getItem("user"))["token"]
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.put(`${API_URL}${data.id}`, body, config)

  return response.data
}

const clientService = {
  singleEvent,
  createEvent,
  allEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getContacts,
}

export default clientService
