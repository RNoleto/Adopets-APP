<template>
    <div class="container">
        <h3 class="title">Meus Pets</h3>
        <div class="count">
            <p class="text count_total">Total de pets: {{ totalAnimals }}</p>
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
            myPets: [],
            breeds: [],
            images: [],
        }
    },
    mounted() {
        this.loadMyPets();
        this.loadBreeds();
    },
    computed: {
        totalAnimals() {
            return this.myPets.length;
        },
        myPetsWithImages() {
            return this.myPets.map(pet => {
                const breed = this.breeds.find(b => b.id === pet.ref_id_breed);
                const img = this.images[pet.id] || 'https://via.placeholder.com/150';
                return {
                    ...pet,
                    img,
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
                    this.loadImages();
                })
                .catch((error) => {
                    console.error('Erro ao carregar meus pets', error);
                });
        },
        loadBreeds() {
            axios.get('/breeds')
                .then((response) => {
                    this.breeds = response.data;
                })
                .catch((error) => {
                    console.log('Erro ao carregar raças', error);
                });
        },
        async loadImages() {
            const imagePromises = this.myPets.map(async (pet) => {
                try {
                    const response = await axios.get(`/animalsimage/${pet.id}`, { responseType: 'blob' });
                    const blob = new Blob([response.data]);
                    this.images[pet.id] = URL.createObjectURL(blob);
                } catch (error) {
                    console.error(`Erro ao carregar imagem do pet com ID ${pet.id}`, error);
                    this.images[pet.id] = 'https://via.placeholder.com/150';
                }
            });

            await Promise.all(imagePromises);
        },
        editPet(id) {
            const selectedPet = this.myPets.find(pet => pet.id === id);
            this.$router.push({ name: 'PetPage', params: { id }, state: { pet: selectedPet } });
        },
        getGender(gender) {
            return gender === "M" ? "Masculino" : "Feminino";
        },
        getSpecieName(specieId) {
            const specie = this.species.find(s => s.id === specieId);
            console.log(specie);
            return specie ? specie.specie : 'Especie não encontrada';
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
