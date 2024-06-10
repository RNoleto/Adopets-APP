<template>
  <div class="modal">
    <form @submit.prevent="submit">
      <div class="inputTypes">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="email" />
      </div>
      <div class="inputTypes">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="password" />
      </div>
      <div class="buttons">
        <button type="submit">Login</button>
        <button type="button" @click="$emit('close')" class="close">Fechar</button>
      </div>
    </form>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import axios from "axios";
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    };
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

  .inputTypes {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  }

  label {
    color: var(--color-3);
  }

  .buttons {
    display: flex;
    gap: 20px;

    button {
      font: 600 14px/14px var(--title-font);
    }

    button.close {
      background: none;
      border: 1px solid var(--p3);
      color: var(--p1);
    }
  }
}
</style>
