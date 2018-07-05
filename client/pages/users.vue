<template>
    <div>
      <h1>这是父级</h1>

      <input type="text" v-model="userId">
      <button @click="onLoadUser">点击</button>

      <nuxt-child />
    </div>
</template>
<script>
  export default {
    data() {
      return {
        userId: ''
      }
    },
    methods: {
      onLoadUser() {
        this.$router.push('/users/' + this.userId);
      }
    },
    layout:'users'
  }
</script>
