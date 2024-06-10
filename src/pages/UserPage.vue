<template>
    <div class="content">
        <p class="title">Página do Usuário.</p>
        <div class="user">
            <p class="text_body">Seja bem vindo {{ user.name }}!</p>
        </div>
                <ul class="menu">
                    <li><button @click="setActiveView('myInfos')">Meus dados</button></li>
                    <li><button @click="setActiveView('myPets')">Meus Pets</button></li>
                    <li><button @click="setActiveView('lostPets')">Pets Perdidos</button></li>
                </ul>
         <div class="conteudo">
            <div v-if="activeView === 'myInfos'">
                <p>Meus Dados de usuário</p>
            </div>
            <div v-if="activeView === 'myPets'">
                <PetCard/>
            </div>
            <div v-if="activeView === 'lostPets'">
                <p>Pets Perdidos</p>
            </div>
         </div>
    </div>
</template>

<script>
import PetCard from '../components/PetCard.vue';
export default{
    components:{
        PetCard,
    },
    data(){
        return{
            user:{
                id: 1,
                name: "Ramon Ribeiro Noleto",
            },
            activeView: 'dados',
        };
    },
    methods: {
        setActiveView(view){
            this.activeView = view;
        }
    }
}
</script>

<style lang="scss" scoped>
.content{
    height: 100vh; //Temporario
    .title{
        font: 600 32px/40px var(--body-font) ;
        color: var(--c10);
    }
    .user{
        margin-top: 24px;
        .text_body{
            color: var(--c9);
        }
    }
    .menu{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        li{
            button{
                font: 500 14px/14px var(--title-font);
            }
        }
    }
    .conteudo{
        margin-top: 24px;
    }
}
</style>