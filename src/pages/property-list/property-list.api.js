import axios from 'axios';

const url = `${process.env.BASE_API_URL}`;

export const getPropertyList = () => {
  return axios.get(`${url}/properties`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
}

export const getSaleTypeList = () => {
  return axios.get(`${url}/saleTypes`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
}

export const getProvinceList = () => {
  return axios.get(`${url}/provinces`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
}
