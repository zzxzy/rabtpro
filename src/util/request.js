import axios from "axios";

// axios.defaults.baseURL = process.env.VUE_APP_baseURL
const service = axios.create({
        baseURL: process.env.VUE_APP_baseURL,
        timeout: 5000
    })
    // Vue.prototype.$http = axios;
    //请求拦截
service.interceptors.request.use(function(config) {
        return config
    }, error => {
        return Promise.reject(error)
    })
    //响应拦截
service.interceptors.response.use(function(response) {
        console.log("2");
        return response
    }, error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 404:
                    alert('资源不存在');
                    break;
                case 400:
                    alert('请求地址不存在');
                    break;
                case 401:
                    alert('你还没有登录');
                    break;
                default:
                    // alert('你还没有登录');
            }
            return Promise.reject(error)
        }
    })
    //请求拦截
export function get(url, data = {}) {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: 'get',
            params: data
        }).then(res => {
            resolve(res)
        }).then(res => {
            reject(res)
        })
    })
}
//响应拦截
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: 'post',
            data: data
        }).then(res => {
            resolve(res)
        }).then(res => {
            reject(res)
        })
    })
}
export default service