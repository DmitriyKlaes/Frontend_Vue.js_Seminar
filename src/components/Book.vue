Разработка приложения для отображения информации о книгах Требуется создать
компонент "Книга" (Book), который будет отображать информацию о книге, такую как
название, автор и год издания. Компонент "Книга" должен иметь возможность
отображать дополнительные детали о книге по требованию пользователя. Также
необходимо создать компонент "Список книг" (BookList), который будет отображать
список книг из переданного массива.

<template>
  <div>
    <h2 @click="showDetails = !showDetails">{{ book.name }}</h2>
    <p v-show="showDetails">{{ book.author }}</p>
    <p v-show="showDetails">{{ book.year }}</p>
    <p v-show="showDetails">{{ book.details }}</p>
  </div>
</template>

<script>
export default {
  name: "Book",
  data() {
    return {
      showDetails: false,
    };
  },
  props: {
    book: Object,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
