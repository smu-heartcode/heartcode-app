---
order: 51
title: Effects Opacity
tags: [
"opacity: 0.5",
]
code: ".opacity-50 {\n  opacity: 0.5;\n}"
lang: css
---

```vue
<template>
  <div>
    <div class="background-blue">
       <h4>White Text</h4>
       <h4 class="background-green">White Text</h4>
    </div>
    
    <br>

    <div class="background-blue">
       <h4>White Text</h4>
       <h4 class="background-green opacity">White Text</h4>
    </div>

    <br>

    <div class="background-blue opacity">
       <h4>White Text</h4>
    </div>
  </div>
</template>

<style>
.background-blue {
  padding: 16px;
  border-radius: 4px;

  background: blue;
  color: white;
}

.background-green {
  padding: 16px;
  border-radius: 4px;

  background: green;
  color: white;
}

.opacity {
  opacity: 0.75;
}
</style>
```
