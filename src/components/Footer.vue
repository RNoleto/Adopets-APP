<template>
  <footer>
    <div class="container">
      <div class="content">
        <router-link to="/">Adopets</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {

  },
};
</script>
<style lang="scss" scoped>
footer{
  background-color: var(--color-3);
  .content{
    width: max-content;
  }
}
</style>