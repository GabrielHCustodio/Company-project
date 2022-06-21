<template>
    <div>
        <div class="card">
            <div class="card-header bg-primary text-white">{{ data.service }}</div>
            <div class="card-body">
                <p class="card-text">{{ data.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin"
export default {
    name: 'Service',
    mixins: [ ApiMixin ],
    created() {
        const url = `http://localhost:3000/services/${this.$route.params.id}`
        this.getDataApi(url)
    },
    beforeRouteUpdate(to, from, next) {
        const url = `http://localhost:3000/services/${to.params.id}`
        if(to.params.id != undefined) { this.getDataApi(url) }
        next()
    }
}
</script>