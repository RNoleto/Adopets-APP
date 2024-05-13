<template>
  <h3 class="title">Nossos Posts</h3>
  <div class="content">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="post in posts" :key="post.id" class="swiper-slide">
          <img :src="post.img" :alt="post.title">
          <div class="info">
            <p class="date">{{ post.date }}</p>
            <div class="title">{{ post.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c3xlbnwwfHwwfHx8MA%3D%3D',
          title: 'Como escolher o pet ideal para sua família',
          date: '01/05/2024',
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldHN8ZW58MHx8MHx8fDA%3D',
          title: 'Por que adotar um animal de estimação',
          date: '10/03/2024',
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHN8ZW58MHx8MHx8fDA%3D',
          title: '10 dicas para cuidar do seu gato',
          date: '15/02/2024',
        }
      ]
    }
  },
  mounted() {
    import('swiper/swiper-bundle.css').then(() => {
      import('swiper').then((Swiper) => {
        new Swiper.default('.swiper-container', {
          // Configurações do Swiper
          slidesPerView: 'auto',
          spaceBetween: 10,
          // Adicione outras configurações conforme necessário
        });
      });
    });
  },
};
</script>

<style scoped lang="scss">
.content {
  justify-content: center;

  /* Seus estilos SCSS para o componente aqui */
  .swiper-container {
    width: 98%;
    height: 100%;
    padding: 10px 0px;

    // overflow: hidden;

    .swiper-slide {
      overflow: hidden;
      width: 100%;
      height: 220px;
      border-radius: 10px;
      box-shadow: 1px 1px 5px rgba($color: #24252A, $alpha: .3);
      display: flex;
      flex-direction: column-reverse;

      img {
        object-fit: cover;
        object-position: center;
        position: absolute;
        z-index: -1;
        height: 100%;
        width: 100%;
      }

      .info {
        border-radius: 5px;
        box-shadow: 0px -2px 10px rgba($color: #24252A, $alpha: .3);
        text-align: start;
        align-content: end;
        padding: 5px 10px;
        background-color: rgba($color: #EEF5EF, $alpha: .7);
        backdrop-filter: blur(5px);
        .title {
          line-height: 23px;
        }
      }
    }
  }
}
</style>
