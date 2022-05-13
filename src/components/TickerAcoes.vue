<template>
  <div>
    <div class="hwrap">
      <div class="hmove">
        <div class="hitem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="hitem">Aliquam consequat varius consequat.</div>
        <div class="hitem">
          Fusce dapibus turpis vel nisi malesuada sollicitudin.
        </div>
        <div class="hitem">Pellentesque auctor molestie orci ut blandit.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hwrap {
  overflow: hidden;
  background: #eee;
  color: #1c1c1c;
}

.hmove {
  display: flex;
}

.hitem {
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

@keyframes tickerh {
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(-400%, 0, 0);
  }
}
.hmove {
  animation: tickerh linear 15s infinite;
}
.hmove:hover {
  animation-play-state: paused;
}
</style>