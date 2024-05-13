<template>
  <div class="hero">
    <div class="content">
      <h3 class="title">Seja o lar dessas fofuras</h3>
      <p class="text">Torne-se um herói peludo! 🐶🐱 Adote um amigo de quatro patas e mude uma vida para sempre. Nossos
        cães e gatos aguardam amor, cuidado e um lar. Faça a diferença hoje - traga alegria e amor para sua casa, adote
        um companheiro leal.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 70vh;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  background-image: url('/public/assets/img/hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: local;
  border-radius: 0px 0px 30px 30px;
  box-shadow: 1px 3px 10px rgba($color: #24252A, $alpha: .5);

  .content {
    background-color: rgba($color: #EEF5EF, $alpha: .7);
    border-radius: 15px;
    padding: 5px;
    width: 80%;
    backdrop-filter: blur(5px);
    transform: translateY(220px);
    box-shadow: 1px 1px 5px rgba($color: #24252A, $alpha: .3);

    .title,
    .text {
      color: var(--color-3);
    }
  }

  @media (min-width:800px) {
    .content {
      width: 60%;
    }
  }
}
</style>