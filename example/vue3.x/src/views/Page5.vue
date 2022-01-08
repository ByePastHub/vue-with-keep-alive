<template>
  <div>
    <h1>Page5</h1>
    <input v-model="value"/>
    <p></p>
    <button @click="() => router.reLaunch('/page1')">跳转Page1, router.reLaunch 清空所有页面</button>
  </div>
</template>

<script>
export default { name: "Page5" };
</script>
<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter();
const value = ref('')
console.log('Page5 created')
</script>
