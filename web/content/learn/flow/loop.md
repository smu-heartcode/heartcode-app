---
order: 1 
title: Looping
tags: [
'v-for="item in list"',
'v-if="true/false"',
"list: [1,2,3,4]",
]
code: "<div v-for=\"item in list\">\n  <p>I am {{ item }}</p>\n</div>"
lang: vue
---

```vue
<template>
  <div>
    <div v-for="item in list">
      <h1>I am {{item}}</h1>
      <p class="even" v-if="item % 2 === 0">
      I am even.
      </p>
      <p class="odd" v-if="item % 2 !== 0">
      I am odd.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { list: [1,2,3,4,5] }
  }
}
</script>

<style>
.odd {
  background: lightpink;
  padding: 8px;
}
.even {
  background: lightskyblue;
  padding: 8px;
}
</style>
```
