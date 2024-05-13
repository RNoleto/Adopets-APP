<template>
  <div class="container">
    <div class="content">
      <h3 class="title">Galeria de Raças</h3>
      <div class="galery">
        <div v-for="(breed, index) in breedsList" :key="index" class="card">
          <h3 class="text">{{ breed.breed }}</h3>
          <img :src="getBreedImage(breed.id)" :alt="breed.breed">
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
      breedsList: [
        {
          id: 1,
          breed: "Poodle",
        },
        {
          id: 2,
          breed: "Maltes",
        },
        {
          id: 3,
          breed: "Vira Lata",
        },
        {
          id: 4,
          breed: "Dog Alemão",
        },
        {
          id: 5,
          breed: "Pincher",
        }
      ],
      images:[
        {
          id: 1,
          ref_id_breed: 1,
          img: "https://images.unsplash.com/photo-1555596873-1916fae19257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9vZGxlfGVufDB8fDB8fHww",
        },
        {
          id: 2,
          ref_id_breed: 2,
          img: "https://media.istockphoto.com/id/172653881/pt/foto/cachorrinho.webp?b=1&s=170667a&w=0&k=20&c=qOihZOCUM8Gow-2nfZEj-xwKGTB0ewNJ8H0fO0NKfBo=",
        },
        {
          id: 3,
          ref_id_breed: 3,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUvfALBt1sP8XV2SVtDik2r9BAnxWZ1MMVHw&s",
        },
        {
          id: 4,
          ref_id_breed: 4,
          img: "https://media.istockphoto.com/id/546202048/pt/foto/great-dane-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=TfKZHaq6rKMCFWtCA8wXItEKrdiVXOx7WNWvbLwH8ss=",
        },
        {
          id: 5,
          ref_id_breed: 5,
          img: "https://media.istockphoto.com/id/177769631/pt/foto/senior-pinscher-an%C3%A3o.webp?b=1&s=170667a&w=0&k=20&c=AYNVCPFmEJMkDJFMIMII0DFhI7W3kSVZKunsuq8EFoY=",
        }
      ]
    }
  },
  methods: {
    async loadBreeds() {
      try {
        const response = await axios.get("/breeds");
        this.breedsList = response.data;
      } catch (error) {
        console.error("Erro ao carregar Raças", error);
      }
    },
    async loadImages() {
      try {
        const response = await axios.get("/images");
        this.images = response.data;
      } catch (error) {
        console.error("Erro ao carregar Imagens", error);
      }
    },
    getBreedImage(breedId){
      const image = this.images.find(img => img.ref_id_breed === breedId);
      return image ? image.img : '';
    }
  },
  mounted() {
    this.loadBreeds();
    this.loadImages();
  }
}
</script>

<style lang="scss" scoped>
.container{
  .content{
    .title{}
    .galery{
      gap: 12.5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      .card{
        position: relative;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        width: 110px;
        height: 100px;
        border-radius: 5px;
        box-shadow: 1px 1px 3px rgba($color: #000000, $alpha: 0.3);
        .text{
          font-weight: 500;
          padding: 5px;
          background-color:rgba($color: #fff, $alpha: 0.5);
          backdrop-filter: blur(5px);
        }
        img{
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