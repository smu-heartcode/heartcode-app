---
order: 1
title: Props
tags: [
"<child name=\"value to pass\">",
]
code: "components/\n├── custom.vue\n<custom></custom>"
lang: html
directory: "components/\n├── child.vue\n├── parent.vue"
layered:
    parent: "/components/parent.vue"
    child: "/components/child.vue"
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
    <child></child>
  </div>
</template>

<script>
export default {
  components: {Child}
}
</script>
```
