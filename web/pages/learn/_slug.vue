<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-3xl font-bold">{{ page.title }}</h1>
    <div>
      {{ page.tags }}
    </div>

    <div>
      <pre>{{ code }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params: {slug}}) {
    const path = slug.replace(/-/, '/')
    const page = await $content(`learn/${path}`, {text: true}).fetch()

    return {
      page,
      code: page.text.replace(/```.*/g, '').trim()
    }
  }
}
</script>
