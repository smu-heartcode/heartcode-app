---
order: 3
title: Conditional
tags: [
'v-if="true"',
'v-if="false"',
]
code: "<h4 v-if=\"c % 2 === 0\">Even</h4>\n<input v-model.number=\"c\">\nreturn { count: 0 }"
lang: vue
---

```vue
<template>
  <div>
    <h4 v-if="count % 2 === 0">
    I am even
    </h4>
    <h4 v-if="count % 2 !== 0">
    I am Odd
    </h4>

    <div class="padding-top-10">
      <input v-model.number="count">
    </div>

    <div class="padding-top-10">
      <button @click="count = count + 1">
      Add One
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  }
}
</script>

<style>
.padding-top-10 {
  padding-top: 10px;
}
</style>
```
