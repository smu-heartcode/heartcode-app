---
order: 5
title: Vue Masonry Wall
tags: [
]
code: "<vue-masonry-wall :items=\"items\">\n  <template v-slot:default=\"{item}\">\n</vue-masonry-wall>"
lang: html
---

```vue
<template>
  <heartcode-container>
    <h1>Heartcode Waterfall</h1>
    <h5>Waterfall/Pinterest/Masonry Layout</h5>

    <div class="waterfall">
      <vue-masonry-wall :items="items" :options="options">
        <template v-slot:default="{item}">
          <div class="item">
            <img class="image" :alt="item.title" :src="item.image"/>

            <div class="overlay">
              <h3>
                <span class="title">{{ item.title }}</span>
              </h3>
              <p class="text">{{ item.content }}</p>
            </div>
          </div>
        </template>
      </vue-masonry-wall>
    </div>
  </heartcode-container>
</template>

<script>
export default {
  data() {
    return {
      options: {
        width: 300,
        padding: 9,
      },
      items: [
        {title: 'Clothes', content: 'Clothes parlors however by cottage on.', image: 'https://picsum.photos/id/1015/300/400'},
        {title: 'Offended', content: 'Offended ten old consider speaking.', image: 'https://picsum.photos/id/1023/300/330'},
        {title: 'Abilities', content: 'Abilities or he perfectly pretended so strangers be exquisite.', image: 'https://picsum.photos/id/1025/300/300'},
        {title: 'Chamber', content: 'Oh to another chamber pleased imagine do in.', image: 'https://picsum.photos/id/1062/300/400'},
        {title: 'Rank', content: 'Went me rank at last loud shot an draw.', image: 'https://picsum.photos/id/1074/300/250'},
        {title: 'Excellent', content: 'Excellent so to no sincerity smallness.', image: 'https://picsum.photos/id/169/300/250'},
        {title: 'Removal', content: 'Removal request delight if on he we.', image: 'https://picsum.photos/id/219/300/200'},
        {title: 'Unaffected', content: 'Unaffected in we by apartments astonished to decisively themselves.', image: 'https://picsum.photos/id/244/300/400'},
        {title: 'Former', content: 'He always do do former he highly.', image: 'https://picsum.photos/id/275/300/230'},
        {title: 'Marianne', content: 'Marianne property cheerful informed at striking at.', image: 'https://picsum.photos/id/428/300/300'},
        {title: 'Shewing', content: 'To shewing another demands to.', image: 'https://picsum.photos/id/450/300/210'},
      ]
    }
  },
}
</script>

<style scoped>
.waterfall {
  padding-top: 32px;
}

.item {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.image {
  width: 100%;
}

.overlay {
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  cursor: pointer;
  background: #00000075;
  color: white;
  padding: 16px;
  font-weight: 500;
}

.title {
  padding-bottom: 2px;
  border-bottom-width: 2px;
  border-bottom-color: white;
}

.text {
  padding-top: 16px;
}

.overlay:hover {
  opacity: 100%;
}
</style>

```
