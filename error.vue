<template>
    <NuxtLayout>
        {{ props.error }}
    </NuxtLayout>
</template>
  
<script setup>
const props = defineProps({
    error: Object
})
</script>
  