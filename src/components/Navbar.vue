<template>
  <header>
    <nav class="content">
      <div>
        <router-link to="/" @click="toggleNav" class="logo">Adopets</router-link>
      </div>
      <div class="menu">
        <div v-for="page in pages" :key="page.id">
          <router-link :to="page.url" class="link_menu">{{ page.name }}</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>


<script>
import Cookie from "js-cookie";

export default {
  name: "Navbar",
  data() {
    return {
      isNavOpen: false,
      isHandleShadow: false,
      pages: [
        { id: 1, url: "/about", name: "Quem somos" },
        {id: 2, url: "/adoptions", name: "Adoção"},
        { id: 3, url: "/posts", name: "Posts" },
        { id: 4, url:"#", name: "Achados e perdidos"},
        // { id: 4, url: "/breedsgalery", name: "Galeria de Raças" },
        // { id: 5, url: "/userpage", name: "Pagina do usuário" },
        // { id: 6, url: "/Dashboard", name: "Dashboard" },
      ],
      tokenExists: false
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    }
  },
  mounted() {
    this.tokenExists = Cookie.get("_myapp_token") !== undefined;
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
      this.toggleBodyScroll();
    },
    toggleBodyScroll() {
      if (this.isNavOpen) {
        // document.body.style.overflow = "hidden";
        document.body.addEventListener("touchmove", this.preventScroll, {
          passive: false
        });
      } else {
        document.body.style.overflow = "";
        document.body.removeEventListener("touchmove", this.preventScroll, {
          passive: false
        });
      }
    },
    preventScroll(e) {
      e.preventDefault();
    }
  }
};
</script>


<style lang="scss" scoped>
header {
  background-color: var(--p6);

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 220px;

    .menu {
      display: flex;
      gap: 40px;
      color: var(--c2);
    }
  }
}
</style>