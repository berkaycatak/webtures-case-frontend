<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script>
export default {
  mounted:function(){
    this.redirectHomePage()
  },
    methods: {
        redirectHomePage(){
          if(!getCookie("token")) {
            window.location.href = "/login";
          }
        },
    }
}
</script>