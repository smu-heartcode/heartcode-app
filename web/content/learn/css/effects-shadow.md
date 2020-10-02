---
order: 50
title: Effects Shadow
tags: [
"box-shadow: 3px 6px 3px color",
]
code: ".shadow {\n  box-shadow: 3px 6px 3px red;\n}"
lang: css
---

```vue
<template>
  <div>
    <div class="padding-border shadow">
      There is a shadow behind me!
    </div>
    <br><br>
    <div class="padding-border shadow-red">
      box-shadow: 3px 6px 3px rgba(255, 0, 0, 0.2); <br>
      box-shadow: height-bottom width-right blur color;
    </div>
  </div>
</template>

<style>
.padding-border {
  padding: 16px;
  border: 1px solid black;
  border-radius: 4px;
}

.shadow {
  box-shadow: 3px 6px 3px rgba(0, 0, 0, 0.7);
}

.shadow-red {
  box-shadow: 3px 6px 3px rgba(255, 0, 0, 0.2);
}
</style>
```
