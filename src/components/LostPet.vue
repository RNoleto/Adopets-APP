<template>
  <div class="container">
    <div class="content">
      <p class="title">Achados e Perdidos.</p>
      <p class="text_body">Esses pets estão perdidos e sozinhos em algum lugar, ajude a encontra-los.</p>
      <button>Ver mais posts</button>
      <div class="pets_galery">
        <div class="card" v-for="animal in animalList" :key="animal.key">
          <img class="pet_img" :src="animal.img" alt="pet perdido">
          <div class="card_infos">
            <p class="name">{{ animal.name }}</p>
            <div class="details">
              <span class="info"><img :src="getGenderIcon(animal.sexo)" class="icon" alt="icon">{{ animal.sexo }}</span>
              <span class="info">{{ animal.idade }}<img src="../../public/assets/icons/event_available.svg" class="icon"
                  alt="icon"></span>
              <span class="info"><img src="../../public/assets/icons/location.svg" class="icon" alt="icon">{{
                animal.localizacao }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import femaleIcon from '../../public/assets/icons/female.svg';
import maleIcon from '../../public/assets/icons/male.svg';

export default {
  data() {
    return {
      animalList: [
        {
          id: 1,
          img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhZ2xlfGVufDB8fDB8fHww",
          name: "Marley",
          sexo: "Macho",
          idade: "3 anos",
          localizacao: "Centro, Itajaí - SC",
        },
        {
          id: 2,
          img: "https://images.unsplash.com/photo-1518288774672-b94e808873ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2F0byUyMGJyYW5jb3xlbnwwfHwwfHx8MA%3D%3D",
          name: "Milkshake",
          sexo: "Femea",
          idade: "2 anos",
          localizacao: "Fazenda, Itajaí - SC",
        },
        {
          id: 3,
          img: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhY2hvcnJvfGVufDB8fDB8fHww",
          name: "Pirata",
          sexo: "Macho",
          idade: "6 anos",
          localizacao: "Cordeiros, Itajaí - SC",
        }
      ]
    }
  },
  methods: {
    getGenderIcon(sexo) {
      if (sexo.toLowerCase() === "femea") {
        return femaleIcon;
      } else {
        return maleIcon;
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.container {
  background-color: var(--p5);

  .content {
    .text_body {
      width: 500px;
    }

    .pets_galery {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      margin-top: 20px;

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 360px;

        .pet_img {
          width: 320px;
          height: 300px;
          object-fit: cover;
          transform: translateY(20px);
        }

        &_infos {
          z-index: 1;
          width: 360px;
          padding: 20px;
          border-radius: 5px;
          background-color: var(--p6);

          .name {
            width: max-content;
            color: var(--c1);
            font: var(--cardtitle-font-composite);
          }

          .details {
            margin-top: 10px;
            color: var(--c5);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .info {
              width: 50%;
              font: var(--cardtag-font-composite);
              text-transform: uppercase;
              display: flex;
              gap: 5px;
              padding: 2px 0px;

              .icon {
                width: 20px;
              }
            }

            .info:nth-child(2) {
              flex-direction: row-reverse;
            }

            .info:nth-child(3) {
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 450px) {
  .container{
    .content{
      .title{
        width: max-content;
        }
        .text_body{
        width: auto;
      }
      .pets_galery{
        gap: 14px;
        .card{
          width: 100%;
          .pet_img{
            width: 300px;
            height: 250px;
          }
          &_infos{
            width: 350px;
          }
        }
      }
    }
  }
}
</style>
