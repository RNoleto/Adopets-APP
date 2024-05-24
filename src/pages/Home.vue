<template>
  <Banner />
  <AboutUs />
  <AdoptionList/>
</template>
<script>
import Banner from "@/components/Banner.vue";
import AboutUs from "@/components/AboutUs.vue";
import AdoptionList from "@/components/AdoptionList.vue";


export default {
  components: {
    Banner,
    AboutUs,
    AdoptionList,
  },
};
</script>
<style lang="scss" scoped>

</style>