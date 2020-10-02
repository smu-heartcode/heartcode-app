---
order: 10
title: Components
tags: [
    "/components/custom.vue",
    "<custom>",
]
code: "components/\n├── custom.vue\n<custom></custom>"
lang: html
directory: "components/\n├── custom.vue\n\npages/\n├── index.vue"
---

```vue
<template>
  <div>
    <h1>Custom Component</h1>
    <p>Custom Content</p>

    <div>
      <slot></slot>
    </div>
  </div>
</template>
```
---
```vue
<template>
  <div>
    <custom></custom>
  </div>
</template>

<script>
export default {
  components: {Custom} // Ignore this for now.
}
</script>
```
