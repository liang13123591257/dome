import request from '@/utils/request';

// const BAST_API = process.env.VUE_APP_BASE_API;

export default {
    getlist() {
        return request({
            method: 'get',
            url:  '/goods/checklist',
            dataType: "json"
        });
    },

    //分页
    search(page, size) {
        return request({
            url:`/goods/paging/${page}/${size}`,
            method: 'get',
            // data: searchMap
            // data: {
            //     page,
            //     size
            // }
        })
    },

    //添加
    addMember(pojo) {
        return request({
            url:  `/goods/insert`,
            method: 'post',
            dataType: "json",
            data: pojo
        })
    },

    //修改
    putMember(id, pojo) {
        return request({
            url:`/goods/edit/${id}`,
            method: 'put',
            data: pojo
        })
    },

    //删除
    delMember(id) {
        return request({
            url:  `/goods/dele/${id}`,
            method: 'delete',
        })
    },

    //查询
    inquire(name) {
        return request({
            url: `/goods/inqur/${name}`,
            method: 'get',
        })
    }
}