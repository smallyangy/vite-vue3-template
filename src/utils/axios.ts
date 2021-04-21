import Axios from 'axios';
import { ElMessage } from 'element-plus';

const baseURL = 'https://api.github.com';

const axios = Axios.create({
    baseURL,
    timeout: 20000 // 超时设置20s
});

// 前置拦截器
axios.interceptors.request.use(
    (response) => {
        // 根据实际情况对response做处理
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 后置拦截器
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.data) {
            const code = error.response.status;
            const msg = error.response.data.message;
            ElMessage.error(`Code: ${code}, Message: ${msg}`);
            console.error(`[Axios Error]`, error.response);
        } else {
            ElMessage.error(`${error}`);
        }
        return Promise.reject(error);
    }
);

export default axios;
