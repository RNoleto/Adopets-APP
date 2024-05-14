<template>
    <div class="content">
        <div class="container">
            Informações do Pet Clicado
            <div v-if="selectedPet">
                <img :src="selectedPet.img" :alt="selectedPet.name" class="photo">
                <p>{{ selectedPet.name }}</p>
            </div>
            <div v-else>
                Nenhum Pet Selecionado aqui
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            pet: [
                {
                    id: 1,
                    name: "Snow",
                    specie: "Canina",
                    birth_day: "21/08/2017",
                    sexo: "Masculino",
                    img: "https://blog-static.petlove.com.br/wp-content/uploads/2022/11/10133544/nomes-para-Poodle-Petlove.jpg",
                },
                {
                    id: 2,
                    name: "Fred",
                    specie: "Canina",
                    birth_day: "10/09/2018",
                    sexo: "Masculino",
                    img: "https://petanjo.com/blog/wp-content/uploads/2017/04/17831622324_c688bcc556_b.jpg",
                }
                ,
                {
                    id: 3,
                    name: "Mingau",
                    specie: "Felina",
                    birth_day: "01/02/2023",
                    sexo: "Feminino",
                    img: "https://blog.cobasi.com.br/wp-content/webpc-passthru.php?src=https://blog.cobasi.com.br/wp-content/uploads/2021/04/gato-branco-conheca-as-principais-racas-e-caracteristicas-meio-2.png&nocache=1",
                },
                {
                    id: 4,
                    name: "Hantaro",
                    specie: "Roedor",
                    birth_day: "01/05/2024",
                    sexo: "Macho",
                    img: "https://media.istockphoto.com/id/184337772/pt/foto/que-chamou-me-hamster-an%C3%A3o-de-6-semanas-de-idade.webp?b=1&s=170667a&w=0&k=20&c=KYvcLlei3j6UI7yJ-MPGQMSa0gqNeaSFdwsJoVh0qHg=",
                }
            ],
            selectedPetId: 0,
        }
    },
    created() {
        this.selectedPetId = parseInt(this.$route.params.id);
    },
    computed:{
        selectedPet(){
            return this.pet.find(pet => pet.id === this.selectedPetId);
        }
    }
}
</script>