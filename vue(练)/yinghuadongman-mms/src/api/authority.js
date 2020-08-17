import request from '@/utils/request';

// const BAST_API = process.env.VUE_APP_BASE_API;

export default {
    getlist() {
        return request({
            method: 'get',
            url: '/user/goodlist',
            dataType: "json"
        });
    },

    //分页
    search(page, size) {
        return request({
            url: `/user/paging/${page}/${size}`,
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
            url: `/user/insert`,
            method: 'post',
            dataType: "json",
            data: pojo
        })
    },

    //修改
    putMember(id, pojo) {
        return request({
            url: `/user/edit/${id}`,
            method: 'put',
            data: pojo
        })
    },

    //删除
    delMember(id) {
        console.log(id);

        return request({
            url: `/user/deledata/${id}`,
            method: 'delete',
        })
    },
     //查询
     inquire(name) {
        return request({
            url: `/user/inqur/${name}`,
            method: 'get',
        })
    }
}