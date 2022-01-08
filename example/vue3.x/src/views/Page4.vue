<template>
  <div>
    <h1>Page4</h1>
    <input v-model="value" />
    <p></p>
    <button @click="() => router.replace('/page2')">跳转Page2, router.replace</button>
    <button @click="() => router.push('/page5')">跳转Page5, router.push</button>
  </div>
</template>

<script>
export default { name: "Page4" };
</script>
<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
const value = ref('')
console.log('Page4 created')
</script>
