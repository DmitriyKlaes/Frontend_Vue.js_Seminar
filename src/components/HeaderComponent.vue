<template>
  <nav class="nav">
    <router-link v-for="link in links" :key="link.id" :to="link.url">
      {{ link.title }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      links: [
        {
          id: 1,
          title: 'home',
          url: '/',
        },
        {
          id: 2,
          title: 'about',
          url: '/about',
        },
        {
          id: 3,
          title: 'contacts',
          url: '/contacts',
        },
        {
          id: 4,
          title: 'catalog',
          url: '/catalog',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 16px;
}
</style>
