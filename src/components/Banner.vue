<template>
  <div class="container">
    <div class="content">
      <div class="info">
        <p class="title">Adote amor, adote um pet.</p>
        <p class="text_body">Torne-se um herói peludo! Adote um amigo de quatro patas e mude uma vida para sempre.
          Nossos pets aguardam amor, cuidado e um lar. Faça a diferença hoje - traga alegria e amor para sua casa, adote
          um companheiro leal.</p>
        <button>
          <p>Conheça o seu amiguinho</p> <span>&rarr;</span>
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
</style>