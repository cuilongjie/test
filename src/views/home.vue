<template>
  <div>
    <h1>Hello word!</h1>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Vue, Component } from "vue-property-decorator";

@Component
export default class home extends Vue {

  mounted() {
    this.init();
  }

  init() {
    console.info("山外青山楼外楼,西湖歌舞几时休。");
  }
}
</script>

<style></style>
