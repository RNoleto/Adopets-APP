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
        <div class="menu">
          <a href="#" @click.prevent="showLogin" class="link_menu">Login</a>
          <a href="#" @click.prevent="showRegister" class="link_menu register">Register</a>
        </div>
      </div>
      <div class="menu_mobile" :class="{ active: isNavOpen }" @click="toggleNav">
        <span class="hamburger"></span>
      </div>
      <div :class="['mobile_menu', { active: isNavOpen }]">
        <div v-for="page in filteredPages" :key="page.id" @click="toggleNav">
          <router-link :to="page.url" class="link_menu">{{ page.name }}</router-link>
        </div>
        <a href="#" @click.prevent="showLogin" class="link_menu">Login</a>
        <a href="#" @click.prevent="showRegister" class="link_menu register">Register</a>
      </div>
    </nav>
    <Login v-if="isLoginVisible" @close="hideLogin" />
    <Register v-if="isRegisterVisible" @close="hideRegister" />
  </header>
</template>

<script>
import Cookie from "js-cookie";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

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
        { id: 4, url: '/breedsgalery', name: "Galeria de Raças" },
        // { id: 4, url: "#", name: "Achados e perdidos" },
        { id: 6, url: "/userpage", name: "Pagina do usuário" },
        { id: 7, url: "/Dashboard", name: "Dashboard" },
      ],
      tokenExists: false,
      isLoginVisible: false,
      isRegisterVisible: false
    };
  },
  components: {
    Login,
    Register,
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
    },
    showLogin() {
      this.isLoginVisible = true;
    },
    hideLogin() {
      this.isLoginVisible = false;
    },
    showRegister() {
      this.isRegisterVisible = true;
    },
    hideRegister() {
      this.isRegisterVisible = false;
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

      .link_menu {
        &.register {
          border: 1px solid var(--p1);
          padding: 0px 10px;
          border-radius: 5px;

          &:hover {
            transition: color 0.3s ease;
            color: var(--c1);
            background-color: var(--p4);
            border-color: var(--p3);
          }
        }
      }
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

      .link_menu {
        &.register {
          text-align: center;
          border: 1px solid var(--p1);
          padding: 0px 10px;
          border-radius: 5px;
          background-color: var(--p1);

          &:hover {
            transition: color 0.3s ease;
            color: var(--c1);
            background-color: var(--p4);
            border-color: var(--p3);
          }
        }


      }


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
      padding: 34px 80px;

      .menu {
        .link_menu {
          font-size: 12px;
        }
      }

      .mobile_menu {
        right: 0;
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

@media (max-width: 479px) {
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

@media (max-width: 450px) {
  header {
    nav {
      padding: 30px 20px;

      .menu {
        display: none;
      }

      .menu_mobile {
        display: flex;
      }

      .mobile_menu.active {
        top: 108px;
      }
    }
  }
}
</style>