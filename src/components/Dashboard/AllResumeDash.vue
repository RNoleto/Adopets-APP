<template>
    <p class="title">Resumo Completo.</p>
    <div class="cards">
        <Card>
            <template #description>
                <p class="text_body">Usuários: <span class="count">0</span></p>
                <p class="text_body">Pets: <span class="count">0</span></p>
            </template>
        </Card>
        <Card>
            <template #card_top>
                <p class="text_body">Animais</p>
            </template>
            <template #description>
                <p class="text_body">Especies: <span class="count">0</span></p>
                <p class="text_body">Raças: <span class="count">0</span></p>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from '../../components/Card.vue';
export default{
    name: 'AllResume',
    return(){
        data()
    },
    components:{
        Card,
    }
}
</script>

<style lang="scss" scoped>
.title{
    color: var(--c9);
}
.cards{
    display: flex;
    gap: 10px;
    .card{
        width: 250px;
        display: flex;
        justify-content: center;
        .text_body{
            margin: 0px;
            color: var(--p1);
        }
        .count{
            color: var(--p3);
        }
    }
}
</style>