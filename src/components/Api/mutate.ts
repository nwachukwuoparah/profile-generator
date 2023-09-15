const { VITE_End_Point } = import.meta.env;
import axios from "axios";

export const signUp = (data: any): any => {
    return axios.post(`${VITE_End_Point}/signup`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    )
}

export const login = (data: any): any => {
    return axios.post(`${VITE_End_Point}/login`, data)
}

export const editProfile = (data: any): any => {
    const token = localStorage.getItem("token")
    return axios.put(`${VITE_End_Point}/updateuser`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${token}`,
            },
        }
    )
}