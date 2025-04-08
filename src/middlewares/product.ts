import axios from "axios";

const apiFlowers = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
})


// Get Flores
export  const getFlowers = async () => {
  try {
    const response = await apiFlowers.get('api/v1/product');
    console.log("Datos obtenidos:", response.data);
    return response.data;
  } catch (err) {
    console.error("Hubo un error con la solicitud GET:", err);
  }
}

// Get Flores en base a su id
export  const getFlowersById = async (id:string) => {
  try {
    const response = await apiFlowers.get(`api/v1/product/${id}`);
    console.log("Datos obtenidos:", response.data);
    return response.data;
  } catch (err) {
    console.error("Hubo un error con la solicitud GET:", err);
  }
}



