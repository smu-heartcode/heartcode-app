---
order: 2
title: Component $emit
tags: [
"<child @hey=\"value to pass\">",
"this.$emit('hey', this.text)",
]
code: "this.$emit('hey', 'text')\n<child @hey=\"(t) => data = t\">\n</child>"
lang: vue
directory: "components/\n├── child.vue\n├── parent.vue"
layered:
    parent: "/components/parent.vue"
    child: "/components/child.vue"
---

```vue
<template>
  <div>
    <input v-model="text">
    <br><br>
    <button @click="tellParent">Tell Parent</button>
  </div>
</template>

<script>
export default {
  data() {
    return {text: ""}
  },
  methods: {
    tellParent() {
      this.$emit('hey', this.text)
    } 
  }
}
</script>
```
---
```vue
<template>
  <div>
    <child @hey="onHey"></child>
    <br><br>
    <h4>Text: {{ data }}</h4>
    <p>Length: {{ data.length }}</p>
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
  methods: {
    onHey(text) {
      this.data = text
    } 
  }
}
</script>
```
