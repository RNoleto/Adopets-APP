<template>
  <Banner />
  <div class="content">
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

</style>