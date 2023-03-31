import axios, { AxiosRequestConfig } from 'axios';

const service = axios.create({
    baseURL: import.meta.env.VITE_NUXT_BASE_URL as string,
    timeout: 30000,
});

service.interceptors.request.use(
    config => {
        // 鉴权Header
        if (localStorage.getItem('ZHIFOU_TOKEN')) {
            (config.headers as any)['Authorization'] = 'Bearer ' + localStorage.getItem('ZHIFOU_TOKEN');
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        // 响应码2xx触发
        const { data = {}, code = 0, msg = "" } = response?.data || {};
        if (code === 0) {
            return data || {};
        } else {
            return Promise.reject(msg);
        }
    },
    function (error) {
        return Promise.reject(error);
    }
);

export function request<T, R>(config: AxiosRequestConfig<T>): Promise<R> {
    return service(config) as unknown as Promise<R>;
}
