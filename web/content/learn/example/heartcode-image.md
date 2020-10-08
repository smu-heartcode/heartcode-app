---
order: 1
title: Heartcode Image
tags: [
"<heartcode-image>",
]
code: "<heartcode-image class=\"image\">\n  <div>...\n</heartcode-image>"
lang: html
---

```vue
<template>
  <heartcode-image class="card" src="https://picsum.photos/id/29/300/300">
    <div class="overlay">
      <div class="tag">
        ⛵ Holiday
      </div>

      <h4 class="title">
        Top 10 places to visit before you start working
      </h4>

      <p class="subtitle">
        June 5, 2020 • 5 Min Read
      </p>
    </div>
  </heartcode-image>
</template>

<style scoped>
.overlay {
  height: 100%;
  background: #00000080;
  color: white;
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}

.tag {
  padding: 4px 12px;
  border-radius: 99999px;
  background: white;
  color: black;

  font-size: 14px;
  font-weight: 500;
}

.title {
  padding-top: 8px;
}

.subtitle {
  padding-top: 6px;
  font-size: 12px;
  font-weight: 600;
}
</style>

```
