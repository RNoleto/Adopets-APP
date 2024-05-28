<template>
  <div class="content">
    <p class="title">Nosso Pet.</p>
    <p class="text_body">Conheça nosso pet que está a procura de um lar cheio de amor. Seja o seu héroi.</p>
    <div class="infos_pet">
      <div class="images_pet">
        <img class="img_first"
          src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww"
          alt="malhado">
        <div class="img_last">
          <img
            src="https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="malhado">
          <img
            src="https://images.unsplash.com/photo-1477936432016-8172ed08637e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D"
            alt="malhado">
        </div>
      </div>
      <div class="text_pet">
        <p class="name">Malhado</p>
        <div class="details">
          <p>Macho</p>
          <p>5 Anos</p>
          <p>Centro, Itajaí - SC</p>
        </div>
        <div class="caracteristics">
          <p>Brincalhão</p>
          <p>Sociável</p>
          <p>Pequeno</p>
          <p>4 Kg</p>
        </div>
        <p class="text_body">
          Lorem ipsum dolor sit amet consectetur. Fringilla nunc semper neque duis. Porta donec a tristique libero
          ornare sed risus. Ultricies quis sed donec nunc ultricies nam sed. Ipsum vel nullam pellentesque fermentum
          augue volutpat. Rutrum ut adipiscing duis nunc ut placerat consectetur tortor.
        </p>
        <p class="text_body">
          Felis sagittis suspendisse ac facilisi. Ut quam sit metus sit facilisis mollis. Amet nulla mi dictum
          vestibulum nulla egestas sapien ultrices et. Egestas viverra est bibendum mauris nunc mauris semper at.
          Tristique varius etiam aliquam quisque ac volutpat sit. Ac pharetra arcu nulla mus.
        </p>
        <p class="text_body">
          Varius in sem tortor magna volutpat. Egestas eget volutpat posuere sed lacus nulla bibendum dui. Scelerisque
          laoreet ultrices nibh velit egestas nisl fringilla.
        </p>
        <button>Voltar para lista</button>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.content {

  .title {
    color: var(--c11);
  }

  .text_body {
    color: var(--c9);
    width: 460px;
  }

  .infos_pet {
    margin-top: 60px;
    display: flex;
    gap: 30px;

    .images_pet {
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

    .text_pet {
      .name {
        display: block;
        font-size: 64px;
        color: var(--c11);
        position: relative;
        margin-left: 5px;

        &::before {
          position: absolute;
          content: '';
          width: 6px;
          height: 60px;
          top: 5px;
          left: -10px;
          background-color: var(--p3);
        }
      }

      .details {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
      }

      .caracteristics {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>