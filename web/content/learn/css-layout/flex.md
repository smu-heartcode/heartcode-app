---
order: 2
title: Display Flex
tags: [
"display: flex;",
"align-items: flex-start",
"align-items: center;",
"align-items: flex-end;",
"justify-content: flex-start;",
"justify-content: center;",
"justify-content: flex-end;",
"justify-content: space-between;",
"flex-grow: 1;",
"flex-wrap: wrap;",
]
code: ".horizontal {\n  display: flex;\n}"
lang: css
---

```vue
<template>
  <div>
    <div class="horizontal">
       <h4>Side</h4>
       <h2>by</h2>
       <h4>Side</h4>
    </div>

    <br>

    <div class="horizontal align">
       <h4>Side</h4>
       <h1 class="padding">by</h1>
       <h4>Side</h4>
    </div>

    <br>

    <div class="horizontal justify">
       <h4>Side</h4>
       <h1 class="padding">by</h1>
       <h4>Side</h4>
    </div>
  </div>
</template>

<style>
.horizontal {
  display: flex;
  background: darkgrey;
}

.padding {
  padding: 16px;
}

.align {
  align-items: center;
}

.justify {
  justify-content: flex-end;
}
</style>
```
