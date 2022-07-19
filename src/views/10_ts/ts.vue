<template>
  <div class="page">
    <h3>本章节知识点</h3>
    <i>章节中将对ts语法与this指向问题混合使用学习</i>
    <div>
      <p>1.0 ts语法</p>
      <p>1.1 基础数据类型用法</p>
      <p>1.2 Number对象用法</p>
      <p>1.3 String对象用法</p>
      <p>1.4 Array对象用法</p>
      <p>1.5 Map对象用法</p>
      <p>1.6 元组用法</p>
      <p>1.7 联合类型用法</p>
      <p>1.8 接口</p>
      <p>1.9 类</p>
      <p>1.10 对象</p>
      <p>1.11 命名空间</p>
      <p>1.12 模块</p>
      <p>1.13 声名文件</p>
    </div>
  </div>
</template>

<script  lang="ts">
import { Component, Vue } from "vue-property-decorator";
// interface Obj {
//   getValue(): String;
// }
// class TestObj implements Obj {
//   public function getValue(): String {
//     return '获取到数据';
//   }
// }
@Component({
  components: {},
})

export default class tableTest extends Vue {
  // a = new TestObj();
 
}
</script>
<style lang="scss" scoped>
.page {
}
</style>
