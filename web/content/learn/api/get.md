---
order: 1 
title: HTTP API Get 
tags: [
"$axios",
"$get",
".then((data) => {})",
]
code: "this.$axios.$get('/url')\n  .then((data) => {\n  })"
lang: js
---

```vue
<template>
  <div>
    <button @click="getContent">Get</button>
    <br><br>
    <pre>{{data}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "Default"
    }
  },
  methods: {
    getContent() {
      this.$axios
        .$get('https://jsonplaceholder.typicode.com/posts/1')
        .then((data) => {
          this.data = data
        })
    },
  }
}
</script>
```
