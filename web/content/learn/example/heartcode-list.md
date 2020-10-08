---
order: 12
title: Heartcode List
tags: [
"<heartcode-list>",
]
code: "<heartcode-list class=\"list\">\n  <heartcode-image class=\"card\"/>\n</heartcode-list>"
lang: html
---

```vue
<template>
  <heartcode-list class="list">
    <heartcode-image class="card" :src="item.image" v-for="item in list">
      <div class="overlay">
        <div class="tag">
          {{ item.tag }}
        </div>

        <h4 class="title">
          {{ item.title }}
        </h4>

        <p class="subtitle">
          {{ item.subtitle }}
        </p>
      </div>
    </heartcode-image>
  </heartcode-list>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          tag: '⛵ Holiday',
          title: 'Top 10 places to visit before you start working',
          subtitle: 'June 5, 2020 • 5 Min Read',
          image: 'https://picsum.photos/id/29/300/300'
        },
        {
          tag: '⛵ Holiday',
          title: 'Top 10 places to visit before you start working',
          subtitle: 'June 5, 2020 • 5 Min Read',
          image: 'https://picsum.photos/id/22/300/300'
        },
        {
          tag: '⛵ Holiday',
          title: 'Top 10 places to visit before you start working',
          subtitle: 'June 5, 2020 • 5 Min Read',
          image: 'https://picsum.photos/id/313/300/300'
        },
        {
          tag: '⛵ Holiday',
          title: 'Top 10 places to visit before you start working',
          subtitle: 'June 5, 2020 • 5 Min Read',
          image: 'https://picsum.photos/id/122/300/300'
        },
        {
          tag: '⛵ Holiday',
          title: 'Top 10 places to visit before you start working',
          subtitle: 'June 5, 2020 • 5 Min Read',
          image: 'https://picsum.photos/id/125/300/300'
        },
        {
          tag: '⛵ Holiday',
          title: 'Top 10 places to visit before you start working',
          subtitle: 'June 5, 2020 • 5 Min Read',
          image: 'https://picsum.photos/id/131/300/300'
        },
      ]
    }
  }
}
</script>

<style scoped>
.list {
  overflow: hidden;
}

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

.card {
  flex: 0 0 100%;
}

@media (min-width: 400px) {
  .card {
    flex: 0 0 50%;
  }
}

@media (min-width: 768px) {
  .card {
    flex: 0 0 33.333%;
  }
}

@media (min-width: 1024px) {
  .card {
    flex: 0 0 25%;
  }
}

@media (min-width: 1280px) {
  .card {
    flex: 0 0 20%;
  }
}

@media (min-width: 1680px) {
  .card {
    flex: 0 0 16.666%;
  }
}
</style>

```
