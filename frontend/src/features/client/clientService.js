import axios from "axios"

const API_URL = "http://localhost:5000/api/clients/"

const getContacts = async () => {
  const response = await axios.get(API_URL + "contacts")
  console.log(response)

  return response.data
}

const createContact = async (data) => {
  const token = JSON.parse(localStorage.getItem("user"))["token"]
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.post(`${API_URL}contact`, data, config)
  console.log(response)

  return response.data
}

const deleteContact = async (id) => {
  const token = JSON.parse(localStorage.getItem("user"))["token"]
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.delete(`${API_URL}contact/${id}`, config)
  console.log(response)

  return response.data
}

const clientService = {
  getContacts,
  createContact,
  deleteContact,
}

export default clientService
