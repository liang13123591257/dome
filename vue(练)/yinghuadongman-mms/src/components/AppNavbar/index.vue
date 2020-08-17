<template>
  <div>
    <div class="navbar">
      <!-- 导航菜单 router前面要加冒号，里面的属性值才是布尔值，否则是字符串-->
      <el-menu
        :router="true"
        default-active="/home/"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item :index="item.path" v-for="item in menuList" :key="item.icon">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          path: "/home",
          icon: "el-icon-s-home",
          title: "首页"
        },
        {
          path: "/authority",
          icon: "el-icon-user-solid",
          title: "管理员权限管理"
        },
        {
          path: "/source",
          icon: "el-icon-s-cooperation",
          title: "资源来源管理"
        },
        {
          path: "/resource",
          icon: "el-icon-s-goods",
          title: "动漫资源管理"
        }
        
      ]
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
.el-menu {
  border-right: none;
}
/* .el-menu-item {
  height: 80px;
}
.el-menu {
  background: chartreuse;
} */
</style>