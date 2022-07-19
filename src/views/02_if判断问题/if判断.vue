<template>
  <div>
    <h1>if条件</h1>
    <p>response:{data:id}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class if判断 extends Vue {
  mounted() {
    this.pageInit();
  }

  pageInit() {
    let res = {
      data: null,
      code: 200,
      msg: "ok",
    };
    // if (res.hasOwnProperty("data") && (res.data as any).hasOwnProperty('id')) {
    //   console.info(res.data);
    // }
  }
}
</script>

<style></style>
