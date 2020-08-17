import request from '@/utils/request';
const BAST_API = process.env.VUE_APP_BASE_API;
export default {
    loginIn(name, psw) {
        return request({
            method: 'get',
            url: `/user/log/${name}/${psw}`,
            // data: {
            //     name,
            //     psw
            // }   
        });
    },

    getUserInf(token) {
        return request({
            method: 'get',
            url: '/user/verify/' + token
        });
    }

}