import request from '@/utils/request'

// export function login(data) {}
export const getUserInfoApi = (id) =>{
    return request({
        url: `/user-service/user/${id}`,
        method: 'GET',
    })
}
