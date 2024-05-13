<template>
    <h3 class="title">Disponiveis para Adoção</h3>
    <p class="text" >Aqui você encontra os nossos amiguinhos que estão cheios de amor e a espera de um lar</p>
    <div class="list">
        <div v-for="animal in animalList" :key="animal.key" class="card">
            <img :src="animal.img" :alt="animal.name" class="image">
            <p class="title">{{ animal.name }}</p>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            animalList:[
                {
                    id: 1,
                    img: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Mingau",
                },
                {
                    id: 2,
                    img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Bolinha",
                },
                {
                    id: 3,
                    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
                    name: "Felix",
                },
                {
                    id: 4,
                    img: "https://images.unsplash.com/photo-1615266508000-63ac219ac378?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    name: "Fred",
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
//========== Mobile First ==========//
.text{
    margin-top: 15px;
}
.list{
    padding: 10px 0px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    .card{
        overflow: hidden;
        width: 165px;
        height: 150px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        position: relative;
        box-shadow: 1px 1px 5px rgba($color: #000000, $alpha: .3);
        .image{
            position: absolute;
            z-index: -1;
        }
        .title{
            font-weight: bold;
            color: var(--color-4);
            text-align: center;
        }
    }
}
</style>