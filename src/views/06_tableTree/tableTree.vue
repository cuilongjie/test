<template>
  <div></div>
</template>

<script>
export default {
  name: "Cron",
  components: {},
  data() {
    return {
      data: [
        {
          live: "1",
          menuType: "menu",
          children: [
            {
              live: "1-2",
              menuType: "menu",
              children: [
                {
                  live: "1-2-3",
                  menuType: "menu",
                  children: [
                    { live: "1-2-3-4", menuType: "authority", children: [{}] },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    Array.prototype.remove = function(val) { 
        var index = this.indexOf(val); 
        if (index > -1) { 
            this.splice(index, 1); 
        } 
    }

    
    function recursion(item, parent) {
      if (item.menuType === "authority") {
        console.info( "jinru__1", JSON.stringify(item), "||111|||", JSON.stringify(parent) );
        parent.push(item);
        console.info("jinru__3", parent);
        // parent.remove(item);
      }
      if (item.children) {
        let child = item.children;
        child.forEach((i) => {
          console.info("第二次：", i);

          recursion(i, parent);
        });
      }
    }

    const data = this.data;
    data.forEach((item) => {
      if (item.children && item.children.length !== 0) {
        console.info("--首次：", JSON.stringify(item));
        recursion(item, data);
      }
    });
    console.info("=====：", data);
  },
};
</script>

<style>
</style>