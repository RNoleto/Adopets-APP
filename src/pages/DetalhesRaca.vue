<template>
  <div class="content">
    <p class="title" v-if="raca">{{ raca.breed }}.</p>
    <div v-if="raca" class="breed">
      <div v-if="imageSrc" class="image">
        <img :src="imageSrc" alt="Imagem da raça" />
      </div>
      <div class="breed_infos">
        <p class="text_body"><span>Raça:</span> {{ raca.breed }}</p>
        <p class="text_body"><span>Origem:</span> {{ raca.origin }}</p>
        <p class="text_body"><span>Peso Médio:</span> {{ raca.average_weight }} Kg</p>
        <p class="text_body"><span>Expectativa de Vida:</span> {{ raca.lifespan }} anos</p>
        <div>
          <p class="text_body"><span>História:</span></p>
          <p class="text_body history" v-html="raca.story"></p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      raca: null,
      imageSrc: null,
    }
  },
  async created() {
    const breedId = this.$route.params.id;
    await this.fetchBreedDetails(breedId);
    if (this.raca) {
      await this.fetchBreedImage(breedId);
    }
  },
  methods: {
    async fetchBreedDetails(breedId) {
      try {
        const response = await axios.get(`/breeds/${breedId}`);
        this.raca = response.data;
      } catch (error) {
        console.error('Erro ao carregar os detalhes da raça', error);
      }
    },
    async fetchBreedImage(breedId) {
      try {
        const response = await axios.get(`/files/${breedId}`, { responseType: 'blob' });
        const url = URL.createObjectURL(response.data);
        this.imageSrc = url;
      } catch (error) {
        console.log('Erro ao carregar as imagens da raça', error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  .title {
    color: var(--c10);
  }

  .breed {
    margin-top: 12px;

    &_infos {
      display: flex;
      flex-direction: column;
      // gap: 10px;
      flex-wrap: wrap;
    }

    .text_body {
      margin-top: 0px;
      color: var(--p1);

      &.history {
        color: var(--c9);
      }

      span {
        font-weight: bold;
        color: var(--p5);
      }
    }
  }
}
</style>
