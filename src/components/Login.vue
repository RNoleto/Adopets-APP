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
import { useAuthStore } from '../stores/authStore';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      try {
        const response = await axios.post('login', payload, {
          headers: {
            'Content-Type': 'application/json',
            'Access': 'application/json',
          }
        });

        // Armazena o token de acesso no cookie
        Cookie.set('_myapp_token', response.data.access_token);

        // Dados do usuário
        const user = {
          id: response.data.user_id,
          name: response.data.user_name,
          email: response.data.user_email,
        };

        // Usa o store para armazenar os dados do usuário
        const authStore = useAuthStore();
        authStore.login(user);

        // Armazena os dados do usuário no localStorage
        localStorage.setItem('user_id', user.id);
        localStorage.setItem('user_name', user.name);
        localStorage.setItem('user_email', user.email);

        // Mostra um alerta com os dados do usuário
        await Swal.fire({
          title: 'Login bem-sucedido!',
          text: `Bem-vindo ${user.name}!`,
          icon: 'success',
          confirmButtonText: 'OK'
        });

        this.$emit('close'); // Emitir evento para fechar modal de login
        this.$router.push('/');
      } catch (error) {
        Swal.fire({
          title: 'Erro!',
          text: 'Falha ao fazer login. Verifique suas credenciais e tente novamente.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
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
