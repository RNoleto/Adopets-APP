<template>
  <p class="title">Lista de usuários</p>
  <p class="text">Total de usuarios criados: {{ totalUsers }} </p>
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

export default {
  data() {
    return {
      usersList: [],
    }
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
.title {
  text-align: center;
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
