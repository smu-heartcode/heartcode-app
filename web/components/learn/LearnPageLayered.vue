<template>
  <learn-page :page="page">
    <div>
      <h3 class="font-mono">{{ childName }}</h3>
      <code-split ref="component" :body="body.child" @component="onComponent"/>
    </div>

    <div class="mt-8" v-if="scope">
      <h3 class="font-mono">{{ parentName }}</h3>
      <code-split ref="parent" :body="body.parent" :scope="scope"/>
    </div>
  </learn-page>
</template>

<script>
import LearnPage from "~/components/learn/LearnPage";
import CodeSplit from "~/components/learn/CodeSplit";

export default {
  name: "LearnPageLayered",
  components: {
    CodeSplit,
    LearnPage
  },
  props: {
    page: Object,
  },
  computed: {
    childName() {
      return this.page.layered.child || "/components/child.vue"
    },
    parentName() {
      return this.page.layered.parent || "/components/parent.vue"
    }
  },
  data() {
    const code = this.page.text.replace(/```.*/g, '').trim()
    const parts = code.split("---")

    return {
      scope: null,
      body: {
        child: parts[0],
        parent: parts[1],
      },
    }
  },
  methods: {
    onComponent(component) {
      this.scope = {
        Child: component
      }

      if (this.$refs.page) {
        this.$refs.parent.refresh()
      }
    }
  },
}
</script>
