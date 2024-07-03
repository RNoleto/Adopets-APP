<template>
    <div class="content">
        <div class="container">
            <div v-if="pet">
                <img :src="imgSrc" :alt="pet.name" class="petImg">
                <p class="title">{{ pet.name }}</p>
                <p class="text_body">Raça: {{ pet.breed }}</p>
                <p class="text_body">Sexo: {{ getGender(pet.gender) }}</p>
                <p class="text_body">Data de Nascimento: {{ formatDate(pet.birth) }}</p>
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
                                <template v-if="editIndex === index">
                                    <td><input v-model="vaccine.name" placeholder="Nome da Vacina"></td>
                                    <td><input v-model="vaccine.local" placeholder="Local"></td>
                                    <td><input type="date" v-model="vaccine.date"></td>
                                    <td class="buttons">
                                        <button @click="saveVaccine(index)">Salvar</button>
                                        <button @click="cancelEdit">Cancelar</button>
                                    </td>
                                </template>
                                <template v-else>
                                    <td><p class="text_body">{{ vaccine.name }}</p></td>
                                    <td><p class="text_body">{{ vaccine.local }}</p></td>
                                    <td><p class="text_body">{{ formatDate(vaccine.date) }}</p></td>
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
                    <p>Nenhuma vacina registrada para este pet.</p>
                </div>
                <!-- Botão para adicionar nova vacina -->
                <button @click="addNewVaccine">Adicionar Vacina</button>
            </div>
            <div v-else>
                Nenhum pet Selecionado aqui.
            </div>
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
            editIndex: null
        }
    },
    async created(){
        const petId = this.$route.params.id;
        await this.fetchPetDetails(petId);
        if(this.pet) {
            await this.fetchPetImage(petId);
            await this.fetchPetVaccines(petId);
        }
    },
    methods:{
        async fetchPetDetails(petId){
            try{
                const response = await axios.get(`/animals/${petId}`);
                this.pet = response.data;
            } catch (error){
                console.log('Erro ao carregar os detalhes do pet', error);
            }
        },
        async fetchPetImage(petId){
            try {
                const response = await axios.get(`/animalsimage/${petId}`, { responseType: 'blob'});
                const url = URL.createObjectURL(response.data);
                this.imgSrc = url;
            } catch (error) {
                console.log('Erro ao carregar a imagem do pet:', error);
            }
        },
        async fetchPetVaccines(petId){
            try{
                const response = await axios.get(`/vaccines/pet/${petId}`);
                this.vaccines = response.data;
            }catch(error){
                console.log('Erro ao carregar informações de vacina do pet:', error);
            }
        },
        formatDate(date) {
            if(!date) return 'Data não disponível';
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        },
        getGender(gender) {
            return gender === "M" ? "Masculino" : "Feminino";
        },
        addNewVaccine() {
            this.vaccines.push({ name: '', local: '', date: '', id: null });
            this.editIndex = this.vaccines.length - 1;
        },
        editVaccine(index) {
            this.editIndex = index;
        },
        cancelEdit() {
            if (this.vaccines[this.editIndex].id === null) {
                this.vaccines.pop();
            }
            this.editIndex = null;
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
                this.editIndex = null;
            } catch (error) {
                console.log('Erro ao salvar a vacina:', error);
            }
        },
        async deleteVaccine(id, index){
            try{
                await axios.delete(`/vaccines/${id}`);
                this.vaccines.splice(index, 1);
            }catch(error){
                console.log('Erro ao deletar a vacina:', error);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    .petImg{
        height: 350px;
        object-fit: cover;
        object-position: top;
    }
    .title {
        color: var(--p3);
    }

    .text_body {
        margin-top: 0px;
    }
    .vaccines{
        margin-top: 10px;
        .text_body{
            text-align: center;
            color: var(--p3);
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
            
            .buttons{
             display: flex;
             gap: 18px;
             button{
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