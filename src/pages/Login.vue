<template>
  <div class="container">
    <div class="content page">
      <img src="/assets/img/logo.png" alt="logo" class="logo" />
      <h2>Login</h2>
      <form @submit.prevent="submit">
        <div>
          <label for="email" class="inputTypes">Email:</label>
          <input type="email" name="email" id="email" v-model="email" class="inputTypes" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" v-model="password" class="inputTypes" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import axios from "axios";
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  metaInfo() {
    return {
      hideFooter: true
    }
  },
  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      axios.post('login', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access': 'application/json',
        }
      })
        .then(response => {
          // console.log(response.data);
          //Armazena o token de acesso no cookie
          Cookie.set('_myapp_token', response.data.access_token);
          //Armazena os dados do usuário no local storage
          localStorage.setItem('user', JSON.stringify(response.data.user_name));
          localStorage.setItem('userId', JSON.stringify(response.data.user_id));
          //Mostra um alerta com os dados do usuário
          Swal.fire({
            title: 'Login bem-sucedido!',
            text: `Bem-vindo ${response.data.user_name}!`,
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            this.$router.push('/');
          });
        })
        .catch(error => {
          Swal.fire({
            title: 'Erro!',
            text: 'Falha ao fazer login. Verifique suas credenciais e tente novamente.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        });
    }
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
