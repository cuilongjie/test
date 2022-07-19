<template>
  <div style="border: 1px solid black">
    test
    <Top a="a" b="b" c="c" @funA="funA" @funB="funB"></Top>
  </div>
</template>

<script>
import Top from "./top.vue";

export default {
  name: "Test",
  components: { Top },
  methods: {
    funA() {
      console.log("funA");
    },
    funB() {
      console.log("funB");
    },
  },
};
</script>

<style></style>
