// userStore.js
import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from './authStore'; // Importe o authStore aqui

export const useUserStore = defineStore('user', {
  state: () => ({
    pets: []
  }),
  actions: {
    async fetchPets() {
      const authStore = useAuthStore();
      const userId = authStore.user ? authStore.user.id : null;

      if (!userId) {
        console.error('Usuário não autenticado');
        return;
      }
      try {
        const response = await axios.get(`/users/${userId}/animals`);
        this.pets = response.data;
        console.log("Pets informados pelo userStore:", this.pets);
      } catch (error) {
        console.error('Erro ao buscar pets:', error);
      }
    }
  },
});
