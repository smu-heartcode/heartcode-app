---
order: 1
title: Sticky Header
tags: [
"position: sticky",
]
code: ".header {\n  position: sticky;\n}"
lang: css
---

```vue
<template>
  <div class="ignore-this">
    <div class="header">
      <h3>Header</h3>
    </div>
    
    <div class="content">
      <h1>Page Title</h1>
      <p>Page Content</p>
    </div>
  </div>
</template>

<style>
.header {
  position: sticky;
  top: 0;

  padding: 16px 24px;
  background: black;
  color: white;
}

.content {
  padding: 16px 24px 400px 24px;
}

.ignore-this {
  overflow-y: scroll;
  height: 400px;
  border: 1px solid black;
}
</style>
```
