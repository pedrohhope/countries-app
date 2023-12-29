import axios, { AxiosResponse } from "axios"
import { ICountrie } from "../@types/interfaces";

const getCountrieByName = async (name: string) => {
    const response: AxiosResponse<ICountrie[]> = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
    return response.data[0]
}

export default getCountrieByName;