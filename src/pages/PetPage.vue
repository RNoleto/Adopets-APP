<template>
    <div class="content">
        <div class="container">
            <div v-if="pet">
                <PetDetails :pet="pet" :imgSrc="imgSrc" @update-pet="handlePetUpdate" />
                <Section title="Vacinas" :items="vaccines" :editIndex="editVaccineIndex" @add="addNewVaccine" @save="saveVaccine" @edit="editVaccine" @cancelEdit="cancelEdit" @delete="deleteVaccine" />
                <Section title="Medicamentos" :items="medicines" :editIndex="editMedicineIndex" @add="addNewMedicine" @save="saveMedicine" @edit="editMedicine" @cancelEdit="cancelMedicineEdit" @delete="deleteMedicine" />
                <button v-if="vaccines.length > 0 || medicines.length > 0" @click="generatePDF">Imprimir Ficha</button>
            </div>
            <div v-else>
                Nenhum pet Selecionado aqui.
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PetDetails from './../components/PetDetail.vue';
import Section from './../components/Section.vue';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
    components: { PetDetails, Section },
    data() {
        return {
            pet: null,
            imgSrc: null,
            vaccines: [],
            medicines: [],
            editVaccineIndex: null,
            editMedicineIndex: null,
        };
    },
    async created() {
        const petId = this.$route.params.id;
        await this.fetchPetDetails(petId);
        if (this.pet) {
            await Promise.all([this.fetchPetImage(petId), this.fetchPetVaccines(petId), this.fetchPetMedicines(petId)]);
        }
    },
    methods: {
        async fetchPetDetails(petId) {
            try {
                const response = await axios.get(`/animals/${petId}`);
                this.pet = response.data;
            } catch (error) {
                console.error('Erro ao carregar os detalhes do pet', error);
            }
        },
        async fetchPetImage(petId) {
            try {
                const response = await axios.get(`/animalsimage/${petId}`, { responseType: 'blob' });
                this.imgSrc = URL.createObjectURL(response.data);
            } catch (error) {
                console.error('Erro ao carregar a imagem do pet:', error);
            }
        },
        async fetchPetVaccines(petId) {
            try {
                const response = await axios.get(`/vaccines/pet/${petId}`);
                this.vaccines = response.data;
            } catch (error) {
                if(error.response && error.response.status === 404){
                    console.warn('Nenhuma vacina encontrada para este pet.');
                    this.vaccines = [];
                } else {
                    console.error('Erro ao carregar informações de vacina do pet:', error);
                }
            }
        },
        async fetchPetMedicines(petId) {
            try {
                const response = await axios.get(`/medicines/pet/${petId}`);
                this.medicines = response.data;
            } catch (error) {
                if(error.response && error.response.status === 404){
                    console.warn('Nenhum medicamento encontrado para este pet.');
                    this.medicines = [];
                }else {
                    console.error('Erro ao carregar informações de medicamentos do pet:', error);
                }
            }
        },
        handlePetUpdate(updatedPet) {
            this.pet = updatedPet;
            this.fetchPetImage(updatedPet.id); // Atualize a imagem caso ela tenha mudado
        },
        async saveItem(index, item, endpoint, list, editIndexSetter) {
            try {
                const data = { ...list[index], ref_id_animal: this.$route.params.id };
                let response;
                if (data.id === null) {
                    response = await axios.post(endpoint, data);
                    list[index] = response.data;
                } else {
                    response = await axios.put(`${endpoint}/${data.id}`, data);
                    list[index] = response.data;
                }
                editIndexSetter(null);
            } catch (error) {
                console.error(`Erro ao salvar ${item}:`, error);
            }
        },
        async deleteItem(id, index, endpoint, list) {
            try {
                await axios.delete(`${endpoint}/${id}`);
                list.splice(index, 1);
            } catch (error) {
                console.error(`Erro ao deletar ${item}:`, error);
            }
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
        async saveVaccine(index) {
            this.saveItem(index, 'vacina', '/vaccines', this.vaccines, (index) => (this.editVaccineIndex = index));
        },
        async deleteVaccine(id, index) {
            this.deleteItem(id, index, '/vaccines', this.vaccines);
        },
        addNewMedicine() {
            this.medicines.push({ name: '', medicine: '', date: '', id: null });
            this.editMedicineIndex = this.medicines.length - 1;
        },
        editMedicine(index) {
            this.editMedicineIndex = index;
        },
        cancelMedicineEdit() {
            if (this.medicines[this.editMedicineIndex].id === null) {
                this.medicines.pop();
            }
            this.editMedicineIndex = null;
        },
        async saveMedicine(index) {
            this.saveItem(index, 'medicamento', '/medicines', this.medicines, (index) => (this.editMedicineIndex = index));
        },
        async deleteMedicine(id, index) {
            this.deleteItem(id, index, '/medicines', this.medicines);
        },
        formatDate(date) {
            if (!date) return 'Data não disponível';
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        },
        getGender(gender) {
            return gender === "M" ? "Macho" : "Femea";
        },
        generatePDF() {
            const doc = new jsPDF();

            doc.setFontSize(18);
            doc.text('Carteirinha Pet', 14, 22);

            doc.setFontSize(12);
            doc.text(`Nome: ${this.pet.name}`, 14, 32);
            doc.text(`Espécie: ${this.pet.specie}`, 14, 40);
            doc.text(`Raça: ${this.pet.breed}`, 14, 48);
            doc.text(`Sexo: ${this.getGender(this.pet.gender)}`, 14, 56);
            doc.text(`Data de Nascimento: ${this.formatDate(this.pet.birth)}`, 14, 64);
            doc.text(`Nº Chip: ${this.pet.chip_number}`, 14, 74);

            let finalY = 74;

            // Tabela de Vacinas
            if (this.vaccines.length > 0) {
                doc.text('Vacinas', 14, finalY + 10);
                doc.autoTable({
                    startY: finalY + 18,
                    head: [['Nome', 'Local', 'Data']],
                    body: this.vaccines.map(vaccine => [vaccine.name, vaccine.local, this.formatDate(vaccine.date)])
                });
                finalY = doc.autoTable.previous.finalY;
            }

            // Tabela de Medicamentos
            if (this.medicines.length > 0) {
                doc.text('Medicamentos', 14, finalY + 10);
                doc.autoTable({
                    startY: finalY + 18,
                    head: [['Nome', 'Medicamento', 'Data']],
                    body: this.medicines.map(medicine => [medicine.name, medicine.medicine, this.formatDate(medicine.date)])
                });
            }

            doc.output('dataurlnewwindow');
        }
    }
};
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

            th {
                color: var(--p5);
                background-color: var(--c5);
            }
        }
    }
}
</style>
