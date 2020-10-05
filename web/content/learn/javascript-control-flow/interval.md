---
order: 3
title: Interval
tags: [
"setInterval(() => {}, 1000)",
"if(true/false)",
"if(this.count % 2 === 0)",
]
code: "setInterval(() => {\n  this.num = Math.random()\n}, 1000)"
lang: js
---

```vue
<template>
  <div>
    <h1>{{count}} + {{rand}}</h1>
    <h1> = </h1>
    <h1>{{count + rand}}</h1>
    <br>
    <h3>Is it even? {{even}}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rand: 0, count: 0, even: true
    }
  },
  mounted() {
    setInterval(() => {
      this.count = this.count + 1
      this.rand = Math.round(Math.random() * 20)

      if ((this.rand + this.count) % 2 === 0) {
        this.even = true
      } else {
        this.even = false
      }
    }, 1000)
  },
}
</script>
```
