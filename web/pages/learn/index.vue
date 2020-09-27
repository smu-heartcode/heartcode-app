<template>
  <div class="container mx-auto px-6 py-8">
    <section v-for="content in list" :key="content.title" class="mb-12">
      <h2 class="text-2xl font-bold">{{ content.title }}</h2>

      <div class="mt-4">
        <div class="flex flex-wrap -m-3">
          <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3" v-for="item in content.items">
            <n-link :to="getPath(item)">
              <learn-card :title="item.title" :tags="item.tags" :code="item.code"/>
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
    const html = await $content('learn/html').fetch()
    const structure = await $content('learn/structure').fetch()

    return {
      list: [
        {
          title: "Setup & Installation",
          items: [],
        },
        {
          title: "Structure",
          items: structure,
        },
        {
          title: "HTML Basic",
          items: html,
        }
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
