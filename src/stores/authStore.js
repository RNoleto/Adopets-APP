import { defineStore } from 'pinia';
import Cookie from 'js-cookie';
import { useUserStore } from './userStore';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: Cookie.get('_myapp_token') !== undefined,
    user: {
      id: localStorage.getItem('user_id'),
      name: localStorage.getItem('user_name'),
      email: localStorage.getItem('user_email'),
    }
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

      // Remove dados do usuário do localStorage
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_email');

      // Limpa os dados do usuário no userStore
      const userStore = useUserStore();
      userStore.clearUser();
    }
  }
});
