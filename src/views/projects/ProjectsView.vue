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
                                    <th scope="col">Tarih</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Durum</th>
                                    <th scope="col">İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="res in response" v-bind:id="'project_' + res.id">
                                    <th scope="row">1</th>
                                    <td>{{ res.title }}</td>
                                    <td>{{ res.description }}</td>
                                    <td>{{ res.date }}</td>
                                    <td>{{ res.website_url }}</td>
                                    <td>{{ res.status == "complated" ? "tamamlandı" : "devam ediyor" }}</td>
                                    <td>
                                        <div class="row">
                                            <div style="width:80px"><a v-bind:href="'/projects/' + res.id + '/edit'"><button class="btn btn-sm btn-primary">Düzenle</button></a></div>
                                            <div style="width: 40px"><button v-on:click="deleteProject(res.id)" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></button></div>
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
                this.response = res.data;
            })
            .catch((error) => {
              console.log(error);
                // error.response.status Check status code
            }).finally(() => {
                //Perform action in always
            });
        },
        deleteProject: function(id){
            var token = getCookie("token")
            var url = 'http://localhost:8000/api/projects/' + id;
            
            const headers = { 
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            };
            
            axios.delete(
                url,
                { headers }
             ).then((res) => {
                $.ambiance({message: "Proje başarıyla silindi!", fade: true,})
                $("#project_"+id).remove()

            })
            .catch((error) => {
                console.log(error);
                $.ambiance({message: "Proje silinirken hata oluştu.", fade: true, type: "error"})
            }).finally(() => {
                //
            });

        },

    },
    
}
</script>