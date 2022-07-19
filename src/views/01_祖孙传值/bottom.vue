<template>
  <div style="border: 1px solid blue">
    Bottom Box
    <div>
      attrs- {{ $attrs }}<br />
      b- {{ b }}
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom",
  props: {
    b: {
      type: String,
      default: "",
    },
  },
  mounted() {
    console.info("b--", this.b);
    console.info("b-$attr-", this.$attr);
    console.info("b-$listeners-", this.$listeners);
    this.$listeners.funA();
    this.$listeners.funB();
  },
};
</script>

<style></style>
