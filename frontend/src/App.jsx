import { useState, useEffect } from 'react'


function App() {
 const [ data, setData ] = useState([])

  useEffect(()=> {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}operations`);
        if (!response.ok) {
          throw new Error('Network unresponsive');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [])

  return (
    <>
Hello Themis
    </>
  )
}

export default App
