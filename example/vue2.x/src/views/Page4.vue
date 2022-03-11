<template>
  <div>
    <h1>Page4</h1>
    <input v-model="value" />
    <p></p>
    <button @click="() => $router.replace('/page2')">跳转Page2, router.replace，如果不要清除缓存，点击我</button>
    <p></p>
    <button @click="() => $router.replace({path: '/page2', destroy: ['Page2', 'Page3', 'Page4']})">跳转Page2, router.replace，如果要清除['Page2', 'Page3', 'Page4']，Page1留着，点击我</button>
    <p></p>
    <p></p>
    <button @click="() => $router.reLaunch('/page2')">跳转Page2, router.reLaunch，如果要清除全部缓存，点击我</button>
    <p></p>
    <button @click="() => $router.push('/page5')">跳转Page5, router.push</button>
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
    console.log("Page4 created");
  },
};
</script>
