<template>
  <p class="title_dashboard">Página geral de animais</p>
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
  <div class="list">
    <div class="pet" v-for="animal in AnimalsWithDetails" :key="animal.id">
      <p class="title">{{ animal.name }}</p>
      <div class="pet_infos">
        <p class="text_body">{{ animal.specie }} - {{ animal.breed }}</p>
      </div>
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
        },
        {
          id: 4,
          specie: "Aves",
        },
        {
          id: 5,
          specie: "Peixes",
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
          ref_id_specie: 1,
          breed: "Bulldog"
        },
        {
          id: 3,
          ref_id_specie: 2,
          breed: "Persa"
        },
        {
          id: 4,
          ref_id_specie: 2,
          breed: "Siamês"
        },
        {
          id: 5,
          ref_id_specie: 3,
          breed: "Hamster Sírio"
        },
        {
          id: 6,
          ref_id_specie: 3,
          breed: "Porquinho da Índia"
        },
        {
          id: 7,
          ref_id_specie: 4,
          breed: "Canário"
        },
        {
          id: 8,
          ref_id_specie: 4,
          breed: "Papagaio"
        },
        {
          id: 9,
          ref_id_specie: 5,
          breed: "Betta"
        },
        {
          id: 10,
          ref_id_specie: 5,
          breed: "Goldfish"
        }
      ],
      Animals: [
        {
          id: 1,
          ref_id_specie: 1,
          ref_id_breed: 1,
          name: "Snow",
        },
        {
          id: 2,
          ref_id_specie: 1,
          ref_id_breed: 2,
          name: "Buddy",
        },
        {
          id: 3,
          ref_id_specie: 2,
          ref_id_breed: 3,
          name: "Mingau",
        },
        {
          id: 4,
          ref_id_specie: 2,
          ref_id_breed: 4,
          name: "Luna",
        },
        {
          id: 5,
          ref_id_specie: 3,
          ref_id_breed: 5,
          name: "Nibbles",
        },
        {
          id: 6,
          ref_id_specie: 3,
          ref_id_breed: 6,
          name: "Cocoa",
        },
        {
          id: 7,
          ref_id_specie: 4,
          ref_id_breed: 7,
          name: "Tweety",
        },
        {
          id: 8,
          ref_id_specie: 4,
          ref_id_breed: 8,
          name: "Polly",
        },
        {
          id: 9,
          ref_id_specie: 5,
          ref_id_breed: 9,
          name: "Flash",
        },
        {
          id: 10,
          ref_id_specie: 5,
          ref_id_breed: 10,
          name: "Goldie",
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
    },
    AnimalsWithDetails(){
      return this.Animals.map(animal => {
        const specie = this.SpeciesList.find(specie => specie.id === animal.ref_id_specie);
        const breed = this.BreedList.find(breed => breed.id === animal.ref_id_breed);
        return {
          ...animal,
          specie: specie ? specie.specie : 'Unknown',
          breed: breed ? breed.breed : 'Unknown',
        }
      })
    },
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
  margin-top: 24px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px ;
  .pet{
    width: calc(calc(100%/5) - 8px);
    // width: 100%;
    padding: 10px;
    border: 1px solid var(--p1);
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgba($color: #000000, $alpha: 0.1);
    .title{
      font: 600 20px/28px var(--title-font) ;
      color: var(--p3);
    }
    .text_body{
      margin-top: 0px;
      font: 400 12px/24px var(--body-font);
    }
  }
}

</style>