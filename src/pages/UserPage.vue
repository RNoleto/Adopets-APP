<template>
  <div class="content">
    <p class="title">Página do Usuário.</p>
    <div class="user" v-if="authStore.isAuthenticated">
      <p class="text_body">Seja bem-vindo {{ authStore.user.name }}!</p>
    </div>
    <ul class="menu">
      <li><button @click="setActiveView('myInfos')">Meus dados</button></li>
      <li><button @click="setActiveView('myPets')">Meus Pets</button></li>
      <li><button @click="setActiveView('lostPets')">Pets Perdidos</button></li>
    </ul>
    <div class="infos">
      <div v-if="authStore.isAuthenticated && activeView === 'myInfos'" class="myInfos">
        <p>Nome: {{ authStore.user.name }}</p>
        <p>Email: {{ authStore.user.email }}</p>
      </div>
      <div v-if="authStore.isAuthenticated && activeView === 'myPets'" class="myPets">
        <PetCard :pets="userStore.pets" :images="images" />
        <button @click="openAddPetModal">Adicionar Pet</button>
      </div>
      <div v-if="authStore.isAuthenticated && activeView === 'lostPets'" class="lostPets">
        <p>Pets Perdidos</p>
      </div>
    </div>
    <AddPetModal :isOpen="isAddPetModalOpen" @close="closeAddPetModal" @petAdded="fetchPets" />
  </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore';
import { useUserStore } from '../stores/userStore';
import axios from 'axios';
import PetCard from '../components/PetCard.vue';
import AddPetModal from '../components/AddPetModal.vue';

export default {
  components: {
    PetCard,
    AddPetModal,
  },
  data() {
    return {
      activeView: 'myInfos',
      isAddPetModalOpen: false,
      images: {},
    };
  },
  computed: {
    authStore() {
      return useAuthStore();
    },
    userStore() {
      return useUserStore();
    }
  },
  mounted() {
    if (this.authStore.isAuthenticated) {
      this.userStore.fetchPets();
      this.loadImages();
    }
  },
  methods: {
    setActiveView(view) {
      this.activeView = view;
    },
    openAddPetModal() {
      this.isAddPetModalOpen = true;
    },
    closeAddPetModal() {
      this.isAddPetModalOpen = false;
    },
    async fetchPets() {
      await this.userStore.fetchPets();
      this.loadImages();
    },
    async loadImages() {
      const pets = this.userStore.pets;
      const imagePromises = pets.map(async (pet) => {
        try {
          const response = await axios.get(`/animalsimage/${pet.id}`, { responseType: 'blob' });
          const blob = new Blob([response.data]);
          this.images[pet.id] = URL.createObjectURL(blob);
        } catch (error) {
          this.images[pet.id] = 'https://via.placeholder.com/150';
        }
      });

      await Promise.all(imagePromises);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {


    .title {
        font: 600 32px/40px var(--body-font);
        color: var(--c10);
    }

    .user {
        margin-top: 24px;

        .text_body {
            color: var(--c9);
        }
    }

    .menu {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        li {
            button {
                font: 500 14px/14px var(--title-font);
            }
        }
    }

    .infos {
        margin-top: 24px;

        .myInfos {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            p {
                width: 100%;
            }
        }

        .myPets {
            button {
                font: 500 14px/14px var(--title-font);
            }
        }
    }
}
</style>