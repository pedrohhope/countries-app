import axios, { AxiosResponse } from "axios";
import { ICountrie } from "../@types/interfaces";


const getCountries = async () => {
    const response: AxiosResponse<ICountrie[]> = await axios.get('https://restcountries.com/v3.1/all')
    return response.data
};

export default getCountries;