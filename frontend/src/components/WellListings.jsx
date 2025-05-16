import { useState, useEffect } from 'react'
import axios from 'axios'


const WellListings = () => {


    const [wellsData, setWellsData] = useState([]);
    
    const endpoint = `${import.meta.env.VITE_API_URL}wells/`
    
    const fetchWells = async() => {
      console.log('fetching...')
      const response = await axios.get(endpoint)
      console.log(response)
      const {data} = response
      setWellsData(data)
      console.log(data)
      return data
    };

        useEffect(() => {
          fetchWells();
        }, []);


        
  return (
    <>


    
           <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold text-gray-900">Wells</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the wells in the database.
          </p>
        </div>
</div>
<div>

               <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              
      <table className="min-w-full divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
          Well
          </th>

        </tr>
      </thead>
<tbody className="divide-y divide-gray-200">
{wellsData.map(well => 
<tr key={well.id}>
<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
{well.well_name}
</td>


  </tr>
  )
  } 
  </tbody>
  </table>
  </div>
  </div>
  </div>
   </div>
    </div>
          

      
    </>
  )
}

export default WellListings
