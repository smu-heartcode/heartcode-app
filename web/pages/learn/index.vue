<template>
  <div class="container mx-auto px-6 pt-8 pb-32">
    <section v-for="content in list" :key="content.title" class="mb-16">
      <h2 class="text-3xl font-bold">{{ content.title }}</h2>

      <div class="mt-4">
        <div class="flex flex-wrap -m-3">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3" v-for="item in content.items" :key="item.title">
            <n-link :to="getPath(item)" class="block h-full">
              <learn-card :title="item.title" :tags="item.tags" :code="item.code" :lang="item.lang"/>
            </n-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LearnCard from "~/components/learn/LearnCard";

export default {
  components: {LearnCard},
  async asyncData({$content}) {

    async function get(title, path) {
      return {
        title,
        items: await $content(path)
          .only(['path', 'title', 'tags', 'code', 'lang'])
          .sortBy('order')
          .fetch()
      }
    }

    return {
      list: [
        await get('Setting up', 'learn/setup'),
        await get('HTML Basic', 'learn/html'),
        await get('Navigation', 'learn/navigation'),
        await get('Media', 'learn/media'),
        await get('CSS Design', 'learn/css'),
        await get('Javascript', 'learn/javascript'),
        await get('Reactivity: Input & Conditions', 'learn/reactivity'),
        await get('Reactivity: Control Flow', 'learn/flow'),
        await get('Reactivity: API', 'learn/api'),
      ]
    }
  },
  methods: {
    getPath({path}) {
      const postfix = path.replace('/learn/', '')
      return `/learn/${postfix.replace(/\//, '-')}`
    }
  }
}
</script>

<style scoped>
</style>
