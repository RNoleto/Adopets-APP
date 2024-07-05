// stores/authStore.js
import { defineStore } from 'pinia';
import Cookie from "js-cookie";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: Cookie.get('_myapp_token') !== undefined,
    user: null
  }),
  actions: {
    login(user) {
      this.isAuthenticated = true;
      this.user = user;
    },
    logout() {
      this.isAuthenticated = false;
      this.user = null;
      Cookie.remove('_myapp_token');
    }
  }
});
