<template>
  <div class="empty">{{ message }}</div>
</template>

<script>
export default {
  props: [ 'message' ]
}
</script>

<style lang="scss" scoped>
.empty{
  font-size: 0.3rem;
  color: #888;
  text-align: center;
  padding: 0.2rem 0;
  margin-top: 0.6rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 1rem;
}
</style>