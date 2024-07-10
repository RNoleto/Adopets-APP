<template>
    <div class="infos">
        <img :src="imgSrc" :alt="pet.name" class="petImg">
        <div class="petDetails" v-if="!isEditing">
            <p class="title">{{ pet.name }}</p>
            <p class="text_body">Raça: {{ pet.breed }}</p>
            <p class="text_body">Sexo: {{ getGender(pet.gender) }}</p>
            <p class="text_body">Nº Chip: {{ getChip(pet.chip_number) }}</p>
            <p class="text_body">Adoção: {{ getAdoption(pet.status) }}</p>
            <p class="text_body">Data de Nascimento: {{ formatDate(pet.birth) }}</p>
            <button @click="editPet">Editar</button>
        </div>
        <div class="petDetails" v-else>
            <form @submit.prevent="updatePet">
                <label>Nome: <input v-model="editForm.name" required /></label>
                <label>Raça: <input v-model="editForm.breed" required /></label>
                <label>Sexo: 
                    <select v-model="editForm.gender" required>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </label>
                <label>Nº Chip: <input v-model="editForm.chip_number" /></label>
                <label>Adoção: 
                    <select v-model="editForm.status" required>
                        <option value="0">Indisponível</option>
                        <option value="1">Disponível</option>
                    </select>
                </label>
                <label>Data de Nascimento: <input type="date" v-model="editForm.birth" required /></label>
                <div class="buttons">
                    <button type="submit">Salvar</button>
                    <button @click="cancelEdit">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import { useUserStore } from '../stores/userStore';

export default {
    props: {
        pet: Object,
        imgSrc: String
    },
    data() {
        return {
            isEditing: false,
            editForm: {
                name: this.pet.name,
                gender: this.pet.gender,
                birth: this.pet.birth,
                specie: this.pet.specie,
                breed: this.pet.breed,
                chip_number: this.pet.chip_number,
                status: this.pet.status,
                ref_id_user: this.pet.ref_id_user
            }
        };
    },
    methods: {
        formatDate(date) {
            if (!date) return 'Data não disponível';
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        },
        getChip(chip) {
            return chip === '' || chip === null ? "Não informado" : chip;
        },
        getAdoption(status) {
            return status === 0 ? 'Indisponível' : 'Disponível';
        },
        getGender(gender) {
            return gender === "M" ? "Masculino" : "Feminino";
        },
        editPet() {
            this.isEditing = true;
        },
        cancelEdit() {
            this.isEditing = false;
        },
        async updatePet() {
            try {
                const userStore = useUserStore();
                const response = await axios.put(`/animals/${this.pet.id}`, this.editForm);
                this.$emit('update-pet', response.data);
                this.isEditing = false;
                this.$emit('update-pet', response.data);
            } catch (error) {
                console.error('Erro ao atualizar pet:', error);
            }
        }
    },
    watch: {
        pet: {
            handler(newPet) {
                this.editForm = { ...newPet };
            },
            deep: true
        }
    }
};
</script>


<style lang="scss" scoped>
.infos {
    display: flex;
    gap: 18px;

    .petImg {
        width: 500px;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }

    .petDetails {
        align-content: center;
        width: 100%;

        button{
            font: var(--button-font-composite);
            padding: 8px 16px;
        }

        .title {
            color: var(--p3);
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;

            label {
                display: flex;
                justify-content: space-between;
                width: 100%;
                max-width: 400px;

                input, select {
                    flex: 1;
                    margin-left: 10px;
                }
            }

            .buttons{
                justify-content: space-between;
                display: flex;
                button {
                    width: max-content;
                    align-self: flex-start;
                }
            }
        

        }
    }
}

.text_body {
    margin-top: 0px;
}
</style>

