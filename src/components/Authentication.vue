Создайте компонент "Аутентификация" (Authentication), который будет отображать форму входа
или сообщение об успешной аутентификации в зависимости от переданного пропса
isAuthenticated. Используйте директиву v-if для условного отображения разных элементов в
шаблоне компонента.

<template>
  <div>
    <p v-if="isAuthenticated">Вы зарегистрированы</p>
    <form v-else>
      <input required type="text" placeholder="Login" v-model.lazy="login" />
      <input required type="password" placeholder="Password" v-model.lazy="password" />
      <button @submit="auth">Регистрация</button>
    </form>
    <div>
      <template> </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Authentication',
  created() {},
  data() {
    return {
      login: '',
      password: '',
    };
  },
  props: {
    isAuthenticated: Boolean,
  },
  methods: {
    auth() {
      this.$emit('submit', true);
    },
  },
};
</script>

<style lang="scss" scoped></style>
