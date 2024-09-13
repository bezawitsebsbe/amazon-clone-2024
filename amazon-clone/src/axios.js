import axios from 'axios';
const instance = axios.create({
    baseURL:'https://amazon-api-deploy-8sns.onrender.com',
})
// http://127.0.0.1:5001/sep-f862e/us-central1/api

export default instance;

