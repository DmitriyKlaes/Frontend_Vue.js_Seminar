Создать компонент UserList, который будет отображать список пользователей из переданного
массива. Каждый пользователь должен быть представлен в виде отдельного компонента User,
принимающего пропсы с данными о пользователе (например, имя, фамилия, эл. почта)

<template>
  <div>
    <User :user="user" v-for="user in this.users" :key="user.id" />
  </div>
</template>

<script>
import User from './User.vue';

export default {
  name: 'UserList',
  components: {
    User,
  },
  data() {
    return {
      users: [
        { name: 'Dima', phone: '8-911-956-63-64', email: 'dima@mail.ru' },
        { name: 'Katya', phone: '8-911-123-65-11', email: 'katya@mail.ru' },
        { name: 'Barbosso', phone: '111', email: 'barbosso@mail.ru' },
      ],
    };
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
