<template>
  <div class="px-6 py-6 sm:py-8 lg:py-10">
    <article class="prose prose-sm sm:prose lg:prose-lg mx-auto">
      <nuxt-content :document="page"/>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({$content}) {
    const page = await $content('learn/faq').fetch()

    return {
      page
    }
  }
}
</script>
