<template>
  <v-container class="counter">
    <header-component></header-component>
  <!-- class="container"はSass動作チェックのために付与してるものです -->
    <router-view></router-view>
  </v-container>
</template>
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
</script>