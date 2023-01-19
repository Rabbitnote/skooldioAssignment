import axios from 'axios';

export default axios.create({ baseURL: 'https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json',withCredentials: false });
