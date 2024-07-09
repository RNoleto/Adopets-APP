import { defineStore } from 'pinia';
import axios from 'axios';
import { useAuthStore } from './authStore';

export const useUserStore = defineStore('user', {
  state: () => ({
    pets: [],
    user: null
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
      } catch (error) {
        console.error('Erro ao buscar pets:', error);
      }
    },
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    }
  }
});
