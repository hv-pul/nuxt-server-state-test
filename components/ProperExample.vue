<script setup>
const color = useColor() // Same as useState('color')
</script>

<template>
  <p>Current color: {{ color }}</p>
  <button @click="color = 'red'">Change</button>
</template>

