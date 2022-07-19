<template>
  <div class="page">
    <h3>本章节知识点</h3>
    <i>章节中将对vue中的this问题进行剖析，例如data中的this，生命周期中的this，methods中的this，箭头函数、普通函数嵌套以及混合嵌套时的this作用域问题进行解析</i>
    <div>
      <p>1.0 vue中this作用域指向</p>
      <p>1.1 Vue->methods中使用常规函数</p>
      <p>1.2 Vue->methods中使用箭头函数</p>
      <p>1.3 Vue->methods中的常规函数，定义内部子常规函数(目前题主遇到的问题)</p>
      <p>1.4 Vue->methods中的常规函数，定义内部子箭头函数(这个)</p>
      <p>1.5 Vue->data与methods的this</p>
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
