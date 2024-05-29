<template>
  <p class="title_dashboard">Lista de usuários</p>
  <!-- <div class="card">
    <p class="text_body">Total de usuarios criados:</p>
    <p class="text_body count">{{ totalUsers }}</p>
  </div> -->
  <Card :title="'Total de usuários criados'" :description="totalUsers" :showButton="false" />
  <div class="container">
    <div v-for="user in usersList" :key="user.id" class="content">
      <p class="text">{{ user.name }}</p>
      <p class="text">{{ user.email }}</p>
      <p class="text">{{ formatDate(user.created_at) }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Card from './Card.vue';

export default {
  data() {
    return {
      usersList: [],
    }
  },
  components: {
    Card,
  },
  mounted() {
    this.loadUsers();
  },
  computed: {
    totalUsers() {
      return this.usersList.length;
    }
  },
  methods: {
    loadUsers() {
      axios
        .get('/register')
        .then((response) => {
          this.usersList = response.data;
        })
        .catch((error) => {
          console.error('Erro ao carregar lista de usuários', error);
        });
    },
    formatDate(date) {
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      return new Date(date).toLocaleDateString('pt-BR', options);
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  margin-top: 24px;
  width: max-content;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid var(--p3);
  box-shadow: 2px 2px 3px rgba($color: #000000, $alpha: 0.1);
  .text_body{
    margin: 0px;
    &.count{
      font-size: 36px;
      color: var(--p2);
    }
  }
  
}
.container {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;

  .content {
    width: 100%;
    border: 1px solid #e1e1e1;
    background-color: #fefefe;
    border-radius: 3px;
  }
}
</style>
