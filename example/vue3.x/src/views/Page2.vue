<template>
  <div>
    <h1>Page2</h1>
    <div v-if="!active">init</div>
    <div v-else>alive</div>
    <input v-model="value" />
    <p></p>
    <button @click="active = true">Switch</button>
    <p></p>
    <button @click="() => $router.push('/page3')">to Page3</button>
  </div>
</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      value: '',
      active: false,
    };
  },
  created() {
    console.log("Page2 created");
  },
};
</script>
