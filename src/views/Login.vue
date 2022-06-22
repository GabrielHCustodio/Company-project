<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Voltar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="row mt-5">
            <div class="col-6 offset-3">
                <div class="card">
                    <p class="card-header">Entrar</p>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" v-model="email" placeholder="E-mail">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" v-model="password" placeholder="Senha">
                        </div>
                        <button class="btn btn-primary" @click="navigateTo">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
        email: null,
        password:  null,
        adm: {}
    }
  },
  methods: {
    navigateTo() {
        const url = 'http://localhost:3000/adm'

        fetch(url)
        .then( response => response.json() )
        .then( response => {
            this.adm = response
        })

        this.$router.push('/home')
    }
  }
}
</script> 