import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:8000',
// })

const api = `${import.meta.env.VITE_API_URL}`


export default api;