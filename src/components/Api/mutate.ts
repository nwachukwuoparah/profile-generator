const { VITE_End_Point } = import.meta.env;
import axios from "axios";
const { VITE_userToken } = import.meta.env;

export const signUp = (data: any): any => {
    console.log(data, VITE_End_Point)
    return axios.post(`${VITE_End_Point}/signup`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    )
}

export const login = (data: any): any => {
    console.log(data, VITE_End_Point)
    return axios.post(`${VITE_End_Point}/login`, data)
}