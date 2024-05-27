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
            <div class="card">
                <img class="img_pet" src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww" alt="pet">
                <div class="info">
                    <p class="name">Malhado</p>
                    <div class="detail">
                        <p class="gender">Macho</p>
                        <p class="localization">Centro, Itajaí - SC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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

        .category.active{
            background-color: var(--p6);
            .info{
                padding: 0px 10px 0px 0px;
                .specie{
                    font-weight: bold;
                    color: var(--c1);
                    letter-spacing: 1px;
                }
                .count{
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

            .icon {
                width: 24px;
                height: 24px;
            }

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

    .animals{
        margin-top: 20px;
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
        justify-content: start;
        .card{
            position: relative;
            .img_pet{
                width: 360px;
                height: 300px;
                object-fit: cover;
                box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);
            }
            .info{
                position: absolute;
                left: 10px;
                top: 218px;
                width: 340px;
                padding: 10px;
                border-radius: 5px;
                background-color: var(--p6);
                color: var(--c1);
            }
        }
    }
}
</style>