<template>
  <div class="container">
    <div class="content">
      <h3 class="title">Detalhes da Raça</h3>
      <div v-if="raca">
        <div class="card">

        </div>
      </div>
      <!-- <div v-else>
        <p>Detalhes da raça não encontrados.</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['raca'],
};
</script>

<style lang="scss" scoped>
.container {
  .content {
    height: 100vh;

    .title {
      color: var(--c10);
    }

    .card {
      margin-top: 24px;
      width: 350px;
      height: 400px;
      border-radius: 5px;
      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

      .text_body {
        z-index: 2;
        padding: 5px 10px;
        color: var(--p4);
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);
      }
    }
  }
}
</style>
