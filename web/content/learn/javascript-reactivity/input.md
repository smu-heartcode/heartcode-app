---
order: 2
title: Text Input
tags: [
"input",
"v-model=\"text\"",
]
code: "<input v-model=\"text\">\n<h3>{{ text }}</h3>\nreturn { text: \"Edit me\" }"
lang: vue
---

```vue
<template>
  <div>
    <input v-model="text">
    <br><br>
    <h3>{{text}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return { text: "Edit me" }
  }
}
</script>
```
