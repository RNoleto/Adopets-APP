<template>
  <Banner />
  <AboutUs />
  <AdoptionList />
  <PostsList />
  <LostPet />
</template>
<script>
import Banner from "@/components/Banner.vue";
import AboutUs from "@/components/AboutUs.vue";
import AdoptionList from "@/components/AdoptionList.vue";
import PostsList from "@/components/PostsList.vue";
import LostPet from "@/components/LostPet.vue";


export default {
  components: {
    Banner,
    AboutUs,
    AdoptionList,
    PostsList,
    LostPet,
  },
};
</script>
<style lang="scss" scoped></style>