import axios from 'axios';

const url = `${process.env.BASE_API_URL}`;

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

export const getEquipmentList = () => {
  return axios.get(`${url}/equipments`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
}
