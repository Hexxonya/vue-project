<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #333;
  color: #fff;
  font-family: sans-serif;
  margin: 0;
}

 .box{
    margin: 5em auto 5em auto;
    height: 590px;
    background: rgba(0, 0, 0, 0.85);
    overflow: hidden;
    max-width: 760px;
    position: relative;
    border-radius: 9px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;

  }

</style>

