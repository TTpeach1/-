import request from '@/utils/request'
/**
 * 登录请求
 * @param {Object} data 
 * @returns promise
 */
export function onLoginApi(data){
    return request({
        url: '/user-service/user/login',
        method: 'POST',
        data
    })
}
/**
 * 获取验证码图片
 * @param {Number} clientToken 
 * @returns picture
 */
export function imageCodeApi(clientToken){
    return request({
        url:`/user-service/user/imageCode/${clientToken}`,
        method: 'GET'
    })
}