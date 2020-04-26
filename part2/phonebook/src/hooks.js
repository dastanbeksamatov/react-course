import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (type) => {
  const [ value, setValue ] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}


export const useResource = (baseUrl) => {
  const [ resources, setResources ] = useState([])
  let token
  const setToken = (newToken) => {
    token = `bearer ${newToken}`
  }
  useEffect(() => {
    const getAll = async () => {
      const response = await axios.get(baseUrl)
      setResources(response.data)
    }
    getAll()
  }, [baseUrl])


  const add = async (resource) => {
    const response = await axios.post(
      baseUrl,
      resource,
      {
        headers: {
          Authorization: token
        }
      }
    )
    const newResources = resources.concat(response.data)
    setResources(newResources)
  }

  const remove = async id => {
    await axios.delete(
      `${baseUrl}/${id}`,
      {
        headers: {
          Authorization: token
        }
      }
    )
    const newResources = resources.filter(resource => resource.id !== id )
    setResources(newResources)
  }

  const service = {
    add,
    remove,
    setToken
  }
  return [
    resources, service
  ]
}