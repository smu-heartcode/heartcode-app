---
order: 4
title: Vue Horizontal List
tags: [
]
code: "<vue-horizontal-list :items=\"items\">\n  <template v-slot:default=\"{item}\">\n</vue-horizontal-list>"
lang: html
---

```vue
<template>
  <heartcode-container>
    <vue-horizontal-list :items="items" :options="options">
      <template v-slot:default="{item}">
        <div class="item">
          <div class="image-wrapper">
            <img class="image" :alt="item.title" :src="item.image"/>
            <div class="title">
              <h1>{{ item.title }}</h1>
            </div>
          </div>

          <div class="bottom">
            <div class="subtitle">{{ item.subtitle }}</div>
            <p class="text">{{ item.content }}</p>
          </div>
        </div>
      </template>
    </vue-horizontal-list>
  </heartcode-container>
</template>

<script>
export default {
  data() {
    return {
      options: {
        list: {windowed: 640, padding: 24},
        responsive: [
          {end: 640, size: 1},
          {start: 640, end: 768, size: 2},
          {start: 768, end: 1024, size: 3},
          {start: 1024, end: 1280, size: 4},
          {start: 1280, size: 5},
        ],
      },
      items: [
        {
          title: 'Clothes',
          subtitle: 'Parlors • 4/5',
          content: 'Clothes parlors however by cottage on.',
          image: 'https://picsum.photos/id/1015/300/300'
        },
        {
          title: 'Offended',
          subtitle: 'Speaking • 5/5',
          content: 'Offended ten old consider speaking.',
          image: 'https://picsum.photos/id/1023/300/300'
        },
        {
          title: 'Abilities',
          subtitle: 'Pretend • 5/5',
          content: 'Abilities or he perfectly pretended so strangers be exquisite.',
          image: 'https://picsum.photos/id/1025/300/300'
        },
        {
          title: 'Chamber',
          subtitle: 'Imagine • 3/5',
          content: 'Oh to another chamber pleased imagine do in.',
          image: 'https://picsum.photos/id/1062/300/300'
        },
        {
          title: 'Rank',
          subtitle: 'Rank • 3/5',
          content: 'Went me rank at last loud shot an draw.',
          image: 'https://picsum.photos/id/1074/300/300'
        },
        {
          title: 'Excellent',
          subtitle: 'Sincerity • 4/5',
          content: 'Excellent so to no sincerity smallness.',
          image: 'https://picsum.photos/id/169/300/300'
        },
        {
          title: 'Removal',
          subtitle: 'Request • 5/5',
          content: 'Removal request delight if on he we.',
          image: 'https://picsum.photos/id/219/300/300'
        },
        {
          title: 'Unaffected',
          subtitle: 'Astonished • 5/5',
          content: 'Unaffected in we by apartments astonished to decisively themselves.',
          image: 'https://picsum.photos/id/244/300/300'
        },
        {
          title: 'Former',
          subtitle: 'Highly • 3/5',
          content: 'He always do do former he highly.',
          image: 'https://picsum.photos/id/275/300/300'
        },
        {
          title: 'Marianne',
          subtitle: 'Striking • 5/5',
          content: 'Marianne property cheerful informed at striking at.',
          image: 'https://picsum.photos/id/428/300/300'
        },
        {
          title: 'Shewing',
          subtitle: 'Demands • 4/5',
          content: 'To shewing another demands to.',
          image: 'https://picsum.photos/id/450/300/300'
        },
      ]
    }
  },
}
</script>

<style scoped>
.image-wrapper {
  position: relative;
  border-radius: 4px;
  overflow: hidden;

  padding-bottom: 60%;
}

.image {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.title {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  color: white;
  background: #00000050;

  display: flex;
  justify-content: center;
  align-items: center;
}

.subtitle {
  font-weight: 600;
  font-size: 15px;
  padding-top: 4px;
}

.bottom {
  padding-top: 4px;
}

.text {
  padding-top: 2px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
```
