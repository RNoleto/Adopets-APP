<template>
    <div class="infos">
        <img :src="imgSrc" :alt="pet.name" class="petImg">
        <div class="petDetails">
            <p class="title">{{ pet.name }}</p>
            <p class="text_body">Raça: {{ pet.breed }}</p>
            <p class="text_body">Sexo: {{ getGender(pet.gender) }}</p>
            <p class="text_body">Nº Chip: {{ getChip(pet.chip_number) }}</p>
            <p class="text_body">Adoção: {{ getAdoption(pet.status) }}</p>
            <p class="text_body">Data de Nascimento: {{ formatDate(pet.birth) }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pet: Object,
        imgSrc: String
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

        .title {
            color: var(--p3);
        }
    }
}

.text_body {
    margin-top: 0px;
}
</style>
