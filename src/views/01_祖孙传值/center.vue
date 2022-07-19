<template>
  <div style="border: 1px solid yellow">
    Center Box
    <Bottom v-bind="$attrs" v-on="$listeners"></Bottom>
  </div>
</template>

<script>
import Bottom from "./bottom.vue";

export default {
  name: "Center",
  components: { Bottom },
  props: {
    a: {
      type: String,
      default: "default",
    },
  },
  created() {
    console.log("c-", this.a);
  },
};
</script>

<style></style>
