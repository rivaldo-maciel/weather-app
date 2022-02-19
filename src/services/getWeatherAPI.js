import Axios from 'axios';

const getWeatherAPI = async (endpoint) => {
  const response = await Axios.get(endpoint);
  console.log(response);
  return response;
}

export default getWeatherAPI;