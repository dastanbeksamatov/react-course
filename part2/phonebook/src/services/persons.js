import axios from 'axios'


const url = 'http://localhost:3000/api/persons/'
const getAll = () => {
  const request = axios.get(url)
  return request.then(response => response.data)
}
const create = newObject =>{
  const request = axios.post(url, newObject)
  return request.then(response => response.data)
}
const update = (id, newObject) => {
  const request = axios.put(`${url}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${url}/${id}`)
  return request.then(response => response.data)
}

export default {getAll, create, update, remove}
