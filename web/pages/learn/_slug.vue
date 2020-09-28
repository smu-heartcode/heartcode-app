<template>
  <learn-page :page="page"/>
</template>

<script>
import LearnPage from "~/components/learn/LearnPage";

export default {
  components: {LearnPage},
  async asyncData({$content, params: {slug}}) {
    const path = slug.replace(/-/, '/')
    const page = await $content(`learn/${path}`, {text: true}).fetch()

    return {page}
  }
}
</script>
