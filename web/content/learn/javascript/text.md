---
order: 3
title: Text Operation
tags: [
"+",
]
code: "{{ text + \" \" + year }}\n{{ text + \" 2020\" }}\n{{ text }} {{ year }}"
lang: vue
---

```vue
<template>
  <div>
    <div>
      <h3>{{text}} 2020</h3>
      <h3>{{text + " 2020"}}</h3>
      <h3>{{text + " " + year}}</h3>
      <h3>{{text}} {{year}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { text: "HeartCode", year: 2020 }
  }
}
</script>
```
