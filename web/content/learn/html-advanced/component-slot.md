---
order: 11
title: Component Slots
tags: [
"/components/child.vue",
"<child>",
"<slot name=\"tag\"></slot>",
"<template v-slot:top>"
]
code: "<template v-slot:top>\n  Top Content\n</template>"
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

    <div>
      <slot name="top"></slot>
    </div>
    
    <slot>
      <h5>Middle</h5>
    </slot>
    
    <div>
      <slot name="bottom"></slot>
    </div>
  </div>
</template>
```
---
```vue
<template>
  <div>
    <child>
      <template v-slot:top>
        Top Content
      </template>
      
      <template v-slot:bottom>
        Bottom Content
      </template>
    </child>
  </div>
</template>

<script>
export default {
  components: {Child} // Ignore this for now.
}
</script>
```
