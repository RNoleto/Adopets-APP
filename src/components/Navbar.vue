<template>
  <header>
    <nav class="content">
      <div>
        <router-link to="/" @click="toggleNav" class="logo">Adopets</router-link>
      </div>
      <div class="menu">
        <div v-for="page in filteredPages" :key="page.id">
          <router-link :to="page.url" class="link_menu">{{ page.name }}</router-link>
        </div>
      </div>
      <div class="menu_mobile" :class="{ active: isNavOpen }" @click="toggleNav">
        <span class="hamburger"></span>
      </div>
      <div :class="['mobile_menu', { active: isNavOpen }]">
        <div v-for="page in filteredPages" :key="page.id" @click="toggleNav">
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
        { id: 2, url: "/adoptions", name: "Adoção" },
        { id: 3, url: "/posts", name: "Posts" },
        { id: 4, url: "#", name: "Achados e perdidos" },
        { id: 5, url: "/breedsgalery", name: "Galeria de Raças" },
        { id: 6, url: "/userpage", name: "Pagina do usuário" },
        { id: 7, url: "/Dashboard", name: "Dashboard" },
        // { id: 8, url: "/Login", name: 'Login' },
        // { id: 9, url: "/Register", name: 'Register' },
      ],
      tokenExists: false
    };
  },
  computed: {
    filteredPages() {
      return this.pages.filter(page => {
        if (page.url === '/Dashboard' || page.url === '/userpage') {
          return this.tokenExists;
        }
        return true;
      });
    },
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
    position: relative;

    .menu {
      display: flex;
      gap: 40px;
      color: var(--c2);

    }

    .menu_mobile {
      cursor: pointer;
      border: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 0.4rem;
      display: none;


      .hamburger {
        border-top: 0.125rem solid var(--c2);
        width: 1.25rem;

        &::before,
        &::after {
          content: " ";
          display: grid;
          width: 1.25rem;
          height: 0.125rem;
          background: var(--c2);
          margin-top: 0.3125rem;
          position: relative;
          transition: 0.3s;
          z-index: 2;
        }
      }

      &.active .hamburguer {
        transform: rotate(45deg);

        .hamburger::before {
          transform: rotate(90deg) translateX(0.3125rem);
        }

        &::after {
          opacity: 0;
        }
      }

    }

    .mobile_menu {
      position: absolute;
      top: 116px;
      right: 220px;
      background-color: var(--p6);
      z-index: 1;
      padding: 20px 40px;
      border-radius: 0px 0px 5px 5px;
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
      border: 1px solid var(--p5);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.5s ease;

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }

  }
}

@media (max-width: 1200px) {
  header {
    nav {

      .menu {
        .link_menu {
          font-size: 12px;
        }
      }
    }
  }
}

@media(max-width: 1160px) {
  header {
    nav {
      .menu {
        display: none;
      }

      .menu_mobile {
        display: flex;
      }
    }
  }
}
</style>