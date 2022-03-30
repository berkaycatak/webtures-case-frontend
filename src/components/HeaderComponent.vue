<template>
    <header class="dash-toolbar">
        <a href="#!" class="menu-toggle">
            <i class="fas fa-bars"></i>
        </a>
        <a href="#!" class="searchbox-toggle">
            <i class="fas fa-search"></i>
        </a>
        <form class="searchbox" action="#!">
            <a href="#!" class="searchbox-toggle"> <i class="fas fa-arrow-left"></i> </a>
            <button type="submit" class="searchbox-submit"> <i class="fas fa-search"></i> </button>
            <input type="text" class="searchbox-input" placeholder="type to search">
        </form>
        <div class="tools">
            <div class="dropdown tools-item">
                <a href="#" class="" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                    <button type="submit" v-on:click="logout()" class="dropdown-item">Logout</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import axios from 'axios';

export default {
    name: "HeaderComponent",
    methods: {
        logout: function(){
            var token = getCookie("token")
            var url = 'http://localhost:8000/api/logout/';
            
            const headers = { 
                "Accept": "application/json",
                'Authorization': 'Bearer ' + token
            };
            
            axios.post(
                url, [], { headers }
             ).then((res) => {
                $.ambiance({message: "Çıkış yapıldı!", fade: true,})
                eraseCookie("name");
                eraseCookie("email");
                eraseCookie("token");
                window.location.href = "/login";

            })
            .catch((error) => {
                console.log(error);
                $.ambiance({message: "Çıkış yapılırken hata oluştu.", fade: true, type: "error"})
            }).finally(() => {
                eraseCookie("name");
                eraseCookie("email");
                eraseCookie("token");
            });

        }
    }
}
</script>
