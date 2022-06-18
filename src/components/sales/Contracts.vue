<template>
    <h3>Contratos</h3>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">LEAD</th>
                <th scope="col">SERVIÇO</th>
                <th scope="col">DATA INÍCIO</th>
                <th scope="col">DATA FIM</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="d in data" :key="d.id">
                <td>{{ d.id }}</td>
                <td>{{ d.lead.name }}</td>
                <td>{{ d.service.service }}</td>
                <td>{{ d.startDate }}</td>
                <td>{{ d.endDate }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
    name: "Contracts",
    mixins: [ ApiMixin ],
    created() {
        this.getDataApi('http://localhost:3000/contracts?_expand=lead&_expand=service')
    }
}
</script>