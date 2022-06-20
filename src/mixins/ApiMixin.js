export default {
    data() {
        return {
            data: {}
        }
    },
    methods: {
        getDataApi(url, queryParams) {

            Object.keys(queryParams).forEach( key => {
                if (queryParams[key] == '') delete queryParams[key]
            })

            const urlQueryParams = new URLSearchParams(queryParams).toString();
            const urlComplete = urlQueryParams ? `${url}&${urlQueryParams}` : url

            fetch(urlComplete)
                .then(response => response.json())
                .then(response => {
                    this.data = response
                })
        }
    }
}