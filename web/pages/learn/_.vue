<template>
  <learn-page-layered v-if="page.layered" :page="page"/>
  <learn-page v-else :page="page"/>
</template>

<script>
import LearnPage from "~/components/learn/LearnPage";
import LearnPageLayered from "~/components/learn/LearnPageLayered";

export default {
  components: {LearnPageLayered, LearnPage},
  async asyncData({$content, params: {pathMatch}}) {
    const page = await $content(`learn/${pathMatch}`, {text: true}).fetch()
    return {page}
  }
}
</script>
