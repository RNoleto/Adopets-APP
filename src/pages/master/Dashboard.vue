<template>
  <div class="dashboard">
    <nav class="navbar">
      <router-link to="/">
        <p class="title">Adopets</p>
      </router-link>
      <!-- Conteúdo do Navbar aqui -->
      <p class="text_body">Admin Panel</p>
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
            <router-link class="link" to="/ResumeAnimal">Lista</router-link>
            <router-link class="link" to="/Species">Espécies</router-link>
            <router-link class="link" to="/Races">Raças</router-link>
            <router-link class="link" to="#">Adoção</router-link>
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
        <router-view>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

//Componente de Resumos
import AllResumeDash from '../../components/Dashboard/AllResumeDash.vue';

//Informações de Usuários
import Users from '../../components/Users.vue';

//Informações de animais
import ResumeAnimal from '../ResumeAnimal.vue';
import Species from '../../components/Species.vue';
import Races from '../../components/Races.vue';

//Informações de Posts

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
    AllResumeDash,
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
    background-color: var(--p6);
    color: var(--c2);
    padding: 20px 40px;

    .title {
      font-size: 36px;
    }
    .text_body{
      margin-top: 0px;
    }
  }

  .block {
    display: flex;
    height: 100%;

    .sidebar {
      font-size: 12px;
      display: flex;
      flex-direction: column;
      background-color: var(--p5);
      color: var(--c2);
      padding: 20px 0px;
      flex: 0 0 200px;
      text-align: center;

      .menu {
        font: 500 14px/22px var(--title-font);
        padding: 5px 0px;
        height: 40px;
        align-content: center;
        display: block;
      }
    }

    .accordion {
      padding: 5px 0px;
      border-bottom: 1px solid var(--c9);
      cursor: pointer;

      &:hover {
        background-color: var(--p4);
      }

      &.active {
        background-color: var(--p4);
        padding-bottom: 0px;
      }
    }

    .submenu {
      display: flex;
      flex-direction: column;
      background-color: var(--p6);
      
      .link {
        border-bottom: 1px solid var(--p3);
        background-color: var(--p3);
        text-decoration: none;
        color: var(--c1);
        padding: 5px;
        font-weight: 300;
        border-bottom: 1px solid var(--c7);

        &:hover,
        &:active {
          background-color: var(--p1);
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
      border: 1px solid var(--p6);
      flex: 1;
      padding: 10px;
    }
  }

}
</style>