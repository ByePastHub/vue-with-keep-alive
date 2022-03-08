<template>
  <div>
    <h1>Page3</h1>
    <input v-model="value" />
    <p></p>
    <button @click="() => $router.replace({path:'/page4'})">replace to Page4</button>
    <button @click="() => $router.replace({path: '/page4', destroy: 'Page2'})">destroy Page2, replace to Page4</button>
  </div>
</template>

<script>
export default {
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
