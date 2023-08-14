Вам предстоит создать простое приложение на Vue.js для отображения списка
фильмов. У вас есть массив объектов с информацией о фильмах, и вы должны создать
два компонента: родительский компонент "Список фильмов" и дочерний компонент
"Информация о фильме". Родительский компонент "Список фильмов" будет отображать
список фильмов, используя дочерний компонент "Информация о фильме" для
отображения дополнительных деталей о каждом фильме по клику. Создайте
родительский компонент "MovieList", который содержит список фильмов. Создайте
дочерний компонент "MovieInfo", который отображает информацию о фильме и может
передавать данные о фильме обратно в родительский компонент. Импортируйте
дочерний компонент в родительский компонент. Передайте информацию о фильмах из
родительского компонента в дочерний компонент через props. При клике на каждый
элемент списка фильмов в дочернем компоненте "MovieInfo" показывайте или
скрывайте дополнительные детали о фильме. При клике на кнопку в дочернем
компоненте "MovieInfo", передайте некоторую информацию о фильме обратно в
родительский компонент. В родительском компоненте отобразите информацию о
фильме, которую вы получили от дочернего компонента.

<template>
  <MovieAdd @addNewMovie="addNewMovie" />
  <div class="movie-box">
    <MovieInfo
      class="item"
      :movie="movie"
      v-for="movie in this.movies"
      :key="movie.id" />
  </div>
</template>

<script>
import MovieAdd from "./MovieAdd.vue";
import MovieInfo from "./MovieInfo.vue";

export default {
  name: "MovieList",
  components: {
    MovieInfo,
    MovieAdd,
  },
  data() {
    return {
      show: false,
      movies: [
        {
          name: "book1",
          author: "author1",
          year: "2020",
          details: "Доп сведения",
        },
        {
          name: "book2",
          author: "author2",
          year: "2021",
          details: "Доп сведения",
        },
        {
          name: "book3",
          author: "author3",
          year: "2022",
          details: "Доп сведения",
        },
      ],
    };
  },
  props: {},
  methods: {
    addNewMovie(data) {
      this.movies.push(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-box {
  display: flex;
  justify-content: space-around;
}

.item {
  width: 100px;
}
</style>
