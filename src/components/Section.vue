<template>
    <div>
        <div class="section">
            <p class="text_body">{{ title }}</p>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>{{ localColumn }}</th>
                        <th>Data</th>
                        <th class="buttons">
                            <button @click="add">Adicionar Novo</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td>
                            <span v-if="editIndex !== index">{{ item.name }}</span>
                            <input v-else v-model="item.name" />
                        </td>
                        <td>
                            <span v-if="editIndex !== index">
                                {{ title === 'Medicamentos' ? item.medicine : item.local }}
                            </span>
                            <input
                                v-if="editIndex === index && title === 'Medicamentos'"
                                v-model="item.medicine"
                            />
                            <input
                                v-if="editIndex === index && title !== 'Medicamentos'"
                                v-model="item.local"
                            />
                        </td>
                        <td>
                            <span v-if="editIndex !== index">{{ formatDate(item.date) }}</span>
                            <input v-else v-model="item.date" type="date" />
                        </td>
                        <td class="buttons">
                            <button v-if="editIndex === index" @click="save(index)">Salvar</button>
                            <button v-if="editIndex === index" @click="cancelEdit">Cancelar</button>
                            <button v-if="editIndex !== index" @click="edit(index)">Editar</button>
                            <button v-if="editIndex !== index" @click="deleteItem(item.id, index)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        items: Array,
        editIndex: Number
    },
    computed: {
        localColumn() {
            return this.title === 'Medicamentos' ? 'Medicamento' : 'Local';
        }
    },
    methods: {
        add() {
            this.$emit('add');
        },
        save(index) {
            this.$emit('save', index);
        },
        edit(index) {
            this.$emit('edit', index);
        },
        cancelEdit() {
            this.$emit('cancelEdit');
        },
        deleteItem(id, index) {
            this.$emit('delete', id, index);
        },
        formatDate(date) {
            if (!date) return 'Data não disponível';
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`;
        }
    }
};
</script>

<style lang="scss" scoped>
.section {
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
            width: calc(100% / 3);
            border: 1px solid var(--c4);
            padding: 8px;
            text-align: left;
            span{
                color: var(--p3);
            }
        }

        .buttons {
            width: 200px;
            display: flex;
            gap: 18px;

            button {
                padding: 2px 10px;
                font-size: 10px;
                margin: 0px !important;
            }
        }

        th {
            color: var(--c3);
            background-color: var(--p5);
        }
    }
}
</style>
