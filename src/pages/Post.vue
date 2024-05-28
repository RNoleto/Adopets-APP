<template>
    <section class="content">
        <p class="title">Dicas para aproveitar a viagem com seu pet.</p>
        <p class="subtitle">Torne a Jornada Confortável e Divertida para Todos.</p>
        <img class="img_post"
            src="https://media.istockphoto.com/id/1344954298/pt/foto/family-with-dog-in-the-car.webp?b=1&s=170667a&w=0&k=20&c=7kxvdgLilXCJGPgv1h38zPsBJGK3Xg8_P81siYo6Png="
            alt="">
        <div class="text_body">
            <p>Viajar com seu pet pode ser uma experiência maravilhosa, mas exige um pouco de planejamento. Aqui estão
                algumas dicas para garantir que tudo corra bem:
            </p>
            <p>
                <span class="topic">1. Prepare-se com Antecedência:</span> Verifique as regras e políticas do transporte e da acomodação escolhida.
                Certifique-se de que seu pet está com as vacinas em dia e leve todos os documentos necessários.
            </p>
            <p>
                <span class="topic">2. Kit de Viagem:</span> Leve um kit com os itens essenciais, como água, comida, tigelas, brinquedos favoritos,
                cobertor e medicamentos. Uma caixa de transporte segura e confortável também é fundamental para manter
                seu
                pet seguro durante o trajeto.
            </p>
            <p>
                <span class="topic">3. Paradas Regulares:</span> Planeje paradas regulares para que seu pet possa fazer suas necessidades, alongar
                as
                pernas e tomar água. Isso ajuda a evitar o estresse e mantém todos confortáveis.
            </p>
            <p>
                <span class="topic">4. Mantenha a Rotina:</span> Tente manter os horários das refeições e das brincadeiras o mais próximo possível
                da
                rotina habitual. Isso ajuda a reduzir a ansiedade do seu pet em um ambiente novo.
            </p>
            <p>
                <span class="topic">5. Identificação:</span> Certifique-se de que seu pet está devidamente identificado com uma coleira e uma
                etiqueta
                contendo seu nome e número de telefone. Em caso de fuga, isso aumenta as chances de reencontro rápido.
            </p>
            <p>
                Seguindo essas dicas simples, você pode garantir que sua viagem com seu pet seja segura, confortável e
                cheia
                de momentos felizes!
            </p>
        </div>
    </section>
    <div class="other_posts">
        <div class="card_post">
          <img
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0c3xlbnwwfHwwfHx8MA%3D%3D"
            alt="roedores">
          <div class="post_infos">
            <p class="title_post">Cuidados com alimentação.</p>
            <p class="date_post">01/03/2024</p>
            <img class="dec" src="../../public/assets/icons/dec.svg" alt="dec">
          </div>
        </div>
        <div class="card_post">
          <img
            src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmlsaG90ZXN8ZW58MHx8MHx8fDA%3D"
            alt="filhotes">
          <div class="post_infos">
            <p class="title_post">Primeiros cuidados com filhotes.</p>
            <p class="date_post">23/02/2024</p>
            <img class="dec" src="../../public/assets/icons/dec.svg" alt="dec">
          </div>
        </div>
        <div class="card_post">
          <img
            src="https://images.unsplash.com/photo-1590852679106-21db332081e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwc2xlZXB8ZW58MHx8MHx8fDA%3D"
            alt="cat">
          <div class="post_infos">
            <p class="title_post">Conheça seu gato.</p>
            <p class="date_post">23/02/2024</p>
            <img class="dec" src="../../public/assets/icons/dec.svg" alt="dec">
          </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    color: var(--c11);
    position: relative;
    &::before{
        position: absolute;
        content: '';
        top: 8px;
        left: -8px;
        width: 4px;
        height: 56px;
        background-color: var(--p2);
    }
}

.subtitle {
    margin-top: 32px;
    color: var(--c9);
}

.img_post {
    margin-top: 60px;
    object-fit: cover;
    width: 1160px;
    height: 400px;
}

.text_body {
    color: var(--c10);
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .topic{
        color: var(--c10);
        font-weight: bold;
    }
}
.other_posts {
    margin: 0 auto ;
    width: 1420px;
    display: flex;
    justify-content: space-between;
    gap: 30px;

    .card_post {
      width: 100%;
      display: flex;
      align-items: center;
      
      img {
        width: 200px;
        height: 118px;
        border-radius: 5px;
        z-index: 1;
      }

      .post_infos {
        background-color: var(--c2);
        border-radius: 5px;
        height: 158px;
        width: 100%;
        position: relative;

        &::before {
          position: absolute;
          content: "";
          display: inline-block;
          left: -99px;
          width: 100px;
          height: 158px;
          background-color: var(--c2);
          border-radius: 5px 0px 0px 5px;
        }

        .title_post {
          display: flex;
          margin: 30px 0px 0px 18px;
          color: var(--c11);
          font-size: 18px !important;
          font: var(--post-other-title-font-composite);

          &::before {
            content: "";
            display: inline-block;
            margin-right: 4px;
            width: 4px;
            height: 18px;
            transform: translateY(2px);
            background-color: var(--p2);
          }
        }

        .date_post {
          font-size: 12px !important;
          margin-left: 26px;
          color: var(--c9);
          font: var(--post-other-date-font-composite);
        }

        .dec {
          position: absolute;
          width: 50px;
          right: 10px;
          bottom: -20px;
        }
      }
    }
  }
</style>