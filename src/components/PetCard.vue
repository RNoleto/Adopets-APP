<template>
    <div class="container">
        <h3 class="title">Meus Pets</h3>
        <div class="count">
            <p class="text count_total">Total de pets: {{ totalAnimals }}</p>
            <div class="count_species">
                <div v-for="(count, specie) in speciesCount" :key="specie" class="specie">
                    <p class="text">{{ specie }}: {{ count }}</p>
                </div>
            </div>
        </div>
        <div class="pets">
            <div v-for="(mypet, index) in myPetsWithImages" :key="index" class="card">
                <img :src="mypet.img" :alt="mypet.name" class="photo">
                <div class="infos">
                    <div class="content">
                        <p class="title">{{ mypet.name }}</p>
                        <p class="text">{{ getGender(mypet.gender) }}</p>
                        <p class="text">{{ mypet.birth }}</p>
                        <p class="text">{{ mypet.breedName }}</p>
                        <router-link :to="{ name: 'PetPage', params: { id: mypet.id } }" class="link">Página do
                            Pet</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

import axios from 'axios';

export default {
    name: 'PetCard',
    data() {
        return {
            myPets: [
                {
                    id: 1 ,
                    status: 0,
                    name: 'Snow',
                    gender: "M",
                    birth: "18/08/2019",
                    ref_id_specie: 1,
                    ref_id_breed: 1,
                    ativo: 1,
                }
            ],
            breeds:[
                {
                    id: 1,
                    breed: "Poodle",
                }
            ],
            files: [
                {
                    id: 1,
                    name: 'Snow.jpg',
                    ref_id_breed: 1,
                    ref_id_animal: 1,
                    path: 'https://images.unsplash.com/photo-1581562324420-eff2f5aaa4b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9vZGxlfGVufDB8fDB8fHww',
                }
            ],
        }
    },
    mounted() {
        this.loadMyPets();
    },
    computed: {
        totalAnimals() {
            return this.myPets.length;
        },
        speciesCount() {
            const count = {};
            this.myPets.forEach(pet => {
                if (count[pet.specie]) {
                    count[pet.specie]++;
                } else {
                    count[pet.specie] = 1;
                }
            });
            return count;
        },
        myPetsWithImages(){
            return this.myPets.map(pet => {
                const file = this.files.find(f => f.ref_id_animal === pet.id);
                const breed = this.breeds.find(b => b.id === pet.ref_id_breed);
                return {
                    ...pet,
                    img: file ? file.path : 'https://via.placeholder.com/150',
                    breedName: breed ? breed.breed : 'Unknown'
                };
            });
        }
    },
    methods: {
        loadMyPets() {
            axios.get('/animals')
                .then((response) => {
                    this.myPets = response.data;
                })
                .catch((error) => {
                    console.error('Erro ao carregar meus pets', error);
                });
        },
        editPet(id) {
            const selectedPet = this.myPets.find(pet => pet.id === id);
            this.$router.push({ name: 'PetPage', params: { id }, state: { pet: selectedPet } });
        },
        getGender(gender){
            return gender === "M" ? "Masculino" : "Feminino";
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    .title {
        font: 600 34px/42px var(--title-font);
        color: var(--p6);
    }

    .count {
        width: 100%;
        margin: 10px 0px;

        &_total {
            width: max-content;
            padding: 10px 20px;
            border: 1px solid var(--p2);
            background-color: var(--p1);
            border-radius: 5px;
            color: var(--c1);
        }

        .count_species {
            display: flex;
            gap: 12px;

            .specie {
                margin-top: 10px;
                border: 1px solid var(--p2);
                padding: 10px 20px;
                border-radius: 5px;
                color: var(--p5);
            }
        }
    }

    .pets {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .card {
            width: calc(calc(100% / 4) - 8px);
            height: 180px;
            overflow: hidden;
            position: relative;
            display: flex;
            border-radius: 10px;
            box-shadow: 1px 1px 5px rgba(36, 37, 42, 0.3);

            .photo {
                height: 100%;
                position: absolute;
                // z-index: -1;
                object-fit: cover;
                object-position: left center;
            }

            .infos {
                width: 120px;
                align-content: center;
                background: linear-gradient(90deg, rgba(255, 253, 253, .5) 0%, rgba(255, 255, 255, .3) 50%, rgba(254, 254, 254, 0) 100%);
                backdrop-filter: blur(2px);

                .content {
                    padding: 10px;

                    .title {
                        color: var(--p3);
                        width: max-content;
                        font: 600 24px/32px var(--title-font);
                    }

                    .link {
                        margin-top: 20px;
                        color: var(--p5);
                    }
                }
            }
        }
    }
}
</style>