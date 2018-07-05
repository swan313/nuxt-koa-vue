<template>
  <div>
    这个页面是：{{$route.params.id}}
  </div>
</template>
<script>
  export default {
    validate(data){
//      console.log(data);
//      return true;
      return /^\d+$/.test(data.params.id);
    }
  }
</script>
