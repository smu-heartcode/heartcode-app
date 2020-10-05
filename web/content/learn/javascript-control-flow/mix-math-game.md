---
order: 100
title: "★ Math Game"
tags: [
"setInterval()",
"Math.random()",
]
code: "setInterval(() => {\n  this.score = 1 + this.score\n}, 4000)"
lang: js
---

```vue
<template>
  <div>
    <div class="keyboard">
      <h1>{{rand1}} + {{rand2}}</h1>
      <h1> = </h1>

      <input class="input" v-model="answer">
    </div>
    <br>
    <div class="score" v-if="round > 0">
      <h3>Score: {{score}}</h3>
      <h3>Rounds: {{round}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      round: 0,
      score: 0,
      answer: "",
      rand1: 0,
      rand2: 0
    }
  },
  mounted() {
    setInterval(() => {
      if (this.rand1 + this.rand2 === Number.parseInt(this.answer)) {
        this.score = this.score + 1
      }

      this.answer = ""

      this.rand1 = Math.round(Math.random() * 100)
      this.rand2 = Math.round(Math.random() * 100)

      this.round = this.round + 1
    }, 4000)
  },
}
</script>

<style>
.keyboard {
  padding: 16px;
  background: black;
  color: white;
  border-radius: 3px;
}

.input {
  color: black;
  background: white;
}

.score {
  padding: 16px;
  background: black;
  color: white;
  border-radius: 3px;
}
</style>
```
