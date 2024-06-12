<template>
    <div class="content">
        <div class="container">
            <div v-if="selectedPet">
                <img :src="selectedPet.img" :alt="selectedPet.animal" class="photo">
                <p>{{ selectedPet.animal }}</p>
            </div>
            <div v-else>
                Nenhum Pet Selecionado aqui
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pet: [],
            selectedPetId: 0,
        }
    },
    created() {
        this.selectedPetId = parseInt(this.$route.params.id);
    },
    computed: {
        selectedPet() {
            return this.pet.find(pet => pet.id === this.selectedPetId);
        }
    }
}
</script>