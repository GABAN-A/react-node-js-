import axios from 'axios'
import config from '../services/config.json'

axios.defaults.baseURL=config.apiURL;

export function setCommonHeader(headerName,value){
    axios.defaults.headers.common[headerName]=value;
}
const httpSERVICE={
    get:axios.get,
    post:axios.post,
    patch:axios.patch,
    delete:axios.delete,
    put:axios.put,
    setCommonHeader,
}
export default httpSERVICE;