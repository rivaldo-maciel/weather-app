import Axios from 'axios';

const getWeatherAPI = async (endpoint) => {
  const response = await Axios.get(endpoint);
  return response.data.results;
}

export default getWeatherAPI;