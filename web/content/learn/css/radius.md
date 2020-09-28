---
order: 5
title: Border Radius
tags: [
    "border-radius:",
]
code: ".radius {\n  border-radius: 8px;\n}"
lang: css
---

```vue
<template>
  <div>
    <h1 class="border-pink">Round Header</h1>
    <div class="give-me-space"></div>
    <p class="content">Round Content</p>
  </div>
</template>

<style>
.border-pink {
  border-color: deeppink;
  border-width: 1px;
  padding: 24px;

  border-radius: 8px;
}

.give-me-space {
  padding-top: 24px;
}

.content {
  background: lightgreen;
  padding: 24px;

  border-radius: 8px;
}
</style>
```
