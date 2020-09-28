---
order: 2
title: Math Operation
tags: [
"+",
"-",
"/",
"*",
"%",
]
code: "{{ count + 10 }}\n{{ count * 5 }}\n{{ count % 2 }}"
lang: vue
---

```vue
<template>
  <div>
    <h3>{{count + 10}}</h3>
    <h3>{{count - 20}}</h3>
    <h3>{{count / 5}}</h3>
    <h3>{{count * 5}}</h3>
    <br><br>
    <h3>{{count % 14}}</h3>
    <h3>{{count % 5}}</h3>
    <h3>{{count % 6}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 15 }
  }
}
</script>
```
