<template>
  <div>
    <Header/>
    <header>
      users layouts
    </header>
    <nuxt/>
  </div>
</template>
<script>
  import Header from '@/components/Header.vue';

  export default {
    components: {
      Header
    }
  }
</script>
<style scoped>
  html,body {
    background: #c4bec4;
  }
</style>
