<template>
  <div class="container">
    <div class="content">
      <div class="info">
        <p class="title">Adote amor, adote um pet.</p>
        <p class="text_body">Torne-se um herói peludo! Adote um amigo de quatro patas e mude uma vida para sempre.
          Nossos pets aguardam amor, cuidado e um lar. Faça a diferença hoje - traga alegria e amor para sua casa, adote
          um companheiro leal.</p>
        <button>
          Conheça o seu amiguinho <span>&rarr;</span>
        </button>
      </div>
      <img class="imgbanner" src="../../public/assets/img/petbanner.png" alt="dogbanner">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--p5);

  .content {
    justify-content: space-between;
    align-items: center;
    display: flex;
    gap: 70px;
    position: relative;
    height: 700px;

    .info {
      width: 540px;

      .title {
        color: var(--c2);
        margin-bottom: 36px;
      }
    }

    .imgbanner {
      width: 540px;
      top: 60px;
      right: 220px;
      position: absolute;
      box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.10);
    }
  }
}

// RESPONSIVIDADE

@media (max-width:1500px) and (min-width: 1450px) {
  .container {
    .content {
      .imgbanner {
        width: 480px;
      }
    }
  }
}

@media (max-width:1449px) {
  .container {
    .content {

      .imgbanner {
        width: 450px;
        position: relative;
        top: auto;
        right: auto;
      }
    }
  }
}

@media (max-width:1400px) {
  .container {
    .content {

      .imgbanner {
        width: 350px;
      }
    }
  }
}

@media (max-width: 1160px) {
  .container {
    .content {

      // flex-wrap: wrap;
      .info {
        width: 100%;

        .title {}

        .text_body {}

      }

      .imgbanner {
        width: 250px;

      }
    }
  }
}

@media (max-width: 1000px) {
  .container {
    .content {

      // flex-wrap: wrap;
      .info {
        width: 100%;
      }
    }
  }
}

@media (max-width: 450px) {
  .container {
    .content {
      .info {
        .title {}

        .text_body {}

      }

      .imgbanner {
        display: none;
      }

    }

  }
}

@media (max-width: 375px) {
  .container {
    .content {
      height: 100vh;

      .info {
        .title {
          font: 600 34px/46px var(--title-font) !important;
        }
      }
    }
  }
}
</style>