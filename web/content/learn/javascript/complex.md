---
order: 5
title: Complex Operation
tags: [
"+",
"()",
]
code: "{{ t + y === \"Text\" }}\n{{ y * (y + 3) - (5 * 3) }}\n{{ 15 % 5 === 0 }}"
lang: vue
---

```vue
<template>
  <div>
    <h3>{{ text + year === "HeartCode2020" }}</h3>
    <br>
    <h3>{{ year * (year + 10) - (5 * 100) }}</h3>
    <br>
    <h3>10 even: {{ 10 % 2 === 0 }}</h3>
    <h3>10 odd: {{ 10 % 2 !== 0 }}</h3>
    <h3>15 multiples of 5: {{ 15 % 5 === 0 }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "HeartCode",
      year: 2020,
    }
  }
}
</script>
```
