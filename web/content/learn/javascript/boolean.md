---
order: 4
title: True/False Operation
tags: [
"===",
"!==",
">",
"<=",
"<",
">=",
]
code: "{{ text === \"HeartCode\" }}\n{{ year !== 2020 }}\n{{ 10 > 5 }}"
lang: vue
---

```vue
<template>
  <div>
    <div>
      <h3>{{text === "HeartCode"}}</h3>
      <h3>{{text === "Not HeartCode"}}</h3>
      <h3>{{text !== "Not HeartCode"}}</h3>
    </div>
    <br>
    <div>
      <h3>{{year === 2020}}</h3>
      <h3>{{year !== 2020}}</h3>
    </div>
    <br>
    <ul>
      <li>{{10 > 5}}</li>
      <li>{{10 >= 10}}</li>
      <li>{{10 < 5}}</li>
      <li>{{10 <= 10}}</li>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return { text: "HeartCode", year: 2020}
  }
}
</script>
```
