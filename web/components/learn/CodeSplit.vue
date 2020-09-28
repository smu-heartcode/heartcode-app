<template>
  <div class="mt-2 rounded overflow-hidden border border-gray-300">
    <vuep :template="liveCode" :options="options"/>
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
    body: {type: String, required: true,},
  },
  data() {
    return {
      options: {
        scrollbarStyle: null
      },
      liveCode: stripIndent(this.body).trim()
    }
  },
}
</script>
