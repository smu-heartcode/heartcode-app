<template>
  <div class="container mx-auto px-6 pt-8 pb-32">

    <div class="flex flex-wrap items-center -m-2">
      <div class="p-2">
        <h1 class="text-3xl font-bold">{{ page.title }}</h1>
      </div>
      <div class="p-2">
        <div class="flex flex-wrap -m-1">
          <div v-for="tag in page.tags" class="p-1">
            <div class="bg-gray-200 text-gray-900 rounded px-3 py-1">
              <div class="leading-normal text-sm font-semibold font-mono">{{ tag }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6" v-if="page.directory">
      <div class="rounded bg-gray-200 p-6">
        <h4 class="text-xl font-bold">File Directory</h4>
        <pre class="font-mono text-xs">{{ page.directory }}</pre>
      </div>
    </div>

    <div class="mt-6 heartcode">
      <slot>
        <code-split :body="code"/>
      </slot>
    </div>
  </div>
</template>

<script>
import CodeSplit from "~/components/learn/CodeSplit";

export default {
  components: {CodeSplit},
  props: {
    page: Object,
  },
  computed: {
    code() {
      return this.page.text.replace(/```.*/g, '').trim()
    }
  },
}
</script>
