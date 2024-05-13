<template>
  <h3 class="title">Página geral de animais</h3>
  <p class="text">Total de Species: {{ totalSpecies }} </p>
  <p class="text">Total de Raças: {{ totalBreeds }}</p>
</template>
<script>
import axios from 'axios'
export default {
  name: 'ResumeAnimal',
  data() {
    return {
      SpeciesList: [],
      BreedList: [],
    }
  },
  mounted() {
    this.loadSpecies();
    this.loadBreeds();
  },
  computed: {
    totalSpecies() {
      return this.SpeciesList.length;
    },
    totalBreeds() {
      return this.BreedList.length;
    }
  },
  methods: {
    loadSpecies() {
      axios
        .get('/species')
        .then((response) => {
          this.SpeciesList = response.data;
        })
        .catch((error) => {
          console.log('Erro ao carregar dados de especies', error);
        })
    },
    loadBreeds() {
      axios
        .get('/breeds')
        .then((response) => {
          this.BreedList = response.data;
        })
        .catch((error) => {
          console.log('Erro ao carregar dados de raças', error)
        })
    }
  }
}
</script>