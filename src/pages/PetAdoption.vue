<template>
  <div class="content">
    <p class="title">Nosso Pet.</p>
    <p class="text_body">Conheça nosso pet que está a procura de um lar cheio de amor. Seja o seu héroi.</p>
    <div class="infos_pet" v-for="pet in petAdoption" :key="pet.id">
      <div class="images_pet">
        <img class="img_first"
          :src="pet.img_1"
          :alt="pet.name">
        <div class="img_last">
          <img
            :src="pet.img_2"
            :alt="pet.name">
          <img
            :src="pet.img_3"
            :alt="pet.name">
        </div>
      </div>
      <div class="text_pet">
        <p class="name">{{ pet.name }}</p>
        <div class="details">
          <div class="detail"><img src="../../public/assets/icons/male.svg" alt="icon" class="detail_icon">
            <p class="info">{{ pet.sexo }}</p>
          </div>
          <div class="detail"><img src="../../public/assets/icons/event_available.svg" alt="" class="detail_icon">
            <p class="info">{{ pet.idade }}</p>
          </div>
          <div class="detail"><img src="../../public/assets/icons/location.svg" alt="" class="detail_icon">
            <p class="info">{{ pet.localizacao }}</p>
          </div>
        </div>
        <div class="caracteristics">
          <div class="feature"><img src="../../public/assets/icons/brincalhao.svg" alt="icon" class="icon">
            <p>Brincalhão</p>
          </div>
          <div class="feature"><img src="../../public/assets/icons/sociavel.svg" alt="icon" class="icon">
            <p>Sociável</p>
          </div>
          <div class="feature"><img src="../../public/assets/icons/tamanho.svg" alt="icon" class="icon">
            <p>Pequeno</p>
          </div>
          <div class="feature"><img src="../../public/assets/icons/peso.svg" alt="icon" class="icon">
            <p>4 Kg</p>
          </div>
        </div>
        <p class="text_body">
          Lorem ipsum dolor sit amet consectetur. Fringilla nunc semper neque duis. Porta donec a tristique libero
          ornare sed risus. Ultricies quis sed donec nunc ultricies nam sed. Ipsum vel nullam pellentesque fermentum
          augue volutpat.
        </p>
        <p class="text_body">
          Felis sagittis suspendisse ac facilisi. Ut quam sit metus sit facilisis mollis. Amet nulla mi dictum
          vestibulum nulla egestas sapien ultrices et. Egestas viverra est bibendum mauris nunc mauris semper at.
        </p>
        <p class="text_body">
          Varius in sem tortor magna volutpat. Egestas eget volutpat posuere sed lacus nulla bibendum dui. Scelerisque
          laoreet ultrices nibh velit egestas nisl fringilla.
        </p>
        <button>Voltar para lista</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      petAdoption:[
        {
          id: 1,
          name: "Malhado",
          sexo: 'macho',
          idade: '5 anos',
          localizacao: 'Centro, Itajaí - SC',
          img_1: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww",
          img_2: "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
          img_3: "https://images.unsplash.com/photo-1477936432016-8172ed08637e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
          caracteristics:
          {
            feature_1: "Brincalhão",
            feature_2: "Sociável",
            feature_3: "Pequeno",
            feature_4: "4 Kg",
          }
          
        }
      ]      
    }
  }
}

</script>

<style lang="scss" scoped>
.content {

  .title {
    color: var(--c11);
  }

  .text_body {
    color: var(--c9);
    width: 460px;
  }

  .infos_pet {
    margin-top: 60px;
    display: flex;
    gap: 30px;

    .images_pet {
      .img_first {
        width: 660px;
        height: 600px;
        object-fit: cover;
        box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);
      }

      .img_last {
        display: flex;
        gap: 20px;
        margin-top: 20px;

        img {
          width: 320px;
          height: 340px;
          object-fit: cover;
          box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);
        }
      }
    }

    .text_pet {
      .name {
        display: block;
        font-size: 64px;
        color: var(--c11);
        position: relative;
        margin-left: 5px;

        &::before {
          position: absolute;
          content: '';
          width: 6px;
          height: 60px;
          top: 5px;
          left: -10px;
          background-color: var(--p3);
        }
      }

      .details {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;

        .detail {
          &_icon {
            width: 24px;
            height: 24px;
          }
          .info{
            color: var(--c11);
            font: var(--detail-pet-text-composite);
            text-transform: uppercase;
          }
        }
      }

      .caracteristics {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;

        .feature {
          display: flex;
          align-items: center;
          gap: 4px;       
          color: var(--c10);
          

          .icon {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>