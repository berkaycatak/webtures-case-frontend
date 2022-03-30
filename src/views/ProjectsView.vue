<template>
    <div class="row">
            <div class="col-lg-12">
                <div class="card spur-card">
                    <div class="card-body ">
                        <table class="table table-in-card">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Adı</th>
                                    <th scope="col">Açıklama</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Durum</th>
                                    <th scope="col">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr v-for="res in response">
                                        <th scope="row">1</th>
                                        <td>{{ res.title }}</td>
                                        <td>{{ res.description }}</td>
                                        <td>{{ res.website_url }}</td>
                                        <td>{{ res.status == "complated" ? "tamamlandı" : "devam ediyor" }}</td>
                                        <td>
                                            <div class="row">
                                                <a href="edit"><edit-button-component>Düzenle</edit-button-component></a>
                                                <delete-button-component/>
                                            </div>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
var response = ["ss"];
import axios from 'axios';

export default {

  mounted:function(){
    this.redirectHomePage()
    this.getProjects()
  },
    data() {
            return {
                response: [
                ]
            }
        },
    methods: {
        redirectHomePage(){
          if(!getCookie("token")) {
            window.location.href = "/login";
          }
        },
        getProjects(){
            var token = getCookie("token")
            
            const headers = { 
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            };

            axios.defaults.withCredentials = true;
            axios.get('http://localhost:8000/api/projects', 
             { headers })
            .then((res) => {
                console.log(res.data)
                this.response = res.data;
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