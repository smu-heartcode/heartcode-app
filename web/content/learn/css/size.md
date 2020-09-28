---
order: 6
title: Width & Height
tags: [
    "width: 16px",
    "height: 24px",
]
code: ".square {\n  width: 24px;\n  height: 24px;"
lang: css
---

```vue
<template>
  <div>
    <div class="square"></div>
    <div class="rectangle"></div>
  </div>
</template>

<style>
.square {
  border-color: deeppink;
  border-width: 1px;

  width: 120px;
  height: 120px;
}

.rectangle {
  background: darkgreen;

  width: 240px;
  height: 120px;
}
</style>
```
