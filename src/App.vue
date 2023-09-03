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
  <hr />
  <p>Семинар от 2023-08-21</p>
  <hr />
  <div>
    <h2>counter {{ counter }}</h2>

    <button @click="INCREMENT">plus</button>
    <button @click="DECREMENT">plus</button>
    <hr />
    <div>
      <h2>Корзина покупок</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - {{ item.price }}
        </li>
      </ul>
      <p>Общее кол-во товаров {{ totalCartItems }}</p>
      <p>Общая стоимость {{ totalCartPrice }}</p>
      <button @click="addItemToCart({ id: 1, name: 'хлеб', price: 100 })">
        Добавить товар в корзину
      </button>
    </div>
    <hr />
    <div>
      <h2>Данные</h2>
      <ul>
        <li v-for="item in data" :key="item">
          {{ item }}
        </li>
      </ul>
      <button @click="fetchData">Получить данные</button>
    </div>
  </div>
  <hr />
  <p>Семинар от 2023-08-24</p>
  <hr />
  <HeaderComponent />
  <RouterView />
</template>

<script>
import Authentication from './components/Authentication.vue';
import BookList from './components/BookList.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MortgageCalculator from './components/MortgageCalculator.vue';
import MovieList from './components/MovieList.vue';
import UserList from './components/UserList.vue';
import Hello from './components/hello.vue';
import kittens from './components/kittens.vue';
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

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
    HeaderComponent,
  },
  data() {
    return {
      isAuth: false,
    };
  },
  computed: {
    ...mapState(['counter', 'data']),
    ...mapGetters(['cartItems', 'totalCartItems', 'totalCartPrice']),
  },
  methods: {
    onLogin() {
      this.isAuth = true;
    },
    ...mapMutations(['INCREMENT', 'DECREMENT']),
    ...mapActions(['addItemToCart', 'fetchData']),
  },
};
</script>

<style lang="scss"></style>
