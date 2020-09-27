<!--suppress HtmlUnknownAttribute -->

<template>
  <div class="bg-gray-200 hover:bg-gray-300 rounded overflow-hidden hover:shadow-xl cursor-pointer">
    <div class="px-4 py-3">
      <h4 class="text-lg font-bold">{{ title }}</h4>
    </div>

    <div>
      <pre class="text-xs px-4 py-3" v-highlightjs><code class="html">{{ code }}</code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnCard",
  props: {
    title: {type: String, required: true},
    tags: {type: Array, required: true},
    code: {type: String, required: true},
  }
}
</script>

<style scoped>
pre {
  background: #1E1E1E;
  color: #DCDCDC;
}
</style>
