<template>
  <div>
    <div class="hwrap">
      <div class="hmove">
        <div class="hitem">
          ZQ 213.15 +1.2%
        </div>
        <div v-for="(value, key) in Stocks" :key="key" class="hitem">
          {{key}} : {{value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['Stocks'],
  data(){
    return {
    }
  }
};
</script>

<style>
.hwrap {
  overflow: hidden;
  background: #eee;
  color: #1c1c1c;
  height: 50px;
}

.hmove {
  display: flex;
  padding-top: 15px;
}

.hitem {
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
}

@keyframes tickerh {
  0% {
    transform: translate3d(10%, 0, 0);
  }
  100% {
    transform: translate3d(-700%, 0, 0);
  }
}
.hmove {
  animation: tickerh linear 15s infinite;
}
</style>