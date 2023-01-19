import axios from "axios";

const useAPI = () => {
  const instance = axios.create({
    baseURL: "https://api.synthia.tech/patient/api",
    withCredentials: false
  });
  return [instance];
};

export default useAPI;
