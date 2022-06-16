<template>
    <div>
        <h5>{{ data.id }} - {{ data.name }} </h5>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="data.id">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Nome</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="data.name">
            </div>
        </div>
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">Telefone</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="data.telephone">
            </div>
        </div>

        <div class="col-auto d-flex justify-content-around">
            <button type="button" class="btn btn-warning" @click="$router.push({name: 'leads'})">Voltar</button>
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
    name: 'Lead',
    mixins: [ ApiMixin ],
    created() {
        this.getDataApi(`http://localhost:3000/leads/${this.$route.params.id}`)
    }
}
</script>
