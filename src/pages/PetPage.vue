<template>
    <div class="content">
        <div class="container">
            <div v-if="pet">
                <img :src="imgSrc" :alt="pet.name">
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="vaccine in vaccines" :key="vaccine.id">
                                <td>{{ vaccine.name }}</td>
                                <td>{{ vaccine.local }}</td>
                                <td>{{ formatDate(vaccine.date) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-else>
                    <p>Nenhuma vacina registrada para este pet.</p>
                </div>
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
        formatDate(birth) {
            const [year, month, day] = birth.split('-');
            return `${day}/${month}/${year}`;
        },
        getGender(gender) {
            return gender === "M" ? "Masculino" : "Feminino";
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
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
    
            th {
                color: var(--p5);
                background-color: var(--c5);
            }
        }
    }

}
</style>