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
  background-color: #080808;
  color: #fff;
  font-family: 'futura-pt',Arial,sans-serif;
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

p::selection {
  color: #fff;
  background: #17e7a4;
}
h1::selection {
  color: #fff;
  background: #17e7a4;
}
h2::selection {
  color: #fff;
  background: #17e7a4;
}

button::selection {
  color: #fff;
  background: #17e7a4;
}


</style>

