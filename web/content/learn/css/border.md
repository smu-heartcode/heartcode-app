---
order: 4
title: Border
tags: [
    "border-width:",
    "border-color:",
    "border-*-*:",
]
code: ".border {\n  border-color: red;\n  border-width: 1px;"
lang: css
---

```vue
<template>
  <div>
    <h1 class="border-pink">Border Header</h1>
    <p class="content">Half Border Content</p>
  </div>
</template>

<style>
.border-pink {
  border-color: deeppink;
  border-width: 1px;

  padding: 24px;
}

.content {
  border-color: deeppink;
  border-left-width: 1px;
  border-right-width: 1px;

  padding: 24px;
}
</style>
```
