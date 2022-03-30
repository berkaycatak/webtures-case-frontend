<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card spur-card">
                <div class="card-body ">
                    <form v-on:submit.prevent="storeProject">
                        <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label">Proje İsmi</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" name="title" id="title" v-model="title" placeholder="Proje İsmi" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="title" class="col-sm-2 col-form-label">Başlama tarihi:</label>
                            <div class="col-sm-10">
                                <input class="form-control" v-model="date"  name="date" type="date" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="website_url" class="col-sm-2 col-form-label">Web sitesi:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="website_url" name="website_url" v-model="website_url" placeholder="Proje web sitesi" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="description">Açıklama</label>
                            <textarea class="form-control" name="description" id="description" v-model="description" rows="3" placeholder="Proje açıklaması"></textarea>
                        </div>

                        <div class="form-group row">
                            <div class="col-sm-2">Proje durumu:</div>
                            <div class="col-sm-10">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" name="status" id="status" v-model="fstatus">
                                    <label class="custom-control-label" for="status">Tamamlandı</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Oluştur</button>
                            </div>
                        </div>
                    </form>
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
  },
    data() {
            return {
                title: "",
                description: "",
                date: "",
                website_url: "",
                fstatus: ""
            }
        },
    methods: {
        redirectHomePage(){
          if(!getCookie("token")) {
            window.location.href = "/login";
          }
        },
     
        storeProject(){
            var token = getCookie("token")
            var url = 'http://localhost:8000/api/projects?title='+ this.title +"&description="+ this.description +"&date="+ this.date +"&website_url="+ this.website_url +"&status=" + this.fstatus
            
            const headers = { 
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            };
            
            axios.post(
                url, [],
                { headers }
             ).then((res) => {
                $.ambiance({message: "Proje başarıyla eklendi!", fade: true,})
            })
            .catch((error) => {
                console.log(error);
                $.ambiance({message: "Proje eklenirken hata oluştu.", fade: true, type: "error"})
            }).finally(() => {
                //
            });

        }
    }
}
</script>