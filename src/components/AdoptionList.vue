<template>
    <div class="content">
        <div class="info">
            <p class="title">Adoção.</p>
            <p class="text_body">Aqui você encontra os nossos amiguinhos que estão cheios de amor e a espera de um lar.</p>
            <button>Veja mais pets <span>&rarr;</span></button>
        </div>
        <div class="pet_galery">
            <div v-for="animal in animalList" :key="animal.key" class="pet_card">
                <img :src="animal.img" :alt="animal.name">
                <p>{{ animal.name }}</p>
            </div>
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
                }
                // {
                //     id: 4,
                //     img: "https://images.unsplash.com/photo-1615266508000-63ac219ac378?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                //     name: "Fred",
                // }
            ]
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
        justify-content: space-between;
        gap: 40px;
        .pet_card{
            max-width:360px;
        }
    }
}
</style>