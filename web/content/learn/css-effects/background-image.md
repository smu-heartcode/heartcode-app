---
order: 5
title: Background Image
tags: [
"background: url('/pikachu.jpg');",
"background-repeat: no-repeat;",
"background-position: center;",
"background-size: cover;",
]
code: ".background-image {\n  background: url('/pikachu.jpg');\n}"
lang: css
directory: "static/\n├── meme.png\n├── pikachu.jpg  <-- I am using this image.\n├── other.png <-- You can add other here."
---

```vue
<template>
  <div>
    <div class="background-image">
      <h1>Header</h1> 
      <p>Paragraph</p>
      <br>
      <h5>Subscribe!</h5>
    </div>
  </div>
</template>

<style scoped>
.background-image {
  background: url('/pikachu.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; 
  padding: 24px;
  color: white;
}
</style>
```
