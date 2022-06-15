<template>
    <h1>Leads</h1>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">NOME</th>
                <th scope="col">TELEFONE</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in data" :key="d.id">
                <td>{{ d.id }}</td>
                <td>{{ d.name }}</td>
                <td>{{ d.telephone }}</td>
                <td>
                    <router-link to="/home/sales/leads" class="btn btn-sm btn-primary">
                        <i class="bi bi-pencil-square" style="cursor:pointer"></i>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "Leads",
    data() {
        return {
            data: null
        }
    },
    methods: {
        getDataApi() {
            fetch('http://localhost:3000/leads')
            .then( response => response.json() )
            .then( response => {
                this.data = response
            })
        }
    },
    created() {
        this.getDataApi()
    }
}
</script>