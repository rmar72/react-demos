import axios from 'axios';
import { clientId } from './config';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        'Authorization': `Client-ID ${clientId}` 
    }
})