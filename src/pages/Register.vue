<template>
  <div class="container">
    <div class="content page">
      <img src="/public/assets/logo_adopets.svg" alt="logo" class="logo" />
      <h2>Cadastro de Usuário</h2>
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
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
      },
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

<style lang="scss" scoped>
.container {
  min-height: 640px;
}

.page {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 300px;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: var(--color-1);
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba($color: #000000, $alpha: 0.25);

  .logo {
    width: 120px;
  }

  label {
    color: var(--color-3);
  }

  .inputTypes {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  }

  button {
    background-color: var(--color-3);
    color: var(--color-4);
    width: 100%;
    padding: 5px;
    box-shadow: 2px 2px 2px rgba($color: #000000, $alpha: 0.25);
  }
}
</style>