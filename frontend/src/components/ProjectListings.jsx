import { useState, useEffect } from 'react'
import axios from 'axios'

const ProjectListings = () => {

    const [projectsData, setProjectsData] = useState([]);
    
    const endpoint = `${import.meta.env.VITE_API_URL}projects/`
    
    const fetchProjects = async() => {
      console.log('fetching...')
      const response = await axios.get(endpoint)
      console.log(response)
      const {data} = response
      setProjectsData(data)
      console.log(data)
      return data
    };

        useEffect(() => {
          fetchProjects();
        }, []);

  return (
    <>

<div className="px-4 sm:px-6 lg:px-8">
<div className="sm:flex sm:items-center">
<div className="sm:flex-auto">
<h1 className="text-base font-semibold text-gray-900">Projects</h1>
<p className="mt-2 text-sm text-gray-700">
A list of all the projects in the database.
</p>
</div>


<div className="mt-8 flow-root">
<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">

<table className="min-w-full divide-y divide-gray-300">
<thead>
<tr>
<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
Project
</th>
<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
Location
</th>
<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
Customer
</th>
<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
PM
</th>
<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
Created
</th>

</tr>
</thead>
<tbody className="divide-y divide-gray-200">
{projectsData.map(project => 
<tr key={project.id}>
<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
{project.project_name}
</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
{project.project_location}
</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

{project.project_customer}
</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

{project.project_manager}
</td>
<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

{project.date_created}
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

export default ProjectListings





















// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'

// const ProjectListings = () => {

//     const [projects, setProjects] = useState([]);
//     const fetchProjects = async () => {
//       const response = await api.get('/projects/');
//       setProjects(response.data)
//     };

//     useEffect(() => {
//       fetchProjects();
//     }, []);

//   return (
//            <div className="px-4 sm:px-6 lg:px-8">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h1 className="text-base font-semibold text-gray-900">Projects</h1>
//           <p className="mt-2 text-sm text-gray-700">
//             A list of all the projects in the database.
//           </p>
//         </div>
//         <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
//           <button
//             type="button"
//             className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             +
//           </button>
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                     Name
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Location
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Customer
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     PM
//                   </th>
//                   <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
//                     <span className="sr-only">Edit</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200">
//                 {projects.map((project) => (
//                   <tr key={project.id}>
//                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                       {project.name}
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{project.location}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{project.customer}</td>
//                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{project.project_manager}</td>
//                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
//                       <Link to="#" className="text-indigo-600 hover:text-indigo-900">
//                         Details
//                       </Link>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
     
//   )
// }

// export default ProjectListings