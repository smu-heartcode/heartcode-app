---
order: 3
title: Component v-model
tags: [
"<child v-model=\"toBind\">",
"@input",
"this.$emit('input', this.text)",
]
code: "<child v-model=\"data\">\ndata() {\n  return { data: \"Text\"}"
lang: vue
directory: "components/\n├── child.vue\n├── parent.vue"
layered:
    parent: "/components/parent.vue"
    child: "/components/child.vue"
---

```vue
<template>
  <div>
    <input v-model="text" @input="changed">
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {text: this.value}
  },
  methods: {
    changed() {
      this.$emit('input', this.text)
    } 
  }
}
</script>
```
---
```vue
<template>
  <div>
    <h2>Update Without Emit: v-model.</h2>
    <br>
    <div>
      <child v-model="data"></child>
    </div>
    <br>
    <h4>Text: {{ data }}, Length: {{ data.length }}</h4>
  </div>
</template>

<script>
export default {
  components: {Child},
  data() {
    return {
      data: "Default"
    }   
  },
}
</script>
```
