<template>
    <div class="content">
        <div class="images">
            <img class="img1" src="../../public/assets/img/about1.webp" alt="">
            <img class="img2" src="../../public/assets/img/about2.webp" alt="">
            <img class="img3" src="../../public/assets/img/about3.webp" alt="">
        </div>
        <div class="info">
            <p class="title">Sobre nós.</p>
            <p class="text_body">Somos mais do que apenas uma plataforma de adoção de animais; somos uma comunidade
                dedicada ao bem-estar dos nossos amigos peludos e ao incentivo da adoção responsável de pets.
                Acreditamos que cada patinha merece um lar amoroso e seguro, e estamos empenhados em fazer a diferença
                na vida desses animais e no mundo que compartilhamos.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    margin-top: 60px;
    display: flex;
    // justify-content: space-between;
    gap: 70px;
    align-items: center;
    justify-content: center;

    .images {
        position: relative;
        width: 380px;
        height: 500px;

        img {
            position: absolute;
        }

        .img1 {
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
            z-index: 2;
            box-shadow: 0px 1px 2px rgba($color: #000000, $alpha: 0.1);
        }

        .img2 {
            top: 40px;
            right: 0;
            width: 200px;
            height: 300px;
            z-index: 1;
            box-shadow: 0px 1px 2px rgba($color: #000000, $alpha: 0.1);
        }

        .img3 {
            bottom: 0;
            right: 67px;
            width: 200px;
            height: 200px;
            box-shadow: 0px 1px 2px rgba($color: #000000, $alpha: 0.1);
        }
    }

    .info {
        width: 720px;
        height: 320px;

        .title {
            color: var(--c11);
        }

        .text_body {
            color: var(--c10);
        }
    }
}
</style>