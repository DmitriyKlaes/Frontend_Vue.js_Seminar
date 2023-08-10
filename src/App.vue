<template>
  <h1>я работаю</h1>
  <Hello />
  <kittens />
</template>

<script>
import Hello from './components/hello.vue';
import kittens from './components/kittens.vue';


export default {
  name: 'App',
  components: {
    Hello,
    kittens,

  }
}
</script>

<style lang="scss"></style>
