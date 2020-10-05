---
order: 1001
title: "★ Page"
tags: []
code: "<h3>Pokemon Instagram</h3>\n<h2>Pikachu Meme</h2>\n<div class=\"tab\">IMAGES</div>"
lang: html
---

```vue
<template>
  <div class="page">
    <div class="header">
      <h3>Pokemon Instagram</h3>  
    </div>
    
    <div class="profile">
       <img class="profile-picture" src="/pikachu.jpg">
       <div class="details">
          <h2>Pikachu Meme</h2>
          <p class="stats">
            <b>99 Posts</b>
            -
            <b>30 Followers</b>
            -
            <b>10 Following</b>
          </p>
          <p>Whoa... Did you just understand me? Oh My God!</p>
       </div>
    </div>
    
    <div class="tabs">
      <div class="tab">IMAGES</div>
      <div class="tab">TAGGED</div>
    </div>

    <div class="images">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
      <img class="image" src="/meme.png">
    </div>
  </div>
</template>

<style>
.header {
  padding: 16px 24px;
  position: sticky;
  top: 0;
  
  background: white;
  border-color: #737373;
  border-bottom-width: 1px;
}

.profile {
  display: flex;
  padding: 24px;
}

.profile-picture {
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.details {
  padding-left: 24px;
}

.stats {
  font-size: 14px;
  padding-bottom: 8px;
}

.tabs {
  border-color: #737373;
  border-bottom-width: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab {
  padding: 12px;
  font-weight: 600;
  opacity: 50%;
  cursor: pointer;
}

.tab:hover {
  opacity: 100%;
}

.images  {
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
}

.image {
  width: 33.333%;
  padding: 12px;
}

/* Ignore this */
.page {
  overflow-y: scroll;
  height: 480px;
  border: 1px solid grey;
}
</style>
```
