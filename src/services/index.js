import axios from 'axios';
import { baseURL } from '../constants'

const API = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default API;
