<template>
  <div class="dashboard">
    <nav class="navbar">
      <router-link to="/">
        <h3 class="title">Adopets</h3>
      </router-link>
      <!-- Conteúdo do Navbar aqui -->
      <p class="text">Admin Panel</p>
    </nav>
    <div class="block">
      <aside class="sidebar">
        <!-- Conteúdo da barra lateral aqui -->
        <div @click="toggleAccordion(1)" class="accordion" :class="{ 'active': accordions[1] }">
          <span class="menu">Usuários</span>
          <div v-if="accordions[1]" class="submenu">
            <router-link class="link" to="Users">Lista</router-link>
          </div>
        </div>
        <div @click="toggleAccordion(2)" class="accordion" :class="{ 'active': accordions[2] }">
          <span class="menu">Animais</span>
          <div v-if="accordions[2]" class="submenu">
            <router-link class="link" to="/ResumeAnimal">Resumo Animal</router-link>
            <router-link class="link" to="/Species">Espécies</router-link>
            <router-link class="link" to="/Races">Raças</router-link>
            <router-link class="link" to="#">Disponiveis para adoção</router-link>
          </div>
        </div>
        <div @click="toggleAccordion(3)" class="accordion" :class="{ 'active': accordions[3] }">
          <span class="menu">Posts</span>
          <div v-if="accordions[3]" class="submenu">
            <router-link class="link" to="#">Lista</router-link>
          </div>
        </div>
      </aside>
      <main class="main-content">
        <!-- Conteúdo principal aqui -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import Users from '../../components/Users.vue';

import ResumeAnimal from '../ResumeAnimal.vue';
import Species from '../../components/Species.vue';
import Races from '../../components/Races.vue';


export default {
  name: 'NewDashboard',
  setup() {
    const accordions = ref({
      1: false,
      2: false,
      3: false
    });

    const toggleAccordion = (accordionNumber) => {
      for (let key in accordions.value) {
        if (key != accordionNumber) {
          accordions.value[key] = false;
        }
      }
      accordions.value[accordionNumber] = !accordions.value[accordionNumber];
    }

    return {
      accordions,
      toggleAccordion
    };
  },
  components: {
    ResumeAnimal,
    Species,
    Races,
    Users
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #333;
    color: white;
    padding: 10px;
  }

  .block {
    display: flex;
    height: 100%;

    .sidebar {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      // gap: 0.1rem;
      background-color: #555;
      color: white;
      padding: 10px 0px;
      flex: 0 0 100px;
      text-align: center;

      .menu {
        font-size: var(--subtitle-font-size-mobile);
        font-weight: lighter;
        padding: 5px 0px;
      }
    }

    .accordion {
      padding: 5px 0px;
      border-bottom: 1px solid #999;
      cursor: pointer;

      &:hover {
        background-color: #888;
      }

      &.active {
        background-color: #888;
        padding-bottom: 0px;
      }
    }

    .submenu {
      display: flex;
      flex-direction: column;
      background-color: #555;

      .link {
        border-bottom: 1px solid #888;
        background-color: #999;
        font-size: var(--content-font-size-mobile);
        text-decoration: none;
        padding: 5px;
        font-weight: lighter;

        &:hover,
        &:active {
          background-color: var(--color-4);
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }

    .main-content {
      width: 100px;
      margin: 10px;
      border-radius: 5px;
      border: 1px solid #888;
      flex: 1;
      padding: 10px;
    }
  }

}
</style>