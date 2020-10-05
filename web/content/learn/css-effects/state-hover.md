---
order: 60
title: Mouse Hover
tags: [
"class:hover { }",
]
code: ".class:hover {\n  color: red;\n}"
lang: css
---

```vue
<template>
  <div>
    <div class="background">
      <h4>I am a pill shape!</h4>
      <h5>Hover over me!</h5>
    </div>
  </div>
</template>

<style>
.background {
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  border-radius: 999px;

  background: dodgerblue;
  color: white;
  
  cursor: pointer;
}

.background:hover {
  border-radius: 4px;
  background: deeppink;
}
</style>
```
