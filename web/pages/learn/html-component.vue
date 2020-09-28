<template>
  <learn-page :page="page">
    <div>
      <h3 class="font-mono">/components/custom.vue</h3>
      <code-split ref="component" :body="body.component" @component="onComponent"/>
    </div>

    <div class="mt-8" v-if="scope">
      <h3 class="font-mono">/pages/index.vue</h3>
      <code-split ref="page" :body="body.page" :scope="scope"/>
    </div>
  </learn-page>
</template>

<script>
import _slug from "~/pages/learn/_slug";
import LearnPage from "~/components/learn/LearnPage";
import CodeSplit from "~/components/learn/CodeSplit";

export default {
  components: {
    CodeSplit,
    LearnPage
  },
  async asyncData(ctx) {
    // noinspection JSCheckFunctionSignatures
    const data = await _slug.asyncData({...ctx, params: {slug: 'html-component'}})
    const code = data.page.text.replace(/```.*/g, '').trim()
    const parts = code.split("---")

    return {
      ...data,
      body: {
        component: parts[0],
        page: parts[1],
      },
      scope: null
    }
  },
  methods: {
    onComponent(component) {
      this.scope = {
        Custom: component
      }
      if (this.$refs.page) {
        this.$refs.page.refresh()
      }
    }
  },
}
</script>
