import axios from 'axios';

const url = `${process.env.BASE_API_URL}`;

export const getProperty = (propertyId) => {
  return axios.get(`${url}/properties?id=${propertyId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
}

export const getEquipments = () => {
  return axios.get(`${url}/equipments`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
}

export const insertContact = (contact) => {
  return axios.post(`${url}/contact/`, contact)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
}
