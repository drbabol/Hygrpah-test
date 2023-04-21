
<script setup>

import { ref, provide } from "vue";
import { useUserStore } from "../store/user.js";

const userStore  = useUserStore()


</script>


<template>
  <div class="login">
    <h1>This is an login page, please enter your credentials</h1>
  </div>

</template>

<style>

</style>
