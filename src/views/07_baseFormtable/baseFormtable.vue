<template>
  <div class="import-interfaceface-preview">
    <el-card title="标题">
      <el-form
        class="search-form"
        ref="form"
        :model="form"
        @submit.native.prevent="getList"
      >
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            <el-form-item>
              <el-input
                v-model="form.name"
                placeholder="请输入..."
                @keyup.enter="getList"
                clearable
              >
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="getList"
                ></el-button>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-radio-group v-model="form.status" @change="getList">
              <el-radio-button
                v-for="(item, index) in options"
                :key="index"
                :label="item.value"
                >{{ item.label }}</el-radio-button
              >
            </el-radio-group>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        class="preview-table"
        :span-method="arraySpanMethod"
        :data="tableData"
        style="width: 100%; margin-bottom: 20px"
        :row-key="getRowKey"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="name" label="名称"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
        <el-table-column prop="qq" label="QQ"></el-table-column>
        <el-table-column prop="wx" label="微信"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope" v-if="!scope.row.parent">
            <el-button @click="handleView(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button @click="handleEdit(scope.row)" type="text" size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="total, sizes, prev, pager, next"
        :page-sizes="sizes"
        :page-size="size"
        :current-page="page"
        :total="total"
        class="pagination"
        @size-change="handleSize"
        @current-change="handlePage"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script  lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// import { getBaseLineAppRel } from '@api/appManagement.js';
@Component({
  components: {},
})
export default class ImportInterfacePreview extends Vue {
  private options: any = [
    { label: "全部", value: 0 },
    { label: "A", value: 1 },
    { label: "B", value: 2 },
  ];
  private form: any = {
    interfaceName: "",
    status: 0,
  };
  private tableData: any = [
    {
      id: 1,
      name: "GET",
      address: "/dictCategory/get10",
      qq: "获取字典分类信息",
      wx: "客户管理",
    },
  ];
  private tablePage: any = [];
  private sizes:any = "[10, 20, 30, 40]";
  private page: any = 1;
  private size: any = 10;
  private total: any = 0;

  created() {
    // this._getPageTab1(1, 10);
  }
  @Watch("dialogVisible", { deep: true, immediate: true })
  dialogVisibleChange(newVal: any, oldVal: any) {
    if (newVal == false) {
      this.form.name = "";
      this.form.age = "";
      this.form.phone = "";
      this.form.address = "";
    }
  }

  getRowKey(row: any) {
    return row.id;
  }
  // 合并单元格
  arraySpanMethod(row: any) {
    if (row.row.parent) {
      return [1, 4];
    }
  }
  // 查看详情
  handleView(row: any) {
    console.log(row);
  }
  // 编辑
  handleEdit(row: any) {
    console.log(row);
  }
  // 搜索列表 - 模糊查询
  getList() {
    const params = {
      page: this.page,
      size: this.size,
      ...this.form,
    };
    console.log("搜索:", params);
    // getBaseLineAppRel(params).then((res) => {
    //   if (res && res.data) {
    //     this.tableData = res.data;
    //   }
    // });
  }
  // 每页条数
  handleSize(val: any) {
    this.page = 1;
    // this.pageSize = val;
    this.getList();
  }
  // 跳转到 x 页
  handlePage(val: any) {
    this.page = val;
    this.getList();
  }
}
</script>
<style lang="scss" scoped>
.page {
  /*.preview-table {
    /deep/th {
      align-self: center;
      color: $color-header;
      border-top: 1px solid $color-table-cutting;
      border-color: $color-table-cutting;
      background-color: $color-back-header;
      transition: background-color 0.8s;
      .el-checkbox__input.is-indeterminate,
      .el-checkbox__input.is-checked,
      .el-checkbox__input.is-focus {
        .el-checkbox__inner {
          background-color: #fff;
          border-color: $color-table-cutting;
        }
      }
      .el-checkbox__inner::before {
        background-color: $color-main;
      }
      .el-checkbox__inner::after {
        border-color: $color-main;
      }

      .cell {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 9px 10px;
        font-family: "MicrosoftYaHei", "微软雅黑", sans-serif;
        font-size: 14px;
        color: $color-subtitle-text;
        line-height: 20px;
        font-weight: normal;
        .thead-cell {
          display: inline-flex;
          flex-direction: row;
          align-items: left;
          padding: 0;
          overflow: initial;
          cursor: pointer;
        }
      }
      .el-table__fixed {
        cursor: not-allowed;
      }
    }
    .el-checkbox.is-checked {
      color: $color-background;
    }
  }*/
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
