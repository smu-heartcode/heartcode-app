<template>
  <div class="mt-2 rounded overflow-hidden border border-gray-300">
    <vuep ref="vuep" :template="liveCode" @input="onChange" :options="options" :scope="scope"/>
  </div>
</template>

<script>
import Vuep from '@smu-heartcode/vuep'

import stripIndent from "strip-indent";

export default {
  name: "CodeSplit",
  components: {
    Vuep
  },
  props: {
    /**
     * Code body
     */
    body: {type: String, required: true,},

    /**
     * Pass scoped component into CodeSplit Preview
     */
    scope: {type: Object,},
  },
  data() {
    return {
      options: {
        scrollbarStyle: null
      },
      liveCode: stripIndent(this.body).trim()
    }
  },
  methods: {
    onChange(liveCode) {
      this.liveCode = liveCode
      if (this.$refs.vuep) {
        this.$emit('component', this.$refs.vuep.preview)
      }
    },
    refresh() {
      this.$nextTick(() => {
        this.$refs.vuep.executeCode(this.liveCode)
      })
    }
  },
  mounted() {
    this.onChange()
  }
}
</script>

<style>
.CodeMirror-scroll {
  overflow-x: scroll;
  padding-bottom: 64px;
  margin-bottom: -80px;
}
</style>
