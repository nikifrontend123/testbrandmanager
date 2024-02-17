import axios from "axios";
const axiosinstance = axios.create({
    baseURL:'http://192.168.1.183:8000/api/'
})

export default axiosinstance