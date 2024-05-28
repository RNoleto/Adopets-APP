<template>
    <section class="content">
        <p class="title">Posts.</p>
        <p class="text_body">Fique por dentro de tudo quando o assunto é mundo pet.</p>
        <div class="post_galery">
            <div class="card_post" v-for="post in posts" :key="post.id">
                <img class="img_post" :src="post.img" :alt="post.title">
                <div class="card_infos">
                    <p class="card_title">{{ post.title }}</p>
                    <p class="card_date">{{ post.date }}</p>
                    <img class="dec" src="../../public/assets/icons/dec_black.svg" alt="dec">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    img: 'https://images.unsplash.com/photo-1450096315186-13dc369ab43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    title: 'Dicas para aproveitar a viagem com seu pet.',
                    date: "05/05/2024"
                },
                {
                    id: 2,
                    img: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldHN8ZW58MHx8MHx8fDA%3D',
                    title: 'Por que adotar um animal de estimação',
                    date: "02/05/2024"
                },
                {
                    id: 3,
                    img: 'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldCUyMHB1cHB5c3xlbnwwfHwwfHx8MA%3D%3D',
                    title: 'Primeiros cuidados com filhotes.',
                    date: "20/04/2024"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.post_galery{
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    .card_post{
        width: 560px;
        display: flex;
        flex-direction: column;
        background-color: var(--p5);
        border-radius: 5px;
        .img_post{
            object-fit: cover;
        }
        .card_infos{
            padding: 10px 16px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .card_title{
                font: var(--post-title-font-composite);
                color: var(--c2);
                position: relative;
                width: 100%;
                &::before{
                    position: absolute;
                    content: ' ';
                    width: 4px;
                    height: 24px;
                    top: 8px;
                    left: -8px;
                    background-color: var(--p2);
                }
            }
            .card_date{
                margin-top: 10px;
                color: var(--c4);
                font: var(--post-date-font-composite);
            }
            .dec{
                width: 50px;
            }
        }

    }
}

</style>