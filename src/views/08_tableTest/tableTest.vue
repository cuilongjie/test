<template>
  <div class="import-interfaceface-preview">
    <el-card title="标题">
      <el-table
        class="preview-table"
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        border
        resizable
        default-expand-all
      >
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="qq" width="50" label="QQ" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="wx" label="微信">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script  lang="ts">
import { Component, Vue} from "vue-property-decorator";
// import { getBaseLineAppRel } from '@api/appManagement.js';
@Component({
  components: {},
})
export default class tableTest extends Vue {
  private tableData: any = [
    {
      id: 1,
      name: "GET",
      address: "/dictCategory/get10",
      qq: "获取字典分类信息",
      wx: "客户管理",
    },
  ];
}
</script>
<style lang="scss" scoped>
.page {
  /deep/.el-table {
    border-bottom: 1px solid #ebecf0;
    border-left: 1px solid #ebecf0;
    border-right: 1px solid #ebecf0;
  }
  .pagination {
    float: right;
    margin-top: 30px;
  }
}
</style>
