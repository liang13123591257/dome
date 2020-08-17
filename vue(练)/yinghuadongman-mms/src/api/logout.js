import request from '@/utils/request';//引入axios对象

const BAST_API = process.env.VUE_APP_BASE_API;

export default {
    
    //退出接口
    loginOut(token) {
        return request({
            method: 'post',
            url:'/user/logout',
            data: {
                token
            }
        });
    },

    upPsw(psw){
        return request({
            url: `/user/editPsw`,
            method: 'put',
            data: psw
        });
    }
}
