import axios from "axios";
export function AttachInterceptors() {
    axios.interceptors.request.use(
        (config) => config,
        (error) => {
            return Promise.reject(error);
        }
    );
    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            return Promise.reject(error);
        }
    );
}
