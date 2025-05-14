import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [projectsData, setProjectsData] = useState([])

  const endpoint = `${import.meta.env.VITE_API_URL}projects/`

  const fetchData = async() => {
    console.log('fetching...')
    const response = await axios.get(endpoint)
    console.log(response)
    const {data} = response
    setProjectsData(data)
    console.log(data)
    return data
  }

  const postData = async() => {
    const project_name = 'Test Project'
    const body = {project_name}

    const response = await axios.post(endpoint, body)
    console.log(response)
    return response.data
  }

  const handleSendData = async() => {
    const newData = await postData()
    if (newData) {
      setProjectsData(prevState => [...prevState, newData])
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

 
  return (
    <>
    {/* Refactor Map */}
    <ul>
  {projectsData.map(el => <li key={el.id}>{el.project_name}</li>)} 
  </ul>
  <button onClick={handleSendData}>Create Project</button>
    </>
  )
}

export default App
