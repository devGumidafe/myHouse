import axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = (queryParams) => {
  return axios.get(`${url}?${queryParams}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
}
