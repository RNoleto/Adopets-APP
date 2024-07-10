<template>
    <div class="infos">
        <img :src="imgSrc" :alt="pet.name" class="petImg">
        <div class="petDetails" v-if="!isEditing">
            <p class="title">{{ pet.name }}</p>
            <p class="text_body">Raça: {{ pet.breed }}</p>
            <p class="text_body">Sexo: {{ getGender(pet.gender) }}</p>
            <p class="text_body">Nº Chip: {{ getChip(this.pet.chip_number) }}</p>
            <p class="text_body">Adoção: {{ getAdoption(pet.status) }}</p>
            <p class="text_body">Data de Nascimento: {{ formatDate(pet.birth) }}</p>
            <div class="buttons">
                <button @click="generatePDF">Carteirinha</button>
                <button @click="editPet">Editar</button>
                <button @click="confirmDeletePet">Excluir</button>
            </div>
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
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
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
        },
        confirmDeletePet(){
            Swal.fire({
                title: 'Tem certeza?',
                text: `Deseja realmente excluir o pet ${this.pet.name}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#00AAFF',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim, excluir!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if(result.isConfirmed){
                    this.deletePet();
                }
            })
        },
        async deletePet(){
            try{
                await axios.delete(`/animals/${this.pet.id}`);
                Swal.fire({
                    title: 'Pet deletado com sucesso!',
                    text: `${this.pet.name} foi deletado da sua lista de pets.`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    this.$router.go(-1);
                });
            }catch(error){
                console.error('Erro ao deletar pet:', error);
                alert('Erro ao deletar pet. Tente novamente mais tarde.');
            }
        },
        generatePDF() {
            const doc = new jsPDF();
            const imgWidth = 60;
            const imgHeight = 60;
            const imgRotate = -90;
            const imgData = this.imgSrc;

            doc.setFillColor(11, 148, 228);
            doc.rect(10, 10, 190, 80, 'F');

            if (imgData) {
                doc.addImage(imgData, 'JPEG', 20, -40, imgWidth, imgHeight, "", "", imgRotate);
            }
            doc.setTextColor(222, 222, 222);
            doc.setFontSize(22);
            doc.text(this.pet.name, 85, 30);
            doc.setTextColor(40, 40, 40);
            doc.setFontSize(12);
            doc.text(`Raça: ${this.pet.breed}`, 85, 40);
            doc.text(`Sexo: ${this.getGender(this.pet.gender)}`, 120, 40);
            doc.text(`Nº Chip: ${this.getChip(this.pet.chip_number)}`, 85, 50);
            doc.text(`Adoção: ${this.getAdoption(this.pet.status)}`, 85, 60);
            doc.text(`Data de Nascimento: ${this.formatDate(this.pet.birth)}`, 85, 70);

            // Abre o PDF em uma nova aba
            const pdfUrl = doc.output('bloburl');
            window.open(pdfUrl, '_blank');
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
    width: 100%;
    display: flex;
    gap: 18px;

    .petImg {
        max-width: 600px !important;
        max-height: 400px !important;
        object-fit: cover;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }

    .petDetails {
        align-content: center;
        width: 800px;
        
        .buttons{
            display: flex;
            gap: 32px;
            button {
                    font: var(--button-font-composite);
                    padding: 8px 16px;
                    width: max-content;
                    align-self: flex-start;
                }
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

        }
    }
}

.text_body {
    margin-top: 0px;
}
</style>
