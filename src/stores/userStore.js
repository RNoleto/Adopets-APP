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
        if(error.response && error.response.status === 404){
          console.warn('Nenhum pet encontrado para este usuário..')
          this.pets = [];
        } else {
          console.error('Erro ao buscar pets:', error);
        }
      }
    },
    async fetchPetImage(petId){
      try{
        const response = await axios.get(`/animalsimage/${petId}`, { responseType: 'blob'});
        return URL.createObjectURL(response.data);
      } catch(error){
        console.log('Erro ao carregar a imagem do pet:', error);
        return 'https://via.placeholder.com/150';
      }
    },
    async fetchPetsWithImages(){
      await this.fetchPets();
      for(const pet of this.pets){
        pet.imgSrc = await this.fetchPetImage(pet.id);
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
