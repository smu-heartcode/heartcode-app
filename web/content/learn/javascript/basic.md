---
order: 1 
title: Javascript Basic 
tags: [
"<script>",
"return { name: \"Text\" }",
"{{ name }}",
]
code: "<h1>{{ text }}<h1>\n\nreturn { text: \"My Name\" }"
lang: css
---

```vue
<template>
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  data() {
    return { name: "Hello" }
  }
}
</script>
```
