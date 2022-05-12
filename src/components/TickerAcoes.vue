<template>
  <div class="grid-item-stocks-bar grid-item">
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
/* (A) FIXED WRAPPER */
.hwrap {
  overflow: hidden; /* HIDE SCROLL BAR */
  background: #eee;
  color: #1c1c1c;
}

/* (B) MOVING TICKER WRAPPER */
.hmove {
  display: flex;
}

/* (C) ITEMS - INTO A LONG HORIZONTAL ROW */
.hitem {
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

/* (D) ANIMATION - MOVE ITEMS FROM RIGHT TO LEFT */
/* 4 ITEMS -400%, CHANGE THIS IF YOU ADD/REMOVE ITEMS */
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