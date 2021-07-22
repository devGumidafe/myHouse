import axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getProperty = (propertyId) =>
  axios.get(`${url}?id=${propertyId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
