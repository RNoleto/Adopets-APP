<template>
  <footer>
    <div class="container">
      <div class="content">
        <div class="column">
          <router-link to="/" class="logo">Adopets</router-link>
          <p class="copy">Adopets © Alguns direitos reservados.</p>
        </div>
        <div class="column">
          <p class="title">Contato</p>
          <p class="contact">devnoleto@gmail.com</p>
        </div>
        <div class="column">
          <p class="title">Informações</p>
          <div class="pages">
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/about">Quem Somos</router-link>
            <router-link class="link" to="/posts">Posts</router-link>
            <!-- <router-link class="link" to="#">Achados e Perdidos</router-link> -->
          </div>
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
      .title {
        font: var(--footer-topic-text-composite);
        text-transform: uppercase;
        color: var(--c5);
      }

      .contact {
        color: var(--c4);
        font: var(--footer-links-composite);
      }

      .pages {
        display: flex;
        flex-direction: column;


        .link {
          width: max-content;
          position: relative;
          color: var(--c4);
          font: var(--footer-links-composite);

          &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 2px;
            left: 0px;
            background-color: var(--p1);
            color: var(--p1);
          }

          &:hover {
            transition: color 0.3s ease;
            color: var(--p1);
          }

          &:hover:after,
          &.active:after {
            transition: width 0.3s ease;
            width: 100%;
          }
        }
      }

      .copy {
        margin-top: 20px;
        color: var(--c4);
      }
    }
  }
}
</style>