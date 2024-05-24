<template>
  <div class="content">
    <p class="title">Posts.</p>
    <p class="text_body">Fique por dentro de tudo quando o assunto é mundo pet.</p>
    <button>ver mais posts</button>
    <div class="posts_galery">
      <div class="featured_post">
        <img class="featured_img" src="https://images.unsplash.com/photo-1450096315186-13dc369ab43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGV0JTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D" alt="imagem destaque">
        <div class="post_infos">
          <p class="title_post">Dicas para aproveitar a viagem com seu pet</p>
          <p class="date_post">22/05/2024</p>
        </div>
      </div>
      <div class="other_posts">
        <div class="card_post">
          <img src="https://images.unsplash.com/photo-1577099595920-bf19294bc408?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFtc3RlcnxlbnwwfHwwfHx8MA%3D%3D" alt="">
          <div class="post_infos">
              <p class="title_post">primeiro</p>
              <p class="date_post">01/03/2024</p>
          </div>
        </div>
        <div class="card_post">
          <p>segundo</p>
        </div>
        <div class="card_post">
          <div class="content">
            <p>terceiro</p>
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

.posts_galery{
  margin-top: 20px;
  display: flex;
  gap: 40px;
  .featured_post{
    width: 660px;
    border-radius: 5px;
    background-color: var(--c2);
    box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.10);
    .featured_img{
      width: 100%;
    }
    .post_infos{
      padding: 10px 10px 40px 16px;
      .title_post{
        color: var(--c11);
        font: var(--post-title-font-composite);
        &::before{
          content: "";
          display: inline-block;
          margin-right: 2px;
          width: 4px;
          height: 22px;
          background-color: var(--p2);
        }
      }
      .date_post{
        color: var(--c9);
        margin-top: 10px;
        font: var(--post-date-font-composite);
      }
    }
  }
  .other_posts{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    .card_post{
      width: 100%;
      display: flex;
      align-items: center;
      img{
        width: 200px;
        height: 118px;
        border-radius: 5px;
        z-index: 1;
      }
      .post_infos{
        background-color: var(--c2);
        border-radius: 5px;
        height: 158px;
        width: 100%;
        .title_post{
          color: var(--c11);
        }
      }
    }
  }
}
</style>
