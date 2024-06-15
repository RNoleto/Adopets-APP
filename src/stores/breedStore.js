// breedStore.js

import { defineStore } from 'pinia';
import axios from 'axios';

export const useBreedStore = defineStore({
  id: 'breed',
  state: () => ({
    breedsList: [],
    selectedBreed: null, // optional: state for selected breed
  }),
  actions: {
    async loadBreeds() {
      try {
        const response = await axios.get("/breeds");
        this.breedsList = response.data;
        console.log("Raças carregadas:", this.breedsList);
      } catch (error) {
        console.error("Erro ao carregar Raças", error);
      }
    },
    async loadBreedById(breedId) {
      try {
        const response = await axios.get(`/breeds/${breedId}`);
        this.selectedBreed = response.data;
        console.log("Raça selecionada:", this.selectedBreed);
      } catch (error) {
        console.error("Erro ao carregar Raça", error);
      }
    },
    async clearSelectedBreed() {
      this.selectedBreed = null;
    },
  },
});
