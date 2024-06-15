<template>
  <div class="container">
    <div class="content">
      <h3 class="title">Galeria de Raças</h3>
      <div class="galery">
        <div v-for="(breed, index) in breedsList" :key="index" class="card">
          <h3 class="text_body">{{ breed.breed }}</h3>
          <img :src="getBreedImage(breed.id)" alt="imagem da raça">
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
      images: [],
      testImage: '',
      storageBaseUrl: axios.storageBaseUrl
    }
  },
  methods: {
    async loadBreeds() {
      try {
        const response = await axios.get("/breeds");
        this.breedsList = response.data;
        console.log("Raças carregadas:", this.breedsList);
      } catch (error) {
        console.error("Erro ao carregar Raças", error);
      }
    },
    async loadImages() {
      try {
        const response = await axios.get("/files");
        this.images = Array.isArray(response.data.data) ? response.data.data : [];
        console.log("Imagens carregadas:", this.images);

        // Exemplo de como acessar um dos dados da imagem
        if (this.images.length > 0) {
          console.log('ID da primeira imagem:', this.images[0].id);
        }
      } catch (error) {
        console.error("Erro ao carregar Imagens", error);
      }
    },
    getBreedImage(breedId) {
      if (!Array.isArray(this.images) || this.images.length === 0) return 'https://via.placeholder.com/150';
      const image = this.images.find(img => img.ref_id_breed === breedId);
      console.log('Imagem encontrada para a raça:', image);

      return image ? `${this.storageBaseUrl}${image.path}` : 'https://via.placeholder.com/150';
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
    height: 100vh;

    .title {
      color: var(--c10);
    }

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
        width: 110%;
        height: 400px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

        .text_body {
          z-index: 2;
          padding: 5px;
          color: var(--p4);
          background-color: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(5px);
        }

        img {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    .test-image {
      margin-top: 20px;

      img {
        width: 300px;
        height: auto;
        object-fit: cover;
      }
    }
  }
}
</style>
