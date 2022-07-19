<template>
   <div>
    <code-diff
      :old-string="'12345'"
      :new-string="'3456'"
      file-name="test.txt"
      output-format="side-by-side"/>
  </div> 
</template>

<script>
import {CodeDiff} from 'v-code-diff'

export default {
  name: 'App',
  components: {
    CodeDiff
  },
  mounted(){

  },
  methods: {
    
  }
}
</script>

<style>

</style>