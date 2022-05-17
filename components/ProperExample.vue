<template>
  <p>{{ test }}</p>
  <button @click="test = 'bar'">
    Change
  </button>
</template>

<script setup>

import {useProper} from "../composables/proper";

const test = useProper();
</script>
