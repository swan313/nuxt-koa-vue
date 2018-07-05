<template>
    <div class="header">
      <ul class="nav-items">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/users">Users</nuxt-link>
        </li>
      </ul>
    </div>
</template>
<script>
  export default {}
</script>
<style>
  .header{
    height:60px;
    line-height:60px;
    background-color: #ccc;
  }
  .header li{
    display:inline-block;
    margin:0 20px;
  }
</style>
