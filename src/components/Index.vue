<template>
  <div class="index">
    <div class="all-window prelude-page">
    <navbar/>
    <div></div>
    </div>
  </div>
</template>

<script>
import Navbar from './layout/Navbar';

export default {
  name: "Index",
  components: {
    Navbar
  },
  data() {
    return {
    
    };
  }
};
</script>

<style lang="stylus" scoped>
.all-window
  width 100vw
  height 100vh

.prelude-page
  background: url("../../static/prlude.jpg") center 100vw
</style>
