import { useState, useEffect } from 'react'
import axios from 'axios'

const DailyReportListings = () => {

  const [reportsData, setReportsData] = useState([]);

  const endpoint = `${import.meta.env.VITE_API_URL}daily_reports/`

  const fetchReports = async () => {
    console.log('fetching...')
    const response = await axios.get(endpoint)
    console.log(response)
    const { data } = response
    setReportsData(data)
    console.log(data)
    return data
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Daily Reports</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of Daily Reports in the database.
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
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Project
                      </th>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Status
                      </th>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {reportsData.map(report =>
                      <tr key={report.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {report.well_name}

                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {report.project_name}

                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {report.current_status}

                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                          {report.updated_at}
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

export default DailyReportListings