<template>
  <div class="page">XS</div>
</template>

<script  lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class tableTest extends Vue {
  private data: any = {
    a: '123'
  };
  private data2: any = "12&lt;3&gt;";

  mounted() {
    console.log(this.conversion(this.data, true));
  }
  conversion(obj: any, forward = false) {
    /**
     * 思路：
     * 可输入特殊字符的数据格式有：String、Array、Object，String直接进行匹配转换，Array、Object需要遍历；除了这三种格式，Number、Boolean、Symbol、Undefined、Date、Error、HTMLDocument、Null、global格式的原样输出；
     * @ 参数：obj为传入的解析或反解析对象；forward为可选参数，传true则将特殊字符转换，不传默认false则将obj中已转换的内容反转成正常内容。
     * @ 步骤预演：
     * 1. 先判断整个对象，如果是String，则直接转码；
     * 2. 如果是 Array、Object类型，需要取得具体每一项的值
     * 3. 其它类型直接返回
     */
    console.log(
      "对象：",
      Object.prototype.toString.call(obj),
      Object.prototype.toString.call(obj) === "[object String]",
      obj
    );
    
    // 对象类型
    const type = Object.prototype.toString.call(obj);

    // 判断obj是否需要转换
    if (type === "[object String]") {
      return replaceFun(obj);
    } else if (type === "[object Array]" || type === "[object Object]") {
      return recursion(obj);
    } else {
      return obj;
    }

    // 递归
    function recursion(obj: any) {
      console.log('递归：', obj);
      return obj;
    }

    // 判断是数组还是对象
    function isObject(obj: any) {
      if (type === '[object object]') {
         return obj;
      } else if ( type === '[object Array]') {
        return obj;
      }
    }

    // 转换方法
    function replaceFun(str: any) {
      let replaceData = [
        {
          source: "<",
          target: "&lt;",
        },
        {
          source: ">",
          target: "&gt;",
        },
      ];
      for (let i = 0; i < replaceData.length; i++) {
        let sourceReg = replaceData[i].source,
          targetReg = replaceData[i].target;
        if (forward) {
          sourceReg = replaceData[i].target;
          targetReg = replaceData[i].source;
        }
        let reg = new RegExp(sourceReg, "g");
        str = str.replace(reg, targetReg);
      }
      return str;
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
}
</style>
