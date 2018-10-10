import axios from 'axios'
import md5 from 'md5'

const api = axios.create({
    baseURL: `https://gateway.marvel.com/v1/public`,
    timeout: 10000
});

export default api