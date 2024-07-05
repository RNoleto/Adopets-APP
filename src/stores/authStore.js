// authStore.js
import { defineStore } from 'pinia';
import Cookie from 'js-cookie';
import { useUserStore } from './userStore'; // Importe o userStore aqui

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: Cookie.get('_myapp_token') !== undefined,
    user: null
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true;
      this.user = user;

      // Atualiza os dados do usuário no userStore
      const userStore = useUserStore();
      userStore.setUser(user);
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      Cookie.remove('_myapp_token');

      // Limpa os dados do usuário no userStore
      const userStore = useUserStore();
      userStore.clearUser();
    }
  }
});
