import axios from 'axios'
export const baseUrl = 'http://localhost:4000';
const axiosInstance = axios.create({
	baseURL: baseUrl,

})

// axiosInstance.interceptors.request.use(
// 	res=>res.data,
// 	err=>{
// 		console.log(err,'error')
// 	}
// )

axiosInstance.interceptors.response.use(
	res=> res.data,
	err => console.log('error:', err)
)

export {
	axiosInstance
}