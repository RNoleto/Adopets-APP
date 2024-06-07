<template>
  <div class="content">
    <p class="title">Posts.</p>
    <p class="text_body">Fique por dentro de tudo quando o assunto é mundo pet.</p>
    <button>ver mais posts</button>
    <div class="posts_galery">
      <div class="featured_post">
        <img class="featured_img"
          src="https://images.unsplash.com/photo-1450096315186-13dc369ab43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGV0JTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D"
          alt="imagem destaque">
        <div class="post_infos">
          <p class="title_post">Dicas para aproveitar a viagem com seu pet</p>
          <p class="date_post">22/05/2024</p>
          <img class="dec" src="../../public/assets/icons/dec.svg" alt="dec">
        </div>
      </div>
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
          date: '01/05/2024',
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldHN8ZW58MHx8MHx8fDA%3D',
          title: 'Por que adotar um animal de estimação',
          date: '10/03/2024',
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHN8ZW58MHx8MHx8fDA%3D',
          title: '10 dicas para cuidar do seu gato',
          date: '15/02/2024',
        }
      ]
    }
  },
};
</script>

<style scoped lang="scss">
.title {
  color: var(--c11);
}

.text_body {
  color: var(--c9);
  width: 500px;
}

.posts_galery {
  margin-top: 20px;
  display: flex;
  gap: 40px;

  .featured_post {
    width: 660px;
    border-radius: 5px;
    background-color: var(--c2);
    box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.10);

    .featured_img {
      width: 100%;
    }

    .post_infos {
      position: relative;
      padding: 10px 10px 40px 16px;

      .title_post {
        color: var(--c11);
        font: var(--post-title-font-composite);

        &::before {
          content: "";
          display: inline-block;
          margin-right: 2px;
          width: 4px;
          height: 22px;
          background-color: var(--p2);
        }
      }

      .date_post {
        color: var(--c9);
        margin-top: 10px;
        font: var(--post-date-font-composite);
      }

      .dec {
        position: absolute;
        width: 54px;
        right: 10px;
        bottom: 10px;
      }
    }
  }

  .other_posts {
    display: flex;
    flex-direction: column;
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
}

@media (max-width: 450px) {
  .posts_galery{
    display: flex;
    flex-wrap: wrap;
    .featured_post{
      .post_infos{
        .title_post{
          font: 600 28px/38px var(--title-font);
        }
        .date_post{
          font: 600 14px/20px var(--title-font);
        }
        .dec{
          width: 35px;
          height: auto;
        }
      }
    }
    .other_posts{
      .card_post{
        .post_infos{
          .title_post{
            font: 600 16px/22px var(--title-font);
          }
          .date_post{
            font: 600 10px/18px var(--title-font);
          }
          .dec{
            width: 25px;
            height: auto;
            bottom: 20px;
          }
        }
      }
    }
  }
}
</style>
