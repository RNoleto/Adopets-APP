<template>
    <div class="container">
        <h3 class="title">Meus Pets</h3>
        <div class="count">
            <p class="text">Total de pets {{ totalAnimals }}</p>
            <div v-for="(count, specie) in speciesCount" :key="specie">
                <p class="text">{{ specie }} : {{ count }}</p>
            </div>
        </div>
        <div class="pets">
            <div v-for="(mypet, index) in myPets" :key="index" class="card">
                    <img :src="mypet.img" :alt="mypet.name" class="photo">
                    <div class="infos">
                        <div class="content">
                            <p class="title">{{ mypet.name }}</p>
                            <p class="text">{{ mypet.sexo }}</p>
                            <p class="text">{{ mypet.birth_day }}</p>
                            <router-link :to="{ name: 'PetPage', params: { id: mypet.id }}">Página do Pet</router-link>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
    name: 'PetCard',
    data() {
        return {
            myPets: [
                {
                    id: 1,
                    name: "Snow",
                    specie: "Canina",
                    birth_day: "21/08/2017",
                    sexo: "Masculino",
                    img: "https://blog-static.petlove.com.br/wp-content/uploads/2022/11/10133544/nomes-para-Poodle-Petlove.jpg",
                },
                {
                    id: 2,
                    name: "Fred",
                    specie: "Canina",
                    birth_day: "10/09/2018",
                    sexo: "Masculino",
                    img: "https://petanjo.com/blog/wp-content/uploads/2017/04/17831622324_c688bcc556_b.jpg",
                }
                ,
                {
                    id: 3,
                    name: "Mingau",
                    specie: "Felina",
                    birth_day: "01/02/2023",
                    sexo: "Feminino",
                    img: "https://blog.cobasi.com.br/wp-content/webpc-passthru.php?src=https://blog.cobasi.com.br/wp-content/uploads/2021/04/gato-branco-conheca-as-principais-racas-e-caracteristicas-meio-2.png&nocache=1",
                },
                {
                    id: 4,
                    name: "Hantaro",
                    specie: "Roedor",
                    birth_day: "01/05/2024",
                    sexo: "Macho",
                    img: "https://media.istockphoto.com/id/184337772/pt/foto/que-chamou-me-hamster-an%C3%A3o-de-6-semanas-de-idade.webp?b=1&s=170667a&w=0&k=20&c=KYvcLlei3j6UI7yJ-MPGQMSa0gqNeaSFdwsJoVh0qHg=",
                }
            ]
        }
    },
    computed:{
        totalAnimals(){
            return this.myPets.length;
        },
        speciesCount(){
            const count = {};
            this.myPets.forEach(pet => {
                if(count[pet.specie]) {
                    count[pet.specie]++;
                } else {
                    count[pet.specie] = 1;
                }
            });
            return count;
        }
    },
    methods:{
        editPet(id){
            const selectedPet = this.myPets.find(pet => pet.id === id);
            this.$router.push({ name: 'PetPage', params: { id }, state: { pet: selectedPet }});
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    .count{
        background-color: gray;
        border-radius: 10px;
        padding: 10px;
        margin: 10px 0px;
    }
    .pets{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        .card{
            width: 100%;
            height: 180px;
            overflow: hidden;
            position: relative;
            display: flex;
            border-radius: 10px;
            box-shadow: 1px 1px 5px rgba(36, 37, 42, 0.3);
            .photo{
                height: 100%;
                position: absolute;
                z-index: -1;
                object-fit: cover;
                object-position: left center;
            }
            .infos{
                width: 120px;
                align-content: center;
                background: linear-gradient(90deg, rgba(255,253,253,.5) 0%, rgba(255,255,255,.3) 50%, rgba(254,254,254,0) 100%);
                backdrop-filter: blur(2px);
                .content{
                    padding: 10px;
                }
            }
        }
    }
}
</style>