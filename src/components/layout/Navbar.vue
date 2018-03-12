<template>
    <div class="navbar">
        <ul class="menu">
            <li>
                <router-link tag="a" to="/categories">О нас</router-link>
            </li>
            <li>
                <router-link tag="a" to="/market">Магазин</router-link>
            </li>
            <li>
                <router-link tag="a" to="/">DVIZH</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "navbar",
  date() {
  },
  methods: {
    
  },
  created() {
    
  }
};
</script>

<style lang="stylus" scoped>
.navbar
    display flex 
    align-items center
    justify-content center
    height 100%;
    ul
        list-style-type none
        li
            display inline
        

</style>

