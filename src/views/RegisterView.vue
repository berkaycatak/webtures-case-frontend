<template>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
          <label for="name">İsim</label>
          <input type="name" required v-model="fname" autofocus class="form-control" id="name" placeholder="İsminiz">
      </div>

      <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" required v-model="email" name="email" autocomplete="email" autofocus class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
          <label for="password">Şifre</label>
          <input type="password" v-model="password" class="form-control" name="password" required id="password" placeholder="Şifre">
      </div>
      <div class="form-group">
          <label for="password_confirmation">Şifre Doğrulama</label>
          <input type="password" v-model="password_confirmation" class="form-control" name="password_confirmation" required id="password_confirmation" placeholder="Şifre tekrar">
      </div>
      <div class="account-dialog-actions">
          <input type="submit" class="btn btn-primary" value="Kayıt Ol">
          <a class="account-dialog-link" href="/login">Giriş yap</a>
      </div>
  </form>

</template>

<script>
import axios from 'axios';

export default {
    name: 'PostFormAxios',
      mounted:function(){
        this.redirectHomePage()
      },
    data(){
      return{
        fname: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    },
    methods: {
        redirectHomePage(){
          if(getCookie("token")) {
            window.location.href = "/";
          }
        },
        submitForm(){
            /*
            const headers = { 
              "Authorization": "Bearer my-token",
              "My-Custom-Header": "foobar"
            };
            */
             const headers = { 
              "Accept": "application/json"
            };
            axios.defaults.withCredentials = true;
            axios.post('http://localhost:8000/api/register?name='+ this.fname +'&email='+ this.email +'&password='+ this.password +'&password_confirmation='+ this.password_confirmation +'', 
             { headers })
            .then((res) => {
                document.cookie = "name=" + res.data["user"]["name"];
                document.cookie = "email=" + res.data["user"]["email"];
                document.cookie = "token=" + res.data["token"];
                window.location.href = "/";
            })
            .catch((error) => {
              console.log(error);
                // error.response.status Check status code
            }).finally(() => {
                //Perform action in always
            });
        }
    }
}
</script>