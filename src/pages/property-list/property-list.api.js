import axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getPropertyList = () =>
  axios.get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })

