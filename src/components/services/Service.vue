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
        this.getDataApi(`http://localhost:3000/services/${this.$route.params.id}`)
    },
    beforeRouteUpdate(to, from, next) {
        
        if(to.params.id != undefined) { this.getDataApi(`http://localhost:3000/services/${to.params.id}`) }
        next()
    }
}
</script>