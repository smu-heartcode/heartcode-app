---
order: 4
title: Linking within page
tags: ['#id', 'id=']
code: "<a href=\"#there\">Go</a>\n\n<h1 id=\"there\">There</h1>"
---

```vue
<template>
  <div>
    <a href="#below">
      <button>Go Below</button>
    </a>
  
    <p>
      <br>.<br>.<br>.<br>.<br>.<br>.<br>.
      <br>.<br>.<br>.<br>.<br>.<br>.<br>.
      <br>.<br>.<br>.<br>.<br>.<br>.<br>.
      <br>.<br>.<br>.<br>.<br>.<br>.<br>.
      <br>.<br>.<br>.<br>.<br>.<br>.<br>.
    </p>

    <h1 id="below">Below</h1>
    <p>Hello, I am below!</p>
  
    <p>
      <br>.<br>.<br>.<br>.<br>.<br>.<br>.
      <br>.<br>.<br>.<br>.<br>.<br>.<br>.
    </p>
  </div>
</template>
```
