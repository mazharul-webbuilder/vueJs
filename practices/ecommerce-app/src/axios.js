import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

// Define the interceptor
// axios.interceptors.request.use(
//     function (config) {
//         // Get the token from the Vuex store
//         const { getToken: token } = useAuthStore();
//
//         // If token is available, add it to the request headers
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//
//             // Store token
//             localStorage.setItem('token', token)
//         }
//
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

export default axios;



// Then, when you're making API requests in your application, you can simply import this Axios instance:
//
// javascript
// import axios from "@/path/to/your/axios.js";
//
// axios.get('/students')
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.error(error);
//     });
