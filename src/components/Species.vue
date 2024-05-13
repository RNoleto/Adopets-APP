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
      <h2>Lista de Espécies</h2>
      <ul>
        <li v-for="especie in especies" :key="especie.id">
          {{ especie.specie }}
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
      especies: [],
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
button {
  font-size: 12px;
}

.speciesList {
  h2 {
    font-size: 12px;
  }

  margin-top: 10px;

  ul {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 5px;

    li {
      font-size: 12px;
      flex: 1 1 auto;
      max-width: max-content;
      border: 1px solid var(--color-1);
      border-radius: 15px;
      padding: 3px 6px;
    }
  }
}
</style>