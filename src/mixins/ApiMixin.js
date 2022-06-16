export default {
    data() {
        return {
            data: {}
        }
    },
    methods: {
        getDataApi(url) {
            fetch(url)
            .then( response => response.json())
            .then( response => {
                this.data = response
            })
        }
    }
}