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
            <input type="text" v-model="petSpecie" id="petSpecie" required>
          </div>

          <div class="inputTypes">
            <label for="petBreed">Raça:</label>
            <input type="text" v-model="petBreed" id="petBreed" required>
          </div>
        </div>

        <div class="inputTypes">
          <label for="chipNumber">Nº do Chip</label>
          <input type="number" v-model="chipNumber" id="chipNumber">
        </div>

        <div class="inputTypes">
          <label for="petBirth">Data de Nascimento:</label>
          <input type="date" v-model="petBirth" id="petBirth" required />
        </div>

        <div class="inputTypes">
          <label for="imageUpload">Foto:</label>
          <input type="file" @change="handleFileUpload" id="imageUpload" ref="imageUpload" accept="image/*" required />
        </div>

        <fieldset>
          <legend>Disponível para Adoção?</legend>
          <div class="options">
            <div>
              <input type="radio" id="sim" name="adoption" value="sim" v-model="availableForAdoption">
              <label for="sim">Sim</label>
            </div>
            <div>
              <input type="radio" id="nao" name="adoption" value="nao" v-model="availableForAdoption">
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
import Swal from 'sweetalert2';

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
      petSpecie: '',
      petBreed: '',
      petBirth: '',
      chipNumber: '',
      imageUpload: null,
      availableForAdoption: 'nao'
    };
  },
  methods: {
    handleFileUpload(event) {
      this.imageUpload = event.target.files[0];
    },
    async submitPetForm() {
      try {
        const formData = new FormData();
        formData.append('breed', this.petBreed);
        formData.append('specie', this.petSpecie);
        formData.append('name', this.petName);
        formData.append('birth', this.petBirth);
        formData.append('gender', this.selectedGender);
        formData.append('chip_number', this.chipNumber);
        formData.append('ref_id_user', JSON.parse(localStorage.getItem('userId')));
        formData.append('status', this.availableForAdoption === 'sim' ? 1 : 0);
        formData.append('photo', this.imageUpload);

        const response = await axios.post("/animals", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.status === 201 || response.status === 200) {
          const animalId = response.data.id;
          await this.uploadImages(animalId);
          Swal.fire({
            title: 'Pet criado com sucesso!',
            text: `Cadastro de ${this.petName} criado.`,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.resetForm();
            this.$emit('petAdded');
            this.closeModal();
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Erro ao cadastrar Pet!',
          text: 'Não foi possível cadastrar o Pet, tente novamente mais tarde.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    },
    async uploadImages(animalId) {
      try {
        const formData = new FormData();
        const imageUploadInput = this.$refs.imageUpload;
        const imageFiles = imageUploadInput.files;

        for (let i = 0; i < imageFiles.length; i++) {
          formData.append('file', imageFiles[i]);
          formData.append('ref_id_animal', animalId);
        }
        const response = await axios.post('/animalsimage', formData);
      } catch (error) {
        console.log('Erro ao enviar imagens:', error);
      }
    },
    resetForm() {
      this.petName = '';
      this.selectedGender = null;
      this.petSpecie = '';
      this.petBreed = '';
      this.petBirth = '';
      this.chipNumber = '';
      this.imageUpload = null;
      this.availableForAdoption = 'nao';
      if (this.$refs.imageUpload) {
        this.$refs.imageUpload.value = null;
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
    font: 600 32px / 40px var(--body-font);
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
