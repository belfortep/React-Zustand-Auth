import axios from 'axios'
import { useAuthStore } from '../store/auth'
const authApi = axios.create({
        baseURL: "http://localhost:3000",
        withCredentials: true//para poner headers
})

authApi.interceptors.request.use(config => {//añade header en cada peticion
        const token = useAuthStore.getState().token
        config.headers = {
                Authorization: 'Bearer ' + token
        }
        return config
})

export default authApi