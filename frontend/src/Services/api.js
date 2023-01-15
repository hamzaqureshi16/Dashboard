import  axios from 'axios';
const url = 'http://localhost:3000';
export const storeCompany = async (data) =>{
    console.log('api');
    return await axios.post(`${url}/dashboard`,data);
}