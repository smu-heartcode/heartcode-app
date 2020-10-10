<template>
  <learn-page-parent-child v-if="page.layered" :page="page"/>
  <learn-page v-else :page="page"/>
</template>

<script>
import LearnPage from "@/components/learn/LearnPage";
import LearnPageParentChild from "@/components/learn/LearnPageLayered";

export default {
  components: {LearnPageParentChild, LearnPage},
  async asyncData({$content, params: {group, slug}}) {
    const page = await $content(`learn/${group}/${slug}`, {text: true}).fetch()
    return {page}
  }
}
</script>
