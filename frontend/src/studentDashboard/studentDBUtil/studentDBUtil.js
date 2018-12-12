import axios from 'axios';
import jwt from 'jsonwebtoken';

const baseUrl = "http://localhost:3001";

axios.interceptors.request.use((config)=>{  
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})



export {getMenuStore}
async function getMenuStore()
{
  const token = localStorage.getItem('token');
  const decoded = jwt.decode(token);

  const storeName = await axios.get(baseUrl+'/manager/getStoreName');
  
  return axios.get(baseUrl+'/store/'+storeName.data+'/getAllMenu');

}