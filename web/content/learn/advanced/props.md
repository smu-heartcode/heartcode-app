---
order: 1
title: Component Props
tags: [
"<child name=\"value to pass\">",
"String",
"Array",
"Boolean",
"Object",
"Function",
]
code: "<child active\n       name=\"Name to pass\"\n       :list=\"['abc','cde']\"></child>"
lang: html
directory: "components/\n├── child.vue\n├── parent.vue"
layered:
    parent: "/components/parent.vue"
    child: "/components/child.vue"
---

```vue
<template>
  <div>
    <h1>{{ header }}</h1>
    <p v-for="item in content">{{ item }}</p>

    <br>
    <h3 v-if="footer">Footer</h3>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String, default: "Default Header!"
    },
    content: Array,
    footer: Boolean,
  }
}
</script>
```
---
```vue
<template>
  <div>
    <child header="Content List" 
           footer 
           :content="content">
    </child>
  </div>
</template>

<script>
export default {
  components: {Child},
  data() {
    return {
      content: ["I am", "in", "a", "list", "."]
    } 
  }
}
</script>
```
