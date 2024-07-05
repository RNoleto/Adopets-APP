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
                        <p class="text">{{ formatDate(mypet.birth) }}</p>
                        <p class="text">{{ mypet.breed }}</p>
                        <router-link :to="{ name: 'PetPage', params: { id: mypet.id } }" class="link">Página do
                            Pet</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '@/stores/userStore';

export default {
    name: 'PetCard',
    setup() {
        const userStore = useUserStore();

        // Carregar os pets ao montar o componente
        const loadMyPets = async () => {
            await userStore.fetchPets();
        };

        // Computar total de animais
        const totalAnimals = computed(() => userStore.pets.length);

        // Computar pets com imagens
        const myPetsWithImages = computed(() => {
            return userStore.pets.map(pet => ({
                ...pet,
                img: `https://via.placeholder.com/150`, // Substitua pelo caminho real da imagem
            }));
        });

        // Métodos de formatação e manipulação de dados
        const getGender = (gender) => {
            return gender === 'M' ? 'Masculino' : 'Feminino';
        };

        const formatDate = (birth) => {
            const [year, month, day] = birth.split('-');
            return `${day}/${month}/${year}`;
        };

        return {
            loadMyPets,
            totalAnimals,
            myPetsWithImages,
            getGender,
            formatDate
        };
    },
};
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
            width: calc(calc(100% / 3) - 7px);
            height: 180px;
            overflow: hidden;
            position: relative;
            display: flex;
            border-radius: 10px;
            box-shadow: 1px 1px 5px rgba(36, 37, 42, 0.3);

            .photo {
                height: 100%;
                position: absolute;
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
