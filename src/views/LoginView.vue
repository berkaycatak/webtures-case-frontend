<template>
    <form v-on:submit.prevent="submitForm">
      <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" v-model="email" required autocomplete="email" autofocus class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" class="form-control" name="password" required autocomplete="current-password"  id="password" placeholder="Password">
      </div>
      <div class="account-dialog-actions">
          <input type="submit" class="btn btn-primary" value="Giriş Yap">
          <a class="account-dialog-link" href="/register">Kayıt ol</a>
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
        email: '',
        password: '',
      }
    },
    methods: {
        redirectHomePage(){
          if(getCookie("token")) {
            window.location.href = "/";
          }
        },
        submitForm(){
            var url = 'http://localhost:8000/api/login?email='+ this.email +'&password=' + this.password;
            
            const headers = { 
                "Accept": "application/json",
            };
            
            axios.post(
                url, [], { headers }
             ).then((res) => {
                $.ambiance({message: "Başarıyla giriş yapıldı!", fade: true,})
                document.cookie = "name=" + res.data["user"]["name"];
                document.cookie = "email=" + res.data["user"]["email"];
                document.cookie = "token=" + res.data["token"];
                window.location.href = "/";
            })
            .catch((error) => {
                console.log(error);
                $.ambiance({message: "Giriş yapılırken hata oluştu.", fade: true, type: "error"})
            }).finally(() => {
                //
            });

        }
    }
}
</script>
