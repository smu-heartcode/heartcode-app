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
    const setup = await $content('learn/setup').sortBy('order').fetch()
    const html = await $content('learn/html').sortBy('order').fetch()
    const navigation = await $content('learn/navigation').sortBy('order').fetch()
    const media = await $content('learn/media').sortBy('order').fetch()
    const css = await $content('learn/css').sortBy('order').fetch()
    const javascript = await $content('learn/javascript').sortBy('order').fetch()
    const reactivity = await $content('learn/reactivity').sortBy('order').fetch()
    const flow = await $content('learn/flow').sortBy('order').fetch()

    return {
      list: [
        {title: "Setting up", items: setup,},
        {title: "HTML Basic", items: html,},
        {title: "Navigation", items: navigation,},
        {title: "Media", items: media,},
        {title: "CSS Design", items: css,},
        {title: "Javascript", items: javascript,},
        {title: "Reactivity: Input & Button & Conditions", items: reactivity,},
        {title: "Reactivity: Control Flow", items: flow,},
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
