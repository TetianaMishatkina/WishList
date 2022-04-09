import axios, { AxiosRequestConfig } from "axios";

const API_PATH = 'http://localhost:3008'

export const request = (path: string, options: AxiosRequestConfig<any>) => {
    const token = localStorage.getItem('token')

    const url = `${API_PATH}${path}`

    if (token) {
        return axios({
            url,
            ...options,
            headers: {
                'x-access-token': token
            }
        })
    }

    return axios({
        url,
        ...options,
    })
}