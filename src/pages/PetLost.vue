<template>
    <section class="content">
        <p class="title">Oi, estou perdido.</p>
        <p class="text_body">Oi amigos humanos, eu sou um pet perdido, me ajude a voltar para a minha casa, estou
            com saudades.</p>
        <div class="pet">
            <div class="images_pet">
                <img class="img_first" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhZ2xlfGVufDB8fDB8fHww"
                    alt="">
                        <div class="img_last">
                            <img src="https://images.unsplash.com/photo-1610174830067-9382e4953a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWdsZXxlbnwwfHwwfHx8MA%3D%3D" alt="">
                            <img src="https://images.unsplash.com/photo-1610174830067-9382e4953a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWdsZXxlbnwwfHwwfHx8MA%3D%3D" alt="">
                        </div>
            </div>
            <div class="infos">
                <div class="box_name"><p class="title">Marley</p></div>
                    <p class="text_body">Estamos desesperados para encontrar nosso amado cachorro Marley, um beagle de 3 anos, que se perdeu na última sexta-feira, 20 de maio, por volta das 17h30. Marley foi visto pela última vez perto do Parque Central, na Rua das Flores, em São Miguel.</p>
                    <p class="text_body">Marley é um beagle de porte médio, com pelagem tricolor (preto, branco e marrom). Ele tem uma mancha branca característica na testa e usa uma coleira azul com seu nome e nosso número de telefone. Marley é muito amigável, mas pode estar assustado e desorientado.</p>
                    <p class="text_body">Pedimos a todos que, por favor, fiquem atentos e, se virem Marley ou tiverem qualquer informação sobre seu paradeiro, entrem em contato conosco imediatamente. Nosso telefone é (11) 99999-1234. Estamos oferecendo uma recompensa pela sua localização e retorno seguro.</p>
                    <p class="text_body">Muito obrigado pela ajuda de todos!</p>
                    <p class="text_body">Atenciosamente,</p>
                    <p class="text_body">João e Maria Silva Rua das Margaridas, 123, São Miguel</p>                
            </div>
        </div>
    </section>
</template>

<script></script>

<style lang="scss" scoped>
.title {
    color: var(--c11);
}

.text_body {
    width: 660px;
}

.pet {
    margin-top: 60px;
    display: flex;
    gap: 40px;

    .images_pet {
        z-index: 1;
      .img_first {
        width: 660px;
        height: 600px;
        object-fit: cover;
        box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);
      }

      .img_last {
        display: flex;
        gap: 20px;
        margin-top: 20px;

        img {
          width: 320px;
          height: 340px;
          object-fit: cover;
          box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);
        }
      }
    }
    .infos{
        margin-top: 100px;
        width: 400px;
        .box_name{
            transform: translateX(-43px);
            background-color: var(--p6);
            .title{
                padding: 40px;
                color: var(--c2);
            }
        }
    }
}
</style>