<template>
    <div>
        <h2>Serviços</h2>
        <hr>
        <div class="row mb-2">
            <div class="col d-flex justify-content-center" v-for="d in data" :key="d.id">
                <div class="card" style="width: 11rem">
                    <img class="card-img-top" :src="`/img/${d.icon}`">
                    <div class="cerd-body text-center">
                        <router-link :to="{ name: 'service' , params: { id: d.id } }">
                            <p class="card-text">{{ d.service }}</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <router-view class="mt-3"/>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
    name: "Services",
    mixins: [ApiMixin],
    created() {
        const url = `http://localhost:3000/services`
        this.getDataApi(url)
    }
}
</script>
