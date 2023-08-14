<template>
  <div>
    <input v-model="name" type="text" placeholder="name" />
    <input v-model="author" type="text" placeholder="author" />
    <input v-model="year" type="text" placeholder="year" />
    <input v-model="details" type="text" placeholder="details" />
    <button @click="addNew">ADD</button>
  </div>
</template>

<script>
export default {
  name: 'MovieAdd',
  emits: ['addNewMovie'],
  data() {
    return {
      name: '',
      author: '',
      year: '',
      details: '',
    };
  },
  props: {},
  methods: {
    addNew() {
      const newMovie = {
        name: this.name,
        author: this.author,
        year: this.year,
        details: this.details,
      };
      this.name = '';
      this.author = '';
      this.year = '';
      this.details = '';
      this.$emit('addNewMovie', newMovie);
    },
  },
};
</script>

<style lang="scss" scoped></style>
