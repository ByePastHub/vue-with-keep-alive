<template>
  <div>
    <h1>Page1</h1>
    <input v-model="value" />
    <p></p>
    <router-link to="/page2">to Page2</router-link>
  </div>
</template>

<script>
export default {
  name: "Page1",
  data() {
    return {
      value: "",
    };
  },
  created() {
    console.log("Page1 created");
  },
};
</script>
