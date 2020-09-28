<!--suppress HtmlUnknownAttribute -->

<template>
  <div class="bg-gray-200 h-full rounded overflow-hidden hover:bg-gray-300 hover:shadow-xl cursor-pointer">
    <div class="h-full flex flex-col">
      <div class="px-4 py-3">
        <h4 class="text-lg font-bold">{{ title }}</h4>
      </div>

      <pre class="flex-grow text-xs px-4 py-3" v-highlightjs><code :class="lang">{{ code }}</code></pre>
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
    lang: {type: String, default: 'html'},
  }
}
</script>

<style scoped lang="less">
pre {
  background: #1E1E1E;
  color: #DCDCDC;

  > * {
    overflow: hidden;
  }
}
</style>
