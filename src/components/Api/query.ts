const { VITE_End_Point } = import.meta.env;
import axios from "axios";

export const getUser = (data: any): any => {
    console.log(data, VITE_End_Point)
    const token = localStorage.getItem("token")
    return axios.get(`${VITE_End_Point}/getUserProfile`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }
    )
}