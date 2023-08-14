<template>
  <div>
    <Book :book="book" v-for="book in this.books" :key="book.id" />
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'BookList',
  components: {
    Book,
  },
  created() {},
  data() {
    return {
      show: false,
      books: [
        {
          name: 'book1',
          author: 'author1',
          year: '2020',
          details: 'Доп сведения',
        },
        {
          name: 'book2',
          author: 'author2',
          year: '2021',
          details: 'Доп сведения',
        },
        {
          name: 'book3',
          author: 'author3',
          year: '2022',
          details: 'Доп сведения',
        },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
