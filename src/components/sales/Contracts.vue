<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contrato:</label>
            <input type="text" class="form-control" v-model="searchForm.id_like"/>
          </div>
          <div class="col-6">
            <label class="form-label">Data início:</label>
            <div class="input-group">
              <input type="date" class="form-control" v-model="searchForm.startDate_gte"/>
              <input type="date" class="form-control" v-model="searchForm.startDate_lte"/>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="search">Pesquisar</button>
      </div>
    </div>

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
  </div>
</template>

<script>
import ApiMixin from "@/mixins/ApiMixin";
export default {
  name: "Contracts",
  data() {
    return {
      relationalParams: "_expand=lead&_expand=service",
      searchForm: {
        id_like: '',
        startDate_gte: '',
        startDate_lte: ''
      }
    };
  },
  methods: {
    search() {
        Object.keys(this.searchForm).forEach( key => {
            if(this.searchForm[key] == '') delete this.searchForm[key]
        })

        const queryParams = new URLSearchParams(this.searchForm).toString();
        const url = `http://localhost:3000/contracts?${this.relationalParams}&${queryParams}`;
        this.getDataApi(url);
    }
  },
  mixins: [ApiMixin],
  created() {
    const queryParams = new URLSearchParams(this.$route.query).toString();
    const url = `http://localhost:3000/contracts?${this.relationalParams}&${queryParams}`;
    this.getDataApi(url);
  },
  beforeRouteUpdate(to, from, next) {
    const queryParams = new URLSearchParams(to.query).toString();
    const url = `http://localhost:3000/contracts?${this.relationalParams}&${queryParams}`;
    this.getDataApi(url);
    next();
  },
};
</script>
