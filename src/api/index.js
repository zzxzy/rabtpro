// import {get, post } from '../util/request.js';
// export function getBrand(data) {
//     return get('/home/brand', data);
// }
// export function getHd() {
//     return get('home/category/head');
// }
// export function getTemp(data) {
//     return post('/category/goods/temporary', data);
// }
// export function getCategoryList(data) {
//     return post('/category/goods/temporary', data);
// }

import request from '@/util/request.js'
export function getHd(data) {
    return request({ url: '/home/category/head', params: data })
}
export function getLb() {
    return request({ url: '/home/banner' })
}
export function getnew() {
    return request({ url: '/home/new' })
}
export function getgoods() {
    return request({ url: '/home/goods' })
}
export function getCategoryList(data) {
    return request({ url: '/category', params: data, method: 'get' })
}
//查看全部
export function getQbList(data) {
    return request({ url: '/category/sub/filter', params: data, method: 'get' })
}