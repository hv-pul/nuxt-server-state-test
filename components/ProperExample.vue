<template>
  <p>{{ test }}</p>
</template>

<script setup>

import {useProper} from "../composables/proper";

const test = useProper();
</script>
