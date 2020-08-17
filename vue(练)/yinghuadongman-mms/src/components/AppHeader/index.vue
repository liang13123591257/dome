<template>
  <div>
    <div class="header">
      <!-- 头部左侧Logo和标题 -->
      <a href="#/">
        <!-- <img class="logo" src="@/assets/img/logo.jpg" width="25px" /> -->
        <span class="company">樱花动漫资源管理系统</span>
      </a>
      <!-- 下拉菜单 -->
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{name ? ' 管理员 '+name : '' }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item icon="el-icon-edit" command="a">修改密码</el-dropdown-item> -->
          <el-dropdown-item icon="el-icon-s-fold" command="b">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import logOut from "@/api/logout";
export default {
  data() {
    return {
      name: localStorage.getItem("mms-username")
    };
  },

  components: {},

  methods: {
    //功能:点击退出功能，触发这里的代码
    handleCommand(command) {
      // this.$message("你点击了：" + command);
      if (command == "a") {
        //修改密码
        // console.log(123);
      } else {
        //退出功能：清除本地token和用户名并跳回登陆页
        //发送请求
        this.toOut();
      }
    },

    //修改密码
    // async updataPsw() {
    //   try {
    //     let p = await logOut.upPsw(psw);
    //     // console.log(p.data);
    //     if (p.data.flag) {
    //       this.$router.push("/login");
    //     } else {
    //       //如果失败就弹窗提示
    //       this.$message({
    //         message: "修改失败",
    //         type: "error",
    //         duration: 1000
    //       });
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    //功能:退出功能，axios发送请求
    async toOut() {
      //删除的ajax请求
      try {
        let token = localStorage.getItem("mms-token");
        let p = await logOut.loginOut(token);
        // console.log(p.data);
        if (p.data.flag) {
          //退出成功；就删除本地的登陆信息
          localStorage.removeItem("mms-username");
          localStorage.removeItem("mms-token");
          this.$router.push("/login");
        } else {
          //如果失败就弹窗提示
          this.$message({
            message: "退出失败",
            type: "error",
            duration: 1000
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
.logo {
  vertical-align: middle;
  /* 上 右 下 左 */
  padding: 0 10px 0 40px;
}
.company {
  position: absolute;
  color: white;
}
/* 下拉菜单 */
.el-dropdown {
  float: right;
  margin-right: 40px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
}
</style>