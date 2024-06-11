<template>
  <p class="title_dashboard">Página geral de animais</p>
  <!-- <p class="text">Total de Species: {{ totalSpecies }} </p> -->
  <!-- <p class="text">Total de Raças: {{ totalBreeds }}</p> -->
  <div class="cards">
    <Card :description="totalSpecies" :showButton="false">
      <template #card_top>
        <p class="text_body">Total de Especies criadas</p>
      </template>
      <template #description>
        <p class="text_body count">{{ totalSpecies }}</p>
      </template>
    </Card>
    <Card :description="totalBreeds" :showButton="false">
      <template #card_top>
        <p class="text_body">Total de Raças criadas</p>
      </template>
      <template #description>
        <p class="text_body count">{{ totalBreeds }}</p>
      </template>
    </Card>
    <Card :description="totalAnimals" :showButton="false">
      <template #card_top>
        <p class="text_body">Total de Animais criados</p>
      </template>
      <template #description>
        <p class="text_body count">{{ totalAnimals }}</p>
      </template>
    </Card>
  </div>
  <div class="list" v-for="animal in Animals" :key="animal.id">
    <div class="pet">
      <p>{{ animal.name }}</p>
      <p>{{ animal.birdh }}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Card from '../components/Card.vue';
export default {
  name: 'ResumeAnimal',
  data() {
    return {
      SpeciesList: [
        {
          id: 1,
          specie: "Canina",
        },
        {
          id: 2,
          specie: "Felina",
        },
        {
          id: 3,
          specie: "Roedor",
        }
      ],
      BreedList: [
        {
          id: 1,
          ref_id_specie: 1,
          breed: "Poodle"
        },
        {
          id: 2,
          ref_id_specie: 2,
          breed: "Persa"
        }
      ],
      Animals: [
        {
          id: 1,
          ref_id_specie: 1,
          ref_id_breed: 1,
          name: "Snow",
          birdh: "02/10/1987",
        }
      ],
    }
  },
  components:{
    Card,
  },
  mounted() {
    this.loadSpecies();
    this.loadBreeds();
    this.loadAnimals();
  },
  computed: {
    totalSpecies() {
      return this.SpeciesList.length;
    },
    totalBreeds() {
      return this.BreedList.length;
    },
    totalAnimals(){
      return this.Animals.length;
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
    },
    loadAnimals(){
      
    }
  }
}
</script>

<style lang="scss" scoped>
.cards{
  display: flex;
  gap: 20px;

  .card{
    .text_body {
      margin: 0px;

      &.count {
        font-size: 36px;
        color: var(--p2);
      }
    }
  }
}
.list{
  margin-top: 12px;
  width: 100%;
  .pet{
    // width: calc(calc(100%/3) - 15px);
    width: 100%;
    padding: 10px 20px;
    border: 1px solid var(--p1);
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);
  }
}

</style>