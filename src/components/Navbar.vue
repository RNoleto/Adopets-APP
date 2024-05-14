<template>
  <header>
    <nav class="nav container">
      <div class="nav_data">
        <div class="nav_logo">
          <router-link to="/" class="title" @click="toggleNav">Adopets</router-link>
        </div>
        <div class="nav_toggle" id="nav-toggle" @click="toggleNav">
          <div class="nav_burger" v-show="!isNavOpen"></div>
          <div class="nav_close" v-show="isNavOpen">&times;</div>
        </div>
      </div>
      <!-- NAV MENU -->
      <div class="nav_menu" id="nav-menu" v-if="isNavOpen" @click="toggleBodyScroll">
        <div class="nav_list" v-for="page in pages" :key="page.id">
          <router-link :to="page.url" class="nav_link" @click="toggleNav">{{ page.name }}</router-link>
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
        { id: 1, url: "/", name: "Home" },
        { id: 2, url: "/about", name: "Quem somos" },
        { id: 3, url: "/posts", name: "Todos os Posts" },
        { id: 4, url: "/breedsgalery", name: "Galeria de Raças" },
        { id: 5, url: "/userpage", name: "Pagina do usuário" },
        { id: 6, url: "/Dashboard", name: "Dashboard" }
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
        document.body.style.overflow = "hidden";
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
//========== FirstMobile ==========//
header {
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-3);
  color: var(--color-4);
  z-index: 1000;
  padding: 1rem 0rem;

  .nav {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;

    &_data {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        display: inline-flex;
        align-items: center;
        column-gap: .25rem;
      }

      .nav_logo,
      .nav_burger,
      .nav_close {
        color: var(--color-1);
      }

      .nav_toggle {
        overflow: hidden;
        position: relative;
        width: 32px;
        height: 32px;

        .nav_burger,
        .nav_close {
          position: absolute;
          width: max-content;
          height: max-content;
          inset: 0;
          margin: auto;
          font-size: 1.25rem;
          cursor: pointer;
          transition: transform 0.4s ease;
        }

        .nav_burger {
          border-top: 0.125rem solid var(--color-1);
          width: 1.25rem;

          &::before,
          &::after {
            content: " ";
            display: grid;
            width: 1.25rem;
            height: 0.125rem;
            background: var(--color-1);
            margin-top: 0.3125rem;
            position: relative;
            transition: 0.3s;
            z-index: 2;
          }
        }

        .nav_close {
          font-size: 2.25rem;
        }
      }
    }

    .nav_menu {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }

    .show-menu {
      top: 4rem;
      pointer-events: initial;
    }

    .dropdown {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .dropdown_content {
      width: 100%;
      display: none;
      justify-items: center;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #323336;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown_item {
      cursor: pointer;
      padding: 0.5rem 1rem;
    }

    .dropdown:hover .dropdown_content {
      display: block;
    }
  }
}
</style>