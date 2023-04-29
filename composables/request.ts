import axios, { AxiosRequestConfig } from 'axios';

const baseURL: string = import.meta.env.VITE_NUXT_BASE_URL as string

const serviceWithToken = axios.create({
    baseURL: baseURL,
    timeout: 30000,
});

serviceWithToken.interceptors.request.use(
    config => {
        // 鉴权Header
        if (localStorage.getItem('ZHIFOU_TOKEN')) {
            (config.headers as any)['Authorization'] = localStorage.getItem('ZHIFOU_TOKEN');
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

serviceWithToken.interceptors.response.use(
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


// 不需要Token
const service = axios.create({
    baseURL: baseURL,
    timeout: 30000,
});

service.interceptors.request.use(
    config => {
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


export function requestWithToken<T, R>(config: AxiosRequestConfig<T>): Promise<R> {
    return serviceWithToken(config) as unknown as Promise<R>;
}

export function request<T, R>(config: AxiosRequestConfig<T>): Promise<R> {
    return service(config) as unknown as Promise<R>;
}

