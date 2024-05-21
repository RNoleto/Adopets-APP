<template>
  <div class="container">
    <div class="content">
      <h3 class="title">Galeria de Raças</h3>
      <div class="galery">
        <div v-for="(breed, index) in breedsList" :key="index" class="card">
          <h3 class="text">{{ breed.breed }}</h3>
          <img :src="getBreedImage(breed.id)" alt="imagem aqui">
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
      breedsList: [],
      images: []
    }
  },
  methods: {
    async loadBreeds() {
      try {
        const response = await axios.get("breeds");
        this.breedsList = response.data;
      } catch (error) {
        console.error("Erro ao carregar Raças", error);
      }
    },
    async loadImages() {
      try {
        const response = await axios.get("files");
        this.images = response.data;
      } catch (error) {
        console.error("Erro ao carregar Imagens", error);
      }
    },
    getBreedImage(breedId) {
      const image = this.images.find(img => img.ref_id_breed === breedId);
      return image ? `${axios.defaults.baseURL.replace('/api', '')}storage/${image.path}` : '';

    },
    async loadAllData() {
      await this.loadBreeds();
      await this.loadImages();
    }
  },
  mounted() {
    this.loadAllData();
  }
}
</script>

<style lang="scss" scoped>
.container {
  .content {
    .title {}

    .galery {
      gap: 12.5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      .card {
        position: relative;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        width: 110px;
        height: 100px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba($color: #000000, $alpha: 0.3);

        .text {
          font-weight: 500;
          padding: 5px;
          background-color: rgba($color: #fff, $alpha: 0.5);
          backdrop-filter: blur(5px);
        }

        img {
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
