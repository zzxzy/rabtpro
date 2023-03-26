import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_baseURL

// Vue.prototype.$http = axios;
//请求拦截
axios.interceptors.request.use(function(config) {
        console.log("1");
        return config
    }, error => {
        return Promise.reject(error)
    })
    //响应拦截
axios.interceptors.response.use(function(response) {
        console.log("2");
        return response
    }, error => {
        return Promise.reject(error)
    })
    //请求拦截
export function get(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: data }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
//响应拦截
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, { params: data }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}