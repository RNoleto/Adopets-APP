<template>
  <div>
    <!-- Formulário de criação de espécie -->
    <form @submit.prevent="submitSpeciesForm">
      <div class="inputType">
        <label for="specie">Nome da Espécie:</label>
        <input type="text" id="specie" v-model="novaEspecie.specie" required class="inputType" />
      </div>
      <button type="submit">Criar Espécie</button>
    </form>
    <!-- Lista de espécies -->
    <div v-if="especies.length" class="speciesList">
      <p class="title">Lista de Espécies</p>
      <ul>
        <li v-for="especie in especies" :key="especie.id" class="specie">
          <p class="text_body">{{ especie.specie }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    userId: {
      type: Number,
      required: true, // Certifique-se de que o userId é requerido
    },
  },
  data() {
    return {
      novaEspecie: {
        specie: "",
        userId: null,
      },
      especies: [
        {
          specie: 'Canina',
        },
        {
          specie: 'Felina',
        },
      ],
      selectedEspecie: null,
    };
  },
  watch: {
    userId(newUserId) {
      // Atualiza o user_id da nova espécie sempre que userId mudar
      this.novaEspecie.userId = newUserId;
    }
  },
  methods: {
    async submitSpeciesForm() {
      try {
        const userId = JSON.parse(localStorage.getItem('userId'));
        const response = await axios.post("/species", {
          specie: this.novaEspecie.specie,
          ref_id_user: userId
        });
        this.especies.push(response.data);
        this.novaEspecie.specie = ""; // Limpa o campo após a criação
      } catch (error) {
        console.error("Erro ao criar nova espécie:", error);
      }
    },
    async carregarEspecies() {
      try {
        const response = await axios.get("/species");
        this.especies = response.data;
      } catch (error) {
        console.error("Erro ao carregar espécies:", error);
      }
    },
  },
  mounted() {
    this.carregarEspecies();
  },
};
</script>

<style lang="scss" scoped>
form{
  width: 250px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--c5);
  .inputType{
    display: flex;
    flex-direction: column;
    input{
      margin-top: 2px;
    }
  }
  button {
    font: 500 12px/16px var(--title-font);
  }
}

.speciesList {
  .title{
    color: var(--c9);
  }
  margin-top: 32px;

  ul {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;

    .specie {
      font-size: 12px;
      flex: 1 1 auto;
      max-width: max-content;
      border: 1px solid var(--c10);
      border-radius: 5px;
      padding: 3px 6px;
      .text_body{
        margin: 0px;
        color: var(--p4);
      }
    }
  }
}
</style>