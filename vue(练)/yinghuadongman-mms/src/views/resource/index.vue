<template>
  <div>
    <!-- 表单组件 -->
    <el-form
      ref="ruleForm"
      :inline="true"
      :model="searchMap"
      class="demo-form-inline"
      style="margin-top: 20px;"
    >
      <el-form-item prop="name">
        <el-input v-model="searchMap.name" placeholder="动漫名" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="success" @click="addMan">新增</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 列表组件 -->
    <el-table ref="singleTable" :data="tableData" highlight-current-row style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column property="date" label="上架日期" width="120"></el-table-column>
      <el-table-column property="name" label="动漫名" width="120"></el-table-column>
      <el-table-column property="address" label="集数" width="120"></el-table-column>
      <el-table-column property="writer" label="作者" width="100"></el-table-column>
      <el-table-column property="district" label="发行地区" width="100"></el-table-column>
      <el-table-column property="watFocus" label="看点" width="280"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 :current-page="currentPage"-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <!-- 弹窗组件 -->
    <el-dialog :title="id? '编辑':'添加'" :visible.sync="dialogFormVisible" width="500px">
      <el-form
        status-icon
        ref="pojoForm"
        :model="pojo"
        label-width="100px"
        label-position="right"
        style="width: 400px;"
      >
        <el-form-item label="动漫名" prop="name">
          <el-input v-model="pojo.name" />
        </el-form-item>
        <el-form-item label="上架时间" prop="date">
          <el-input v-model="pojo.date" />
        </el-form-item>
        <el-form-item label="集数" prop="address">
          <el-input v-model="pojo.address" />
        </el-form-item>
        <el-form-item label="作者" prop="writer">
          <el-input v-model="pojo.writer" />
        </el-form-item>
        <el-form-item label="发布地区" prop="district">
          <el-input v-model="pojo.district" />
        </el-form-item>
        <el-form-item label="看点" prop="watFocus">
          <el-input v-model="pojo.watFocus" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="id ? editMember(id) : addMember('pojoForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ResouApi from "@/api/resou";
export default {
  data() {
    return {
      tableData: [], //数据
      dialogFormVisible: false, //弹窗开关
      currentPage: 1,
      pageSize: 5,
      total: 0,
      id: null,
      searchMap: {
        //查询条件
        name: ""
      },
      pojo: {
        //弹窗绑定数据
        date: "",
        name: "",
        address: "",
        writer: "",
        district: "",
        watFocus: ""
      }
    };
  },

  methods: {
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },

    handleEdit(row) {
      //index：代表数组的下标，第n+1行
      //row:当前行数据,是一个对象
      // console.log(index, row);
      //1、需求1：对话框打开，就把当前行的内容渲染到弹窗表单里面(直接获取当前行数据row就可以渲染；拿到id值，发送ajax请求这条数据，再进行渲染)
      this.dialogFormVisible = true;
      // console.log(row);
      this.id = row.id;
      // console.log(this.id);
      //把当前行的数据，渲染到表单里面
      this.pojo = {
        //新增、编辑会员的数据
        name: row.name,
        date: row.date,
        address: row.address,
        writer: row.writer,
        district: row.district,
        watFocus: row.watFocus
      };
    },
    //请求数据
    onSubmit() {
      // console.log("点击查询按钮了");
      this.getinquire();
    },

    async getinquire() {
      try {
        let p = await ResouApi.inquire(this.searchMap.name);
        this.tableData = p.data;
        console.log(p);
      } catch (err) {
        console.log(err);
      }
    },

    async getSearch() {
      try {
        //把要第几页、一页多少条、查询条件一并发给后端
        // console.log(this.searchMap);
        let p = await ResouApi.search(
          this.currentPage,
          this.pageSize,
          this.searchMap
        );
        this.tableData = p.data.data;
        //分页组件数据渲染
        // console.log(p);
        this.total = p.data.total; //钟
      } catch (err) {
        console.log(err);
      }
    },

    async getdata() {
      try {
        let p = await ResouApi.getlist();
        this.tableData = p.data;
        // console.log(p);
      } catch (err) {
        console.log(err);
      }
    },

    //新增
    addMan() {
      this.id = null;

      this.pojo = {
        //新增、编辑的数据
        date: "",
        name: "",
        address: "",
        writer: "",
        district: "",
        watFocus: ""
      };
      this.dialogFormVisible = true;
      this.$refs["pojoForm"].resetFields();
      // this.$nextTick(() => {
      //   // this.$nextTick()它是一个异步事件，当渲染结束 之后 ，它的回调函数才会被执行
      //   // 弹出窗口打开之后 ，需要加载Dom, 就需要花费一点时间，我们就应该等待它加载完dom之后，再进行调用resetFields方法，重置表单和清除样式
      //   this.$refs["pojoForm"].resetFields();
      // });
    },

    addMember(pojo) {
      //正则校验通过,发送ajax
      this.addUser();
    },

    async addUser() {
      try {
        let p = await ResouApi.addMember(this.pojo);
        if (p.data.flag) {
          //新增成功
          this.$message({
            message: "添加成功",
            type: "success"
          });
          this.dialogFormVisible = false; //点击确认，关闭对话框
        } else {
          //新增失败
          this.$message({
            message: "添加失败",
            type: "error"
          });
        }
      } catch (err) {
        //错误回调

        console.log("发送ajax失败", err);
      }
    },

    // //功能：删除功能
    async handleDelete(row) {
      //index：代表数组的下标，第n+1行
      //row:当前行数据,是一个对象
      // console.log(index, row);
      console.log(row.id);

      try {
        let p = await ResouApi.delMember(row.id);
        if (p.data.flag) {
          //删除成功
          this.$message({
            message: "删除成功啦",
            type: "success"
          });
          this.getSearch();
        } else {
          //删除失败
          this.$message({
            message: "删除失败啦",
            type: "error"
          });
        }
      } catch (err) {}
    },

    //修改
    async editMember(id) {
      try {
        let p = await ResouApi.putMember(id, this.pojo);
        if (p.data.flag) {
          //修改成功
          this.$message({
            message: "修改成功",
            type: "success"
          });

          this.dialogFormVisible = false;
        } else {
          //修改失败
          this.$message({
            message: "修改失败",
            type: "error"
          });
        }
      } catch (err) {
        console.log(err);
        console.log("发送失败");
      }
    },

    //功能：重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    handleCurrentChange(val) {
      this.currentPage = val;
      this.getSearch();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      //假设：每页10条；如果在页面切换成20条，下次发生ajax，应该要20条数据
      this.getSearch();
    }
  },
  created() {
    // this.getdata();
    this.getSearch();
  }
};
</script>

<style scoped>
.el-form-item__content button {
  float: left;
}
.el-button--primary {
  display: block;
  width: 120px;
}
.el-button--success {
  display: block;
  width: 120px;
}
.el-button--default {
  display: block;
  width: 120px;
}
.dialog-footer button:nth-of-type(1) {
  position: absolute;
  top: 450px;
  left: 80px;
}
.dialog-footer button:nth-of-type(2) {
  position: absolute;
  top: 450px;
  left: 300px;
}
</style>