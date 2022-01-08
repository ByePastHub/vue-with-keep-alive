<template>
  <div>
    <h1>Page3</h1>
    <input v-model="value" />
    <p></p>
    <button @click="() => $router.replace('/page4')">replace to Page4</button>
  </div>
</template>

<script>
export default {
  name: "Page3",
  data() {
    return {
      value: "",
    };
  },
  created() {
    console.log("Page3 created");
  },
};
</script>
