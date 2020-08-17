import request from '@/utils/request';

// const BAST_API = process.env.VUE_APP_BASE_API;

export default {
    getlist() {
        return request({
            method: 'get',
            url: '/source/checklist',
            dataType: "json"
        });
    },

    //分页
    search(page, size) {
        return request({
            url: `/source/paging/${page}/${size}`,
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
            url: `/source/insert`,
            method: 'post',
            dataType: "json",
            data: pojo
        })
    },

    //修改
    putMember(id, pojo) {
        return request({
            url: `/source/edit/${id}`,
            method: 'put',
            // dataType:"json",
            data: pojo
        })
    },

    //删除
    delMember(id) {
        console.log(id);

        return request({
            url: `/source/dele/${id}`,
            method: 'delete',
        })
    },
    //查询
    inquire(name) {
        return request({
            url: `/source/inqur/${name}`,
            method: 'get',
        })
    }
}