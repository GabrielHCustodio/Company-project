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
                            <input type="email" name="email" class="form-control" v-model="email" placeholder="E-mail">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" v-model="password" minlength="6" maxlength="8" placeholder="Senha">
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
        email: '',
        password:  ''
    }
  },
  methods: {
    navigateTo() {
        if(this.validateForm()) {
            const url = 'http://localhost:3000/adm'

            fetch(url)
            .then( response => response.json() )
            .then( response => {
                let adm = response
                adm.map(a => {
                    if(a.email === this.email && a.password === this.password) {
                        this.$router.push('/home')
                    }else {
                        alert('Usuario invalido')
                    }
                })
            })
        }
        else {
            alert('Campo não preenchido')
        }

    },
    validateForm() {
        let validate = true
        if(this.email === '') validate = false
        if(this.password === '') validate = false
        return validate
    }
  }
}
</script> 