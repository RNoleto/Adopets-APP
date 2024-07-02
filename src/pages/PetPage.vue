<template>
    <div class="content">
        <div class="container">
            
            
            <div v-if="pet">
                <img :src="imgSrc" :alt="pet.name">
                <p>{{ pet.name }}</p>
                <p>{{ pet.breed }}</p>
                <p>{{ formatDate(pet.birth) }}</p>
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
        }
    },
    async created(){
        const petId = this.$route.params.id;
        await this.fetchPetDetails(petId);
        if(this.pet) {
            await this.fetchPetImage(petId);
        }
    },
    methods:{
        async fetchPetDetails(petId){
            try{
                const response = await axios.get(`/animals/${petId}`);
                this.pet = response.data;
                console.log('Dados do pet selecionado:', this.pet);
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
        formatDate(birth) {
            const [year, month, day] = birth.split('-');
            return `${day}/${month}/${year}`;
        }
    }
}
</script>