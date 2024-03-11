<template>
  <TheHeader />
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <TheFooter />
</template>

<style>
@import url(assets/css/common.css);
@import url(assets/css/themify-icons.css);
</style>
<script setup>
import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
</script>
