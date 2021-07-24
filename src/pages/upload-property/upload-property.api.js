import axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties/`;

export const insertProperty = (property) => {
  return axios.post(url, property)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    })
}
