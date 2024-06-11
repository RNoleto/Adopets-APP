<template>
  <p class="title_dashboard">Lista de usuários</p>
  <div class="cards">
    <Card :description="totalUsers" :showButton="false">
      <template #card_top>
        <p class="text_body">Total de usuários criados</p>
      </template>
      <template #description>
        <p class="text_body count">{{ totalUsers }}</p>
      </template>
    </Card>
    <Card #card_top>
      <p class="text_body">Usuários ativos</p>
    </Card>
    <Card #card_top>
      <p class="text_body">Usuários desativos</p>
    </Card>
  </div>
  <div class="container">
    <div v-for="user in usersList" :key="user.id" class="content user">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <p>Registrado em: {{ formatDate(user.created_at) }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Card from './Card.vue';

export default {
  data() {
    return {
      usersList: [
        {
          id: 1,
          name: "Ramon Noleto",
          email: "devnoleto@gmail.com",
          created_at: "10/06/2024",
        }
      ],
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
.cards {
  display: flex;
  gap: 20px;

  .card {
    .text_body {
      margin: 0px;

      &.count {
        font-size: 36px;
        color: var(--p2);
      }
    }
  }
}


.container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.content {
  margin: 0px;
}

.content.user {
  padding: 10px 20px;
  width: calc(calc(100% / 4) - 8px);
  border: 1px solid var(--c2);
  background-color: var(--w);
  border-radius: 5px;
  box-sizing: border-box;
}
</style>
