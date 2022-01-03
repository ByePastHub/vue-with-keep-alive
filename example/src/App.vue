<template>
  <keep-router-view
    :matchClearList="matchClearList"
    :matchClearBehindList="matchClearBehindList"
  />
</template>

<script setup>
const matchClearBehindList = ['Page2']; // 如果是后退，匹配到 name 时，会把后面所以的 name 剔除掉
const matchClearList = ['/']; // 匹配到 path/name 会除了当前页面的 name 外，清空其他的页面 name
</script>
<script>
export default { name: "App" };
</script>

