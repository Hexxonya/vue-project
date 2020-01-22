<template>
  <div>
    <div id="readout">
      <svg viewBox="0 0 100 100">
        <circle r="25" cx="50" cy="50" id="pie" />
      </svg>
      <output for="utilslider">15%</output>
    </div>
    <input type="range" min="0" max="100" value="15" id="utilslider">
  </div>
</template>



<script >
  export default {

  };
</script>


<
<style scoped>
  svg {
    transform: rotate(-90deg);
    color: #333;
    background: currentcolor;
    border-radius: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  label {
    display: block;
    font-size: 2rem;
    font-weight: 900;
  }
  #pie {
    fill: currentcolor;
    stroke: hsl(0,0%,50%);
    stroke-width: 50;
    stroke-dasharray: 0 158;
    transition:stroke-dasharray 2s;
  }
  #readout {
    width: 25%;
    margin: 2rem auto;
    position: relative;
    height: 0;
    padding-top: 25%;
  }
  #utilslider {
    width: 20%;
  }
  output {
    position: absolute;
    color: #fff;
    font-size: 3rem;
    text-align: center;
    z-index: 10;
    width: 100%;
    left: 0;
    top: calc(50% - 2rem);
  }
</style>
