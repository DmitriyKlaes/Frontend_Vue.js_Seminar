<template>
  <hr />
  <p>Семинар от 2023-07-27</p>
  <hr />
  <h1>я работаю</h1>
  <Hello />
  <kittens />

  <hr />
  <p>Семинар от 2023-07-31</p>
  <hr />
  <Authentication @submit="onLogin" :isAuthenticated="isAuth" />
  <UserList />
  <MortgageCalculator />

  <hr />
  <p>Семинар от 2023-08-03</p>
  <hr />
  <BookList />
  <br />
  <MovieList />
</template>

<script>
import Authentication from './components/Authentication.vue';
import BookList from './components/BookList.vue';
import MortgageCalculator from './components/MortgageCalculator.vue';
import MovieList from './components/MovieList.vue';
import UserList from './components/UserList.vue';
import Hello from './components/hello.vue';
import kittens from './components/kittens.vue';

export default {
  name: 'App',
  components: {
    Hello,
    kittens,
    Authentication,
    UserList,
    MortgageCalculator,
    BookList,
    MovieList,
  },
  data() {
    return {
      isAuth: false,
    };
  },
  methods: {
    onLogin() {
      this.isAuth = true;
    },
  },
};
</script>

<style lang="scss"></style>
