<template>
    <div class="content">
        <div class="info">
            <p class="title">Adoção.</p>
            <p class="text_body">Aqui você encontra os nossos amiguinhos que estão cheios de amor e a espera de um lar.</p>
            <button>Veja mais pets</button>
        </div>
        <div class="pet_galery">
            <div v-for="animal in animalList" :key="animal.key" class="pet_card">
                <img class="img_animal" :src="animal.img" :alt="animal.name">
                <p class="card_title">{{ animal.name }}</p>
                <div class="details">
                    <span class="card_tag top"> <img :src="getGenderIcon(animal.sexo)" alt="icon" class="icon"> <p>{{ animal.sexo }}</p></span>
                    <span class="card_tag"> <img src="../../public/assets/icons/event_available.svg" alt="icon" class="icon"> <p>{{ animal.idade }}</p></span>
                    <span class="card_tag"> <img src="../../public/assets/icons/location.svg" alt="icon" class="icon"> <p>{{ animal.localizacao }}</p></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import femaleIcon from '../../public/assets/icons/female.svg';
import maleIcon from '../../public/assets/icons/male.svg';

export default{
    data(){
        return{
            animalList:[
                {
                    id: 1,
                    img: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Mingau",
                    sexo: "Femea",
                    idade: "2 anos",
                    localizacao: "Centro, Itajaí - SC",
                },
                {
                    id: 2,
                    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Bolinha",
                    sexo: "Macho",
                    idade: "5 anos",
                    localizacao: "Fazenda, Itajaí - SC",
                },
                {
                    id: 3,
                    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
                    name: "Felix",
                    sexo: "Macho",
                    idade: "3 anos",
                    localizacao: "Dom Bosco, Itajaí - SC",
                }
            ]
        }
    },
    methods: {
    getGenderIcon(sexo) {
      if (sexo.toLowerCase() === "femea") {
        return femaleIcon;
      } else if (sexo.toLowerCase() === "macho") {
        return maleIcon;
      }
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
    background-color: var(--p5);
    .info{
        max-width: 500px;
    }
    .pet_galery{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        gap: 40px;
        .pet_card{
            width: 360px;
            .img_animal{
                object-fit: cover;
                max-height: 280px;
            }
            .details{
                margin-top: 5px;
                display: flex;
                gap: 20px ;
                row-gap: 5px;
                justify-content: start;
                flex-wrap: wrap;
                .icon{
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
}
</style>