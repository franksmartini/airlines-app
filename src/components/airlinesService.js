import axios from 'axios';
import { AIRLINES_API_URL } from '../constants';

const airlinesService = {
  fetch: async (id) => {
    return axios.get(`${AIRLINES_API_URL}/${id}`)
  },
  fetchList: async () => {
    return axios.get(AIRLINES_API_URL)
  }
}

export default airlinesService;