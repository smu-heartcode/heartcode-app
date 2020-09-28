---
order: 2 
title: Random
tags: [
"Math.random()", 
"Math.round()"
]
code: "Math.random()\nMath.round(12.3)\nMath.round(10 * Math.random())"
lang: js
---

```vue
<template>
  <div>
    <h4>{{count * 10}}</h4>
    <h4>{{count * 100}}</h4>
    <h4>{{count * 1000}}</h4>
    <h4>{{count * 50}}</h4>

    <h4>{{Math.round(count * 300)}}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return { count: Math.random() }
  }
}
</script>
```
