---
order: 10
title: Components
tags: [
    "/components/child.vue",
    "<child>",
]
code: "components/\n├── child.vue\n<child></child>"
lang: html
directory: "components/\n├── child.vue\n\npages/\n├── index.vue"
layered:
    parent: "/pages/index.vue"
    child: "/components/child.vue"
---

```vue
<template>
  <div>
    <h1>Child Component</h1>
    <p>I am a child component.</p>

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
    <child></child>
  </div>
</template>

<script>
export default {
  components: {Child} // Ignore this for now.
}
</script>
```
