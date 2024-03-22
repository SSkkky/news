<template>
  <div class="home">
    <h1>📖 뉴스 등록 📖</h1>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
.home{
  width: 100%;
}
</style>
