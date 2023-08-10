<template>
  <div>
    <p>{{ user.name }}</p>
    <p>{{ user.phone }}</p>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  created() {},
  data() {
    return {};
  },
  props: {
    user: Object,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
