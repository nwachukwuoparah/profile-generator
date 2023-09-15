const { VITE_End_Point } = import.meta.env;
import axios from "axios";

export const getUser = (): any => {
    const token = localStorage.getItem("token")
    return axios.get(`${VITE_End_Point}/getUserProfile`,
        {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }
    )
}