import axios from "axios";

const apiFlowers = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
})


export  const getFlowers = async () => {
  try {
    const response = await apiFlowers.get('api/v1/product');
    return response.data;
  } catch (err) {
    console.error("Hubo un error con la solicitud GET:", err);
  }
}


export  const getFlowersById = async (id:string) => {
  try {
    const response = await apiFlowers.get(`api/v1/product/${id}`);
    return response.data;
  } catch (err) {
    console.error("Hubo un error con la solicitud GET:", err);
  }
}



