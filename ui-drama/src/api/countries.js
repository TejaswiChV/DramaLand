import axios from 'axios';
const BASE_URL = 'http://localhost:8080';
export const getCountries = ()=> {
    return  axios.get(`${BASE_URL}/drama/api/getCountries`).then(response => response.data).catch(e=>console.log(e))
}
