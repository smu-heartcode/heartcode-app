---
order: 2 
title: HTTP API Post 
tags: [
"$axios",
"$post",
".then((data) => {})",
]
code: "this.$axios.$post('/url', {...})\n  .then((data) => {\n  })"
lang: js
---

```vue
<template>
  <div>
    <textarea rows="10" v-model="request"></textarea>
    <br>
    <button @click="postContent">Post</button>
    <br><br>
    <pre>{{response}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      request: "{\"text\": \"JSON DATA\"}",
      response: null
    }
  },
  methods: {
    postContent() {
      this.$axios
        .$post('https://jsonplaceholder.typicode.com/posts', JSON.parse(this.request))
        .then((data) => {
          this.response = data
        })
    },
  }
}
</script>
```
