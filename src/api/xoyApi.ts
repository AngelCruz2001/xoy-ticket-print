import axios from 'axios';
const xoyApi = axios.create({ baseURL: 'https://entradas.xoyticket.com/api/v1/boletos/' });

xoyApi.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`;
        }
        return config;
    }
    
);

export default xoyApi;