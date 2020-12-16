---
order: 52
title: Effects Gradient
tags: [
"background-image: linear-gradient(to right, red, white)",
"background-image: linear-gradient(to bottom, red, white)",
"background-image: linear-gradient(to bottom right, red, white)",
]
code: ".background-red-white {\n  background-image: linear-gradient(to right, red, white);\n}"
lang: css
---

```vue
<template>
  <div>
    <div class="background-red-pink">
       <h4>From Red to Pink</h4>
    </div>
    <br>
    <div class="background-teal-blue">
       <h4>From Teal to Blue</h4>
    </div>
    <br>
    <div class="background-purple-blue">
       <h4>From Purple to Blue</h4>
       <h5>From top to bottom right</h5>
    </div>
    <br>
    <div class="background-rainbow">
       <h4>Rainbow!</h4>
    </div>
  </div>
</template>

<style>
.background-red-pink, 
.background-teal-blue, 
.background-purple-blue,
.background-rainbow {
  padding: 16px;
  border-radius: 4px;
  color: white;
}

.background-red-pink {
  background-image: 
    linear-gradient(to right, red, pink);
}

.background-teal-blue {
  background-image: 
    linear-gradient(to right, #009090, #00aaff);
}

.background-purple-blue {
  background-image: 
    linear-gradient(to bottom right, #3300aa, #00aaff);
}

.background-rainbow {
  opacity: 0.7;
  background-image: linear-gradient(to right, 
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
</style>
```
