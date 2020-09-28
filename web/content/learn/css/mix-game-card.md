---
order: 100
title: Game Card
tags: []
code: "<h4>Surprised Pikachu</h4>\n<img src=\"/pikachu.jpg\">\n<h6>🃏 HeartCode 2020</h6>"
lang: html
---

```vue
<template>
  <div>
    <div class="card">
      <h4 class="header">
      Surprised Pikachu • <i>100 HP</i>
      </h4>

      <img src="/pikachu.jpg">

      <p class="information">
        <b>Surprised Pikachu</b>
        refers to a screenshot from the Pokémon
        anime of the character Pikachu with its
        mouth agape, as though it were surprised
        at something.
      </p>

      <h6 class="collection">
      🃏 HeartCode 2020 Collection
      </h6>
    </div>
  </div>
</template>

<style>
.header {
   padding-bottom: 8px;
}

.card {
  border-radius: 5px;
  border-width: 5px;
  border-color: #e0ca1f;
  background: #ffe62d;

  padding: 18px;
  width: 300px;
}

.information {
  padding-top: 12px;
}

.collection {
  padding-top: 12px;
  color: #e92929;
  text-align: right;
}
</style>
```
