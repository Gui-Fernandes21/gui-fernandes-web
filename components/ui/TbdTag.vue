<template>
  <span class="tbd" title="To be confirmed"><slot /></span>
</template>

<style scoped>
.tbd {
  display: inline;
  padding: 0 6px;
  border: 1px dashed #d9a520;
  border-radius: 6px;
  background: repeating-linear-gradient(-45deg, #fff7e0, #fff7e0 6px, #fdefc4 6px, #fdefc4 12px);
  color: #7a5600;
  font-family: var(--sans);
  font-size: 0.85em;
  font-style: normal;
  font-weight: 600;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
}
</style>
