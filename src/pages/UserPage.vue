<template>
    <div class="content">
        <p class="title">Página do Usuário.</p>
        <div class="user">
            <p class="text_body">Seja bem vindo {{ user.name }}!</p>
        </div>
        <ul class="menu">
            <li><button @click="setActiveView('myInfos')">Meus dados</button></li>
            <li><button @click="setActiveView('myPets')">Meus Pets</button></li>
            <li><button @click="setActiveView('lostPets')">Pets Perdidos</button></li>
        </ul>
        <div class="infos">
            <div v-if="activeView === 'myInfos'" class="myInfos">
                <p>Nome: {{ user.name }}</p>
                <p>Email: {{ user.email }}</p>
            </div>
            <div v-if="activeView === 'myPets'">
                <PetCard />
                <button @click="openAddPetModal">Adicionar Pet</button>
            </div>
            <div v-if="activeView === 'lostPets'">
                <p>Pets Perdidos</p>
            </div>
        </div>
        <AddPetModal :isOpen="isAddPetModalOpen" @close="closeAddPetModal" @add-pet="addPet" />
    </div>
</template>

<script>
import PetCard from '../components/PetCard.vue';
import AddPetModal from '../components/AddPetModal.vue';
export default {
    components: {
        PetCard,
        AddPetModal,
    },
    data() {
        return {
            user: {
                id: 1,
                name: "Ramon Ribeiro Noleto",
                email: "devnoleto@gmail.com",
                telefone: "(96) 98140-3089",
                endereco: "Rua Juvenal Garcia Nº84-B, Centro - Itajaí - SC",
            },
            activeView: 'dados',
            isAddPetModalOpen: false,
        };
    },
    methods: {
        setActiveView(view) {
            this.activeView = view;
        },
        openAddPetModal() {
            this.isAddPetModalOpen = true;
        },
        closeAddPetModal() {
            this.isAddPetModalOpen = false;
        },
        addPet(newPet) {
            console.log('Novo pet adicionado:', newPet);
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    height: 100vh; //Temporario

    .title {
        font: 600 32px/40px var(--body-font);
        color: var(--c10);
    }

    .user {
        margin-top: 24px;

        .text_body {
            color: var(--c9);
        }
    }

    .menu {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        li {
            button {
                font: 500 14px/14px var(--title-font);
            }
        }
    }

    .infos {
        margin-top: 24px;

        .myInfos {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;

            p {
                width: 100%;
            }
        }
    }
}
</style>