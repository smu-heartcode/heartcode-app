---
order: 2
title: Background Color
tags: [
"background: red",
"background: rgb(0, 0, 0)",
"background: rgba(0, 0, 0, 0.25)",
]
code: ".background {\n  background: pink;\n}"
lang: css
---

```vue
<template>
  <div>
    <h1 class="background-pink">Pink</h1>
    <br>
    <h2 class="background-rgb">Yellow</h2>
    <br>
    <h2 class="background-rgba">Yellow 25%</h2>
  </div>
</template>

<style>
.background-pink {
  background: pink;
}

.background-rgb {
  background: rgb(255, 255, 0);
}

.background-rgba {
  background: rgba(255, 255, 0, 0.25);
}
</style>
```
