<template>
    <div class="content">
        <div class="container">
            <div v-if="pet">
                <div class="infos">
                    <img :src="imgSrc" :alt="pet.name" class="petImg">
                    <div class="petDetails">
                        <p class="title">{{ pet.name }}</p>
                        <p class="text_body">Raça: {{ pet.breed }}</p>
                        <p class="text_body">Sexo: {{ getGender(pet.gender) }}</p>
                        <p class="text_body">Chip: {{ getChip(pet.chip_number) }}</p>
                        <p class="text_body">Adoção: {{ getAdoption(pet.status) }}</p>
                        <p class="text_body">Data de Nascimento: {{ formatDate(pet.birth) }}</p>
                    </div>
                </div>
                <!-- Informações de vacina -->
                <div v-if="vaccines.length" class="vaccines">
                    <p class="text_body">Vacinas</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Vacina</th>
                                <th>Local</th>
                                <th>Data</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(vaccine, index) in vaccines" :key="vaccine.id || index">
                                <template v-if="editVaccineIndex === index">
                                    <td><input v-model="vaccine.name" placeholder="Nome da Vacina"></td>
                                    <td><input v-model="vaccine.local" placeholder="Local"></td>
                                    <td><input type="date" v-model="vaccine.date"></td>
                                    <td class="buttons">
                                        <button @click="saveVaccine(index)">Salvar</button>
                                        <button @click="cancelEdit">Cancelar</button>
                                    </td>
                                </template>
                                <template v-else>
                                    <td>
                                        <p class="text_body">{{ vaccine.name }}</p>
                                    </td>
                                    <td>
                                        <p class="text_body">{{ vaccine.local }}</p>
                                    </td>
                                    <td>
                                        <p class="text_body">{{ formatDate(vaccine.date) }}</p>
                                    </td>
                                    <td class="buttons">
                                        <button @click="editVaccine(index)">Editar</button>
                                        <button @click="deleteVaccine(vaccine.id, index)">Excluir</button>
                                    </td>
                                </template>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <p class="text_body">Nenhuma vacina registrada para este pet.</p>
                </div>
                <!-- Botão para adicionar nova vacina -->
                <button @click="addNewVaccine">Adicionar Vacina</button>
            </div>
            <div v-else>
                Nenhum pet Selecionado aqui.
            </div>
            <!-- Informações de medicamentos vermifugos/antipulgas e etc -->
            <div v-if="medicines.length" class="medicines">
                <p class="text_body">Medicamentos</p>
                <table>
                    <thead>
                        <th>Nome</th>
                        <th>Medicamento</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </thead>
                    <tbody>
                        <tr v-for="(medicine, index) in medicines" :key="medicine.id || index">
                            <template v-if="editMedicineIndex === index">
                                <td><input v-model="medicine.name" placeholder="Nome da Vacina"></td>
                                <td><input v-model="medicine.medicine" placeholder="Vermifugo, antipulga e etc..."></td>
                                <td><input type="date" v-model="medicine.date"></td>
                                <td class="buttons">
                                    <button @click="saveMedicine(index)">Salvar</button>
                                    <button @click="cancelMedicineEdit">Cancelar</button>
                                </td>
                            </template>
                            <template v-else>
                                <td>
                                    <p class="text_body">{{ medicine.name }}</p>
                                </td>
                                <td>
                                    <p class="text_body">{{ medicine.medicine }}</p>
                                </td>
                                <td>
                                    <p class="text_body">{{ formatDate(medicine.date) }}</p>
                                </td>
                                <td class="buttons">
                                    <button @click="editMedicine(index)">Editar</button>
                                    <button @click="deleteMedicine(medicine.id, index)">Excluir</button>
                                </td>
                            </template>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <p class="text_body">Nenhum medicamento registrado para esse pet.</p>
            </div>
            <button @click="addNewMedicine">Adicionar Medicamento</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            pet: [],
            selectedPetId: 0,
            imgSrc: null,
            vaccines: [],
            newVaccine: {
                name: '',
                local: '',
                date: ''
            },
            medicines: [],
            newMedicine: {
                name: '',
                medicine: '',
                date: ''
            },
            editVaccineIndex: null,
            editMedicineIndex: null,
        }
    },
    async created() {
        const petId = this.$route.params.id;
        await this.fetchPetDetails(petId);
        if (this.pet) {
            await this.fetchPetImage(petId);
            await this.fetchPetVaccines(petId);
            await this.fetchPetMedicines(petId);
        }
    },
    methods: {
        async fetchPetDetails(petId) {
            try {
                const response = await axios.get(`/animals/${petId}`);
                this.pet = response.data;
            } catch (error) {
                console.log('Erro ao carregar os detalhes do pet', error);
            }
        },
        async fetchPetImage(petId) {
            try {
                const response = await axios.get(`/animalsimage/${petId}`, { responseType: 'blob' });
                const url = URL.createObjectURL(response.data);
                this.imgSrc = url;
            } catch (error) {
                console.log('Erro ao carregar a imagem do pet:', error);
            }
        },
        async fetchPetVaccines(petId) {
            try {
                const response = await axios.get(`/vaccines/pet/${petId}`);
                this.vaccines = response.data;
            } catch (error) {
                console.log('Erro ao carregar informações de vacina do pet:', error);
            }
        },
        async fetchPetMedicines(petId) {
            try {
                const response = await axios.get(`/medicines/pet/${petId}`);
                this.medicines = response.data;
            } catch (error) {
                console.log('Erro ao carregar informações de medicamentos do pet:', error);
            }
        },
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
        addNewVaccine() {
            this.vaccines.push({ name: '', local: '', date: '', id: null });
            this.editVaccineIndex = this.vaccines.length - 1;
        },
        editVaccine(index) {
            this.editVaccineIndex = index;
        },
        cancelEdit() {
            if (this.vaccines[this.editVaccineIndex].id === null) {
                this.vaccines.pop();
            }
            this.editVaccineIndex = null;
        },
        cancelMedicineEdit(){
            if (this.medicines[this.editMedicineIndex].id === null){
                this.medicine.pop();
            }
            this.editMedicineIndex = null;
        },
        editMedicine(index) {
            this.editMedicineIndex = index;
        },
        addNewMedicine() {
            this.medicines.push({ name: '', medicine: '', date: '', id: null });
            this.editMedicineIndex = this.medicines.length - 1;
        },
        async saveVaccine(index) {
            try {
                const vaccine = { ...this.vaccines[index], ref_id_animal: this.$route.params.id };
                let response;
                if (vaccine.id === null) {
                    response = await axios.post('/vaccines', vaccine);
                    this.vaccines[index] = response.data;
                } else {
                    response = await axios.put(`/vaccines/${vaccine.id}`, vaccine);
                    this.vaccines[index] = response.data;
                }
                this.editVaccineIndex = null;
            } catch (error) {
                console.log('Erro ao salvar a vacina:', error);
            }
        },
        async deleteVaccine(id, index) {
            try {
                await axios.delete(`/vaccines/${id}`);
                this.vaccines.splice(index, 1);
            } catch (error) {
                console.log('Erro ao deletar a vacina:', error);
            }
        },
        async saveMedicine(index) {
            try {
                const medicine = { ...this.medicines[index], ref_id_animal: this.$route.params.id };
                let response;
                if (medicine.id === null) {
                    response = await axios.post('/medicines', medicine);
                    this.medicines[index] = response.data;
                } else {
                    response = await axios.put(`/medicines/${medicine.id}`, medicine);
                    this.medicines[index] = response.data;
                }
                this.editMedicineIndex = null;
            } catch (error) {
                console.log('Erro ao salvar a medicamento:', error);
            }
        },
        async deleteMedicine(id, index){
            try{
                await axios.delete(`/medicines/${id}`);
                this.medicines.splice(index, 1);
            } catch (error){
                console.log('Erro ao deletar o medicamento', error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    .infos {
        display: flex;
        gap: 18px;

        .petImg {
            width: 500px;
            box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .petDetails {
            align-content: center;

            .title {
                color: var(--p3);
            }
        }
    }

    .text_body {
        margin-top: 0px;
    }

    .vaccines,
    .medicines {
        margin-top: 10px;

        .text_body {
            color: var(--p3);
        }

        td .text_body {
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 8px;

            th,
            td {
                border: 1px solid var(--c4);
                padding: 8px;
                text-align: left;
            }

            .buttons {
                display: flex;
                gap: 18px;

                button {
                    padding: 2px 10px;
                    font-size: 10px;
                    margin: 0px !important;
                }
            }

            th {
                color: var(--p5);
                background-color: var(--c5);
            }
        }
    }

}
</style>