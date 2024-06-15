<template>
  <div class="modal-overlay" v-if="isOpen">
    <div class="modal">
      <p class="title">Adicionar Pet</p>
      <form @submit.prevent="submitPetForm">
        <div class="inputTypes">
          <label for="petName">Nome:</label>
          <input type="text" v-model="petName" id="petName" required />
        </div>

        <div class="selects">
          <div class="inputTypes">
            <label for="petGender">Sexo:</label>
            <select v-model="selectedGender" required>
              <option value="" disabled>Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Fêmea</option>
            </select>
          </div>

          <div class="inputTypes">
            <label for="petSpecie">Espécie</label>
            <select v-model="selectedSpecies" required>
              <option value="" disabled>Selecione</option>
              <option v-for="species in speciesList" :key="species.id" :value="species.id">
                {{ species.specie }}
              </option>
            </select>
          </div>

          <div class="inputTypes">
            <label for="petBreed">Raça:</label>
            <select v-model="selectedBreeds" required>
              <option value="" disabled>Selecione</option>
              <option v-for="breed in breedsList" :key="breed.id" :value="breed.id">{{ breed.breed }}</option>
            </select>
          </div>
        </div>


        <div class="inputTypes">
          <label for="petBirth">Data de Nascimento:</label>
          <input type="date" v-model="petBirth" id="petBirth" required />
        </div>

        <div class="inputTypes">
          <label for="petPhoto">Foto:</label>
          <input type="file" @change="handleFileUpload" id="petPhoto" ref="petPhoto" accept="image/*" required />
        </div>


        <fieldset>
          <legend>Disponível para Adoção?</legend>
          <div class="options">
            <div>
              <input type="radio" id="sim" name="adoption" value="sim">
              <label for="sim">Sim</label>
            </div>
            <div>
              <input type="radio" id="nao" name="adoption" value="nao">
              <label for="nao">Não</label>
            </div>
          </div>
        </fieldset>


        <div class="buttons">
          <button type="submit">Adicionar</button>
          <button type="button" @click="handleCancel">Cancelar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      petName: '',
      selectedGender: null,
      selectedSpecies: null,
      selectedBreeds: null,
      petBirth: '',
      userId: null,
      ref_id_user: '',
      petPhoto: null,
      speciesList: [],
      breedsList: [],
      availableForAdoption: 1, // padrão para disponível para adoção
    };
  },
  mounted() {
    this.loadSpecies();
    this.loadBreeds();
  },
  methods: {
    loadSpecies() {
      axios
        .get("/species")
        .then((response) => {
          this.speciesList = response.data;
        })
        .catch((error) => {
          console.error("Erro ao carregar as espécies", error);
        });
    },
    loadBreeds() {
      axios
        .get('/breeds')
        .then((response) => {
          this.breedsList = response.data;
        })
        .catch((error) => {
          console.error('Erro ao carregar as raças', error);
        });
    },
    handleFileUpload(event) {
      this.petPhoto = event.target.files[0];
    },
    async submitPetForm() {
      try {
        const formData = new FormData();
        formData.append('ref_id_breed', this.selectedBreeds);
        formData.append('ref_id_specie', this.selectedSpecies);
        formData.append('name', this.petName);
        formData.append('birth', this.petBirth);
        formData.append('gender', this.selectedGender);
        formData.append('ref_id_user', JSON.parse(localStorage.getItem('userId')));
        formData.append('available_for_adoption', this.availableForAdoption);
        formData.append('photo', this.petPhoto); // adicionar a foto do pet

        const response = await axios.post("/animals", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.status === 201 || response.status === 200) {
          const animalId = response.data.id;
          console.log("Dados do pet criado:", response.data.id);
        }

        this.resetForm();
      } catch (error) {
        console.log('Erro ao cadastrar novo pet:', error);
      }
    },
    resetForm() {
      this.petName = '';
      this.selectedGender = '';
      this.selectedSpecies = '';
      this.selectedBreeds = '';
      this.petBirth = '';
      this.petPhoto = null;
      this.availableForAdoption = 1; // resetar para disponível para adoção
      if (this.$refs.petPhoto) {
        this.$refs.petPhoto.value = null;
      }
    },
    handleCancel() {
      this.resetForm();
      this.closeModal();
    },
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: var(--c1);
  padding: 20px;
  border-radius: 5px;
  width: 500px;
  border: 1px solid var(--c2);

  .title {
    color: var(--p5);
  }

  form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .selects {
      width: 100%;
      gap: 10px;
      display: flex;
    }

    .inputTypes {
      margin-top: 10px;
      width: 100%;

      input,
      select {
        margin-top: 2px;
        width: 100%;
        height: 28px;
      }
    }

    fieldset {
      margin-top: 10px;

      legend {
        padding: 0px 10px;
      }

      .options {
        gap: 10px;
        display: flex;
        padding: 10px;
      }
    }

    .buttons {
      width: 100%;
      justify-content: space-between;
      display: flex;

      button {
        font: 500 14px/14px var(--title-font);
      }
    }
  }
}
</style>
