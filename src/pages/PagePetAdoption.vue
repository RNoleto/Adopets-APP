<template>
    <div class="content">
        <p class="title">Adoção.</p>
        <p class="text_body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, consectetur ex. Iste eveniet.</p>
        <div class="species">
            <div class="category">Todos</div>
            <div class="category">Cachorro</div>
            <div class="category">Gato</div>
            <div class="category">Passaro</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content{
    height: 100vh;
    .title{
        color: var(--c11);
    }
    .text_body{
        width: 550px;
    }
    .species{
        margin-top: 20px;
        display: flex;
        gap: 20px;
        .category{
            width: 100px;
            height: 44px;
            align-content: center;
            padding: 9px 5px;
            border-radius: 5px;
            background-color: var(--c4);
        }
    }
}
</style>