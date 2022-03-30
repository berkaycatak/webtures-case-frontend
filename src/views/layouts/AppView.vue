<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>

<template>

<div>
    <div class="dash" v-if="currentRouteName != 'Giriş Yap' && currentRouteName != 'Kayıt Ol'">
        <sidebar-component title="Webtures"></sidebar-component>
        <div class="dash-app">
            <header-component>
                <button type="submit" class="dropdown-item">Logout</button>
            </header-component>
            <main class="dash-content">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-md-10">
                            <h1 class="dash-title">{{ currentRouteName }}</h1>
                        </div>
                            <div class="col-md-2">
                                <a href="/projects/create"><button class="btn btn-sm btn-primary"><i class="fa fa-plus"></i> Proje Oluştur</button></a>
                            </div>
                    </div>
                    <RouterView />
                </div>
            </main>
        </div>
        </div>
        <div v-else>
        <div class="form-screen">
            <a href="/" class="spur-logo"><i class="fas fa-bolt"></i> <span>Webtures Case</span></a>
            <div class="card account-dialog">
                <div class="card-header bg-primary text-white">
                    {{ currentRouteName }}
                </div>
                <div class="card-body">
                    <main class="py-4">
                        <RouterView />
                    </main>
                </div>
            </div>
        </div>
    </div>
</div>


  <!--
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />

   -->
</template>

<script>
export default {
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
}
</script>