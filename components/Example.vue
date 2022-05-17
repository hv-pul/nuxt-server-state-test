<template>
  <p>{{ test }}</p>
</template>

<script setup>
import {useBroken} from "../composables/broken";

const test = useBroken();
</script>
