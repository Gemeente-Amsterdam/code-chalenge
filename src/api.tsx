import axios from "axios";
import { Idistrict } from "./interface";

export const baseURL = 'https://my-json-server.typicode.com/Gemeente-Amsterdam/code-chalenge/db'

export const getData = () => {
	return axios.get(baseURL)
    .then(res => {
        console.log(res.data)
        return res.data
    })
}