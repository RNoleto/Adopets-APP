<template>
  <form @submit.prevent="submitRaceForm">
    <div class="inputs">
      <div class="inputType">
        <label for="especie">Espécie:</label>
        <select v-model="selectedSpecies" required>
          <option value="" disabled>Selecione</option>
          <option v-for="species in speciesList" :key="species.id" :value="species.id">
            {{ species.specie }}
          </option>
        </select>
      </div>
      <div class="inputType">
        <label for="breed">Raça:</label>
        <input type="text" id="breed" v-model="breed" required />
      </div>
      <div class="inputType">
        <label for="origin">Origem:</label>
        <input type="text" id="origin" v-model="origin" />
      </div>
      <div class="inputType">
        <label for="average_weight">Peso Médio:</label>
        <input type="number" id="average_weight" v-model="average_weight" />
      </div>
      <div class="inputType">
        <label for="lifespan">Expectativa de Vida:</label>
        <input type="number" id="lifespan" v-model="lifespan" />
      </div>
    </div>
    <div class="inputType">
      <input type="file" id="imageUpload" ref="imageUpload" name="file" multiple />
    </div>
    <div class="story">
      <label class="text_body" for="story">Conte a história dessa Raça:</label>
      <ckeditor class="ckeditor" :editor="editor" v-model="story" :config="editorConfig"></ckeditor>
    </div>
    <button type="submit">Cadastrar Raça</button>
  </form>
</template>

<script>
import axios from "axios";

import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



export default {
  name: "Race",
  components: {
    ckeditor: CKEditor.component
  },
  data() {
    return {
      speciesList: [],
      breedsList: [],
      accordionOpen: false,
      selectedSpecies: null,
      breed: "",
      origin: "",
      average_weight: "",
      lifespan: "",
      story: "",
      ref_id_user: '',
      editorConfig: {
        // plugins: [Bold, Italic],
        toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
        ckfinder: {
          uploadUrl: '../public/assets/img/breeds',
          options: {
            // resourceType: 'Image'
          }
        }
      },
    };
  },
  computed: {
    editor: () => ClassicEditor
  },
  mounted() {
    this.loadSpecies();
    this.loadBreeds();
  },
  watch: {
    userId(newUserId) {
      // Atualiza o user_id da nova espécie sempre que userId mudar
      this.novaEspecie.userId = newUserId;
    }
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
          console.log('Erro ao carregar as raças', error);
        });
    },
    async submitRaceForm() {
      try {
        const formData = new FormData();
        formData.append('breed', this.breed);
        formData.append('ref_id_specie', this.selectedSpecies);
        formData.append('origin', this.origin);
        formData.append('average_weight', this.average_weight);
        formData.append('lifespan', this.lifespan);
        formData.append('story', this.story);

        const userId = JSON.parse(localStorage.getItem('userId'));
        formData.append('ref_id_user', userId);

        const response = await axios.post("/breeds", formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.status === 201 || response.status === 200) {
          const breedId = response.data.id;
          console.log("Dados da raça criada:", response.data.id);
          // Envio das imagens com o ref_id_breed correto
          await this.uploadImages(breedId);
        }

        this.resetForm();
      } catch (error) {
        console.error('Erro ao criar nova raça:', error);
      }
    },
    async uploadImages(breedId) {
      try {
        const formData = new FormData();
        const imageUploadInput = this.$refs.imageUpload;
        const imageFiles = imageUploadInput.files;

        for (let i = 0; i < imageFiles.length; i++) {
          formData.append('file', imageFiles[i]);
          formData.append('ref_id_breed', breedId);
        }

        const response = await axios.post('/files', formData);

        console.log("Resposta do upload de imagens:", response.data);
      } catch (error) {
        console.error('Erro ao enviar imagens:', error);
      }
    },
    resetForm() {
      // Método para limpar o formulário, se necessário
      this.breed = "";
      this.selectedSpecies = null;
      this.origin = "";
      this.average_weight = null;
      this.lifespan = null;
      this.story = "";
      this.$refs.imageUpload.value = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.inputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}

.inputType {
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

#imageUpload {
  width: 300px;
  margin: 10px 0px;
}

button {
  font: 500 12px / 16px var(--title-font);
}

.story {
  .text_body {
    color: var(--c9);
  }
}
</style>
