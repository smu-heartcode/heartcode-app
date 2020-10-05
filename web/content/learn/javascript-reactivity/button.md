---
order: 1 
title: Button
tags: [
"<button>",
"@click=\"c = c + 1\"",
]
code: "<h1>{{ c }}</h1>\n<button @click=\"c = c + 1\">\nreturn { c: 0 }"
lang: vue
---

```vue
<template>
  <div>
    <h1>{{count}}</h1>

    <button @click="count = count + 1">
    +1
    </button>

    <button @click="count = count + 5">
    +5
    </button>

    <button @click="count = count + 10">
    +10
    </button>

    <button @click="count = count - 2">
    -2
    </button>

    <button @click="count = 0">
    RESET
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  }
}
</script>
```
