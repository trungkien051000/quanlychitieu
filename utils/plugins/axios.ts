import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { http } from '@utils/constants';
import { appConfig } from '@utils/configs';

const axiosConfig = axios.create({
    baseURL: appConfig.API_URL,
});

axiosConfig.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    },
);

axiosConfig.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        const { response } = error;
        if (response && response.status !== http.SUCCESS_CODE) {
            return Promise.reject(response);
        }

        return Promise.reject(response);
    },
);

export default axiosConfig;
