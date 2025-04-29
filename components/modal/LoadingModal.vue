<template>
  <div class="wrapper">
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrapper {
  background: #00000069;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
}
.loader {
  height: 80px;
  aspect-ratio: 1;
  display: grid;
}
.loader:before,
.loader:after {
  content: "";
  --c:no-repeat linear-gradient(var(--primary) 0 0);
  background: var(--c), var(--c);
  background-size: 25% 50%;
  animation: l5 1.3s infinite linear;
}
.loader:after {
  transform: scale(-1);
}
@keyframes l5 {
  0%,
  5%   {background-position:33.4% 100%,66.6% 100%}
  25%  {background-position:33.4% 100%,100% 0}
  50%  {background-position:0 0,100% 0}
  75%  {background-position:0 0,66.6% 100%}
  95%,
  100% {background-position:33.4% 100%,66.6% 100%}
} 
</style>
