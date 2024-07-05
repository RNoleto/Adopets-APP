// userStore.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: '',
      name: '',
      email: ''
    },
    pets: []
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = {
        id: '',
        name: '',
        email: ''
      };
      this.pets = [];
    },
    async fetchPets() {
      try {
        const response = await axios.get(`/animals?userId=${this.user.id}`);
        this.pets = response.data;
      } catch (error) {
        console.error('Erro ao buscar pets:', error);
      }
    }
  },
});
