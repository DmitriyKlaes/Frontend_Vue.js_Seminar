<template>
  <div>
    <h2>{{ movie.name }}</h2>
    <p>{{ movie.author }}</p>
    <p>{{ movie.year }}</p>
    <button @click="showDetails = !showDetails">
      {{ showDetails ? "скрыть" : "показать" }}
    </button>
    <p v-show="showDetails">{{ movie.details }}</p>
  </div>
</template>

<script>
export default {
  name: "MovieInfo",
  created() {},
  data() {
    return {
      showDetails: false,
    };
  },
  props: {
    movie: Object,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
