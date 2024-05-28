<template>
    <div class="content">
        <p class="title">Adoção.</p>
        <p class="text_body">Aqui você encontra alguns dos nossos amiguinhos disponíveis para adoção.</p>
        <div class="species">
            <div class="category active">
                <img src="../../public/assets/icons/animal.svg" alt="icon" class="icon">
                <div class="info">
                    <p class="specie">Todos</p>
                    <p class="count">Total: 50</p>
                </div>
            </div>
            <div class="category">
                <img src="../../public/assets/icons/dog.svg" alt="icon" class="icon">
                <div class="info">
                    <p class="specie">Cachorro</p>
                    <p class="count">Total: 30</p>
                </div>
            </div>
            <div class="category">
                <img src="../../public/assets/icons/animal.svg" alt="icon" class="icon">
                <div class="info">
                    <p class="specie">Gato</p>
                    <p class="count">Total: 15</p>
                </div>
            </div>
            <div class="category"><img src="../../public/assets/icons/bird.svg" alt="icon" class="icon">
                <div class="info">
                    <p class="specie">Ave</p>
                    <p class="count">Total: 5</p>
                </div>
            </div>
        </div>
        <div class="animals">
            <div class="card" v-for="animal in animalList" :key="animal.key">
                <img class="img_pet" :src="animal.img" :alt="animal.name">
                <div class="info">
                    <p class="name">{{ animal.name }}</p>
                    <div class="detail">
                        <p class="gender"><img :src="getGenderIcon(animal.sexo)" alt="icon" class="icon">{{
                            animal.sexo }}
                        </p>
                        <p class="localization"><img src="../../public/assets/icons/location.svg" alt="icon"
                                class="icon">
                            {{ animal.localizacao }}</p>
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
                    img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww",
                    name: "Malhado",
                    sexo: "Macho",
                    localizacao: "Centro, Itajaí - SC",
                },
                {
                    id: 2,
                    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Bolinha",
                    sexo: "Macho",
                    localizacao: "Fazenda, Itajaí - SC",
                },
                {
                    id: 3,
                    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
                    name: "Mingau",
                    sexo: "Femea",
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
.content {
    height: 100vh;

    .title {
        color: var(--c11);
    }

    .text_body {
        width: 550px;
    }

    .species {
        margin-top: 20px;
        display: flex;
        gap: 20px;

        .category.active {
            background-color: var(--p6);

            .info {
                padding: 0px 10px 0px 0px;

                .specie {
                    font-weight: bold;
                    color: var(--c1);
                    letter-spacing: 1px;
                }

                .count {
                    font-weight: bold;
                    color: var(--c5);
                    letter-spacing: 1px;
                }
            }
        }

        .category {
            min-width: 100px;
            height: 44px;
            display: flex;
            gap: 8px;
            align-items: center;
            padding: 9px 5px;
            border-radius: 5px;
            background-color: var(--c4);

            .info {
                padding: 0px 10px 0px 0px;
                text-transform: uppercase;

                .specie {
                    color: var(--c11);
                    font-size: 12px;
                    letter-spacing: 1px;
                }

                .count {
                    color: var(--c10);
                    font-size: 10px;
                    letter-spacing: 1px;
                }
            }
        }
    }

    .animals {
        margin-top: 20px;
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
        justify-content: start;

        .card {
            position: relative;

            .img_pet {
                width: 360px;
                height: 300px;
                object-fit: cover;
                box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);
            }

            .info {
                position: absolute;
                left: 10px;
                top: 218px;
                width: 340px;
                padding: 10px;
                border-radius: 5px;
                background-color: var(--p6);
                color: var(--c1);

                .name {
                    width: max-content;
                    color: var(--c1);

                    &::before {
                        content: '';
                        width: 4px;
                        height: 20px;
                        transform: translateY(-2px);
                        background-color: var(--p2);
                    }
                }

                .detail {
                    display: flex;
                    margin-top: 10px;
                    justify-content: space-between;

                    .icon {
                        width: 24px;
                        height: 24px;
                    }

                    .gender,
                    .localization {
                        display: flex;
                        gap: 5px;
                        align-items: center;
                    }

                }
            }
        }
    }
}
</style>