<template>
  <div style="border: 1px solid red">
    Top Box
    <Center v-bind="$attrs" v-on="$listeners"></Center>
  </div>
</template>

<script>
import Center from "./center.vue";
export default {
  name: "Top",
  components: { Center },
};
</script>

<style></style>
