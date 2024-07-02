import { defineStore } from 'pinia';
import axios from 'axios'; // Importando o axios

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: '',
      name: '',
      email: ''
    },
    pets: [] // Adicionando o estado de pets
  }),
  actions: {
    initializeUser() {
      const storedUserName = localStorage.getItem('user');
      const storedUserId = localStorage.getItem('userId');
      const storedUserEmail = localStorage.getItem('userEmail');
      if (storedUserName && storedUserId) {
        this.user.name = JSON.parse(storedUserName);
        this.user.id = JSON.parse(storedUserId);
        this.user.email = JSON.parse(storedUserEmail);
      }
    },
    setUser(user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user.name));
      localStorage.setItem('userId', JSON.stringify(user.id));
      localStorage.setItem('userEmail', JSON.stringify(user.email));
    },
    clearUser() {
      this.user.name = '';
      this.user.id = '';
      this.user.email = '';
      localStorage.removeItem('user');
      localStorage.removeItem('userId');
      localStorage.removeItem('userEmail');
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
