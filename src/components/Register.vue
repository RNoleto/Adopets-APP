<template>
  <div class="modal">
    <form @submit.prevent="registerUser" method="POST">
      <div class="inputTypes">
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="inputTypes">
        <label for="email">Email</label>
        <input type="email" name="email" v-model="formData.email" required />
      </div>
      <div class="inputTypes">
        <label for="password">Senha</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <button type="submit">Cadastrar</button>
      <button type="button" @click="$emit('close')">Fechar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    registerUser() {
      axios
        .post("/register", this.formData)
        .then((response) => {
          window.alert(`Cadastro de ${this.formData.name} feito com sucesso!`);
        })
        .catch((error) => {
          console.error("Erro ao cadastrar usuário:", error.response.data);
        });
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

form {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
