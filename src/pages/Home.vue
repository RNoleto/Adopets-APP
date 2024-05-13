<template>
  <Banner />
  <div class="container">
    <section>
      <div class="content">
        <h3 class="title">Sobre a Adopets</h3>
        <p class="text">
          Somos mais do que apenas uma plataforma de adoção de animais; somos uma comunidade dedicada ao bem-estar dos
          nossos amigos peludos e ao incentivo da adoção responsável de pets. Acreditamos que cada patinha merece um lar
          amoroso e seguro, e estamos empenhados em fazer a diferença na vida desses animais e no mundo que
          compartilhamos.
        </p>
      </div>
    </section>
    <section>
      <div class="content">
        <AdoptionList/>
      </div>
    </section>
    <section>
      <div class="content">
        <PostsList />
      </div>
    </section>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import PostsList from '@/components/PostsList.vue';
import AdoptionList from "@/components/AdoptionList.vue";

export default {
  components: {
    Banner,
    PostsList,
    AdoptionList,
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding-top: 50px;

  .content {
    .text {
      margin-top: 15px;
    }
  }
}

@media (min-width: 600px) {}

@media (min-width: 1210px) {}
</style>