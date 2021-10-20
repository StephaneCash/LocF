import axios from 'axios';

//const axios = window.axios;

const url = "http://localhost:8000/api";

export default {
 getAllSpecialistes: () =>
    axios.get(`${url}/specialistes`),
getOneSpecialiste: (id) => 
    axios.get(`${url}/specialistes/${id}/edit`),
addSpecialiste: (specialiste) =>
    axios.post(`${url}/specialistes`, specialiste),
updateSpecialiste: (specialiste, id) =>
    axios.put(`${url}/specialistes`, specialiste),
deleteSpecialiste: (id) =>
    axios.delete(`${url}/specialistes/${id}`),
}