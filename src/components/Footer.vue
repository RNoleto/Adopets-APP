<template>
  <footer>
    <div class="container">
      <div class="content">
        <div class="column">
          <router-link to="/" class="logo">Adopets</router-link>
          <p class="copy">Adopets Alguns direitos reservados.</p>
        </div>
        <div class="column">
          <p>Contato</p>
          <p>devnoleto@gmail.com</p>
        </div>
        <div class="column">
          <p>Informações</p>
          <router-link to="/">Home</router-link>
          <router-link to="#">Quem Somos</router-link>
          <router-link to="#">Posts</router-link>
          <router-link to="#">Achados e Perdidos</router-link>
        </div>
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
.container {
  background-color: var(--p6);

  .content {
    display: flex;
    padding: 120px 220px;
    gap: 110px;

    .column {
      .copy {
        margin-top: 20px;
        color: var(--c4);
      }
    }
  }
}
</style>