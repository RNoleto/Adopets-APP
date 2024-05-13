<template>
    <div class="container">
        <div class="content">
            <h1 class="title">Todos os Posts</h1>
            <p class="subtitle">Fique por dentro de todas as noticias do mundo animal!</p>
            <!-- Organização de todos os posts e paginate -->
            <div class="posts">
                <div v-for="post in posts" :key="post.id" class="card">
                    <img :src="post.img" alt="imagem">
                    <div class="description">
                        <p class="date">{{ post.date }}</p>
                        <p class="title">{{ post.title }}</p>
                        <p class="text">{{ post.subtitle }}</p>
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
                    date: "05/05/2024",
                    subtitle: 'Dicas para encontrar o companheiro perfeito'
                },
                {
                    id: 2,
                    img: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldHN8ZW58MHx8MHx8fDA%3D',
                    title: 'Por que adotar um animal de estimação',
                    date: "02/05/2024",
                    subtitle: 'Razões para escolher a adoção'
                },
                {
                    id: 3,
                    img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHN8ZW58MHx8MHx8fDA%3D',
                    title: '10 dicas para cuidar do seu gato',
                    date: "20/04/2024",
                    subtitle: 'Como proporcionar uma vida saudável ao seu felino'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    .content {
        .posts{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            // gap: .5rem;
            margin: 10px 0px;
            .card {
                width: 100%;
                display: flex;
                padding: 10px 5px;
                gap: 10px;
                align-items: top;
                border-bottom: 1px solid hsl(0, 0%, 50%);
                transform: all;
                &:hover{
                    transition: .5s ease-in-out;
                    border-radius: 10px;
                    background-color:var(--color-1);
                    box-shadow: 1px 1px 1px rgba($color: #000000, $alpha: .3);
                    .description{
                        .title,
                        .text,
                        .date{
                            color: var(--color-4);
                        }
                    }
                }
                
                img{
                    width: 120px;
                    height: 80px;
                    border-radius: 5px;
                    object-fit: cover;
                    object-position: center;
                }
                .description{
                    .title{
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 15px;
                    }
                    .text{
                        line-height: 13px;
                        text-align: start;
                    }
                }
            }
        }
    }
}
</style>