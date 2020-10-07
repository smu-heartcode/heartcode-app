---
order: 3
title: Display Flex 2
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
      <div class="box" v-for="_ in 3">Normal</div>
    </div>

    <div class="horizontal justify-flex-end">
      <div class="box" v-for="_ in 3">End</div>
    </div>
    
    <div class="horizontal justify-center">
      <div class="box" v-for="_ in 3">Center</div>
    </div>

    <div class="horizontal justify-between">
      <div class="box" v-for="_ in 3">Between</div>
    </div>

    <div class="horizontal">
      <div class="box">Box</div>
      <div class="box flex-grow">Grow</div>
      <div class="box">Box</div>
    </div>

    <div class="horizontal">
      <div class="box flex-grow">Grow</div>
      <div class="box">Box</div>
      <div class="box flex-grow">Grow</div>
    </div>

    <div class="horizontal flex-wrap">
      <div class="box" v-for="_ in 8">Wrap</div>
    </div>

    <div class="horizontal flex-wrap">
      <div class="box box-30" v-for="_ in 3">30%</div>
    </div>
  </div>
</template>

<style>
.box {
  padding: 24px;
  border-radius: 4px;
  background: #f1f1f1;

  margin: 8px;
}

.box-30 {
  flex-basis: 30%;
}

.horizontal {
  display: flex;
}

.justify-flex-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: between;
}

.flex-grow {
  flex-grow: 1;
}

.flex-wrap {
  flex-wrap: wrap;
}
</style>
```
