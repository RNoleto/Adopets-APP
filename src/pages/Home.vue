<template>
  <div>
    <Banner />
    <AboutUs />
    <AdoptionList />
    <PostsList />
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
import AboutUs from "@/components/AboutUs.vue";
import AdoptionList from "@/components/AdoptionList.vue";
import PostsList from "@/components/PostsList.vue";


export default {
  components: {
    Banner,
    AboutUs,
    AdoptionList,
    PostsList,
  },
};
</script>
<style lang="scss" scoped></style>