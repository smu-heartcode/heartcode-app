<template>
  <div class="container mx-auto px-6 pt-8 pb-32">
    <div v-if="isLoggedIn" class="mb-6 flex justify-end">
      <div class="flex items-center">
        <h4 class="font-bold mr-6">Admin Control</h4>

        <button v-if="isControlActive"
                @click="disableAll"
                class="font-bold py-2 px-5 rounded bg-gray-200 focus:outline-none hover:shadow mr-6">
          Disable All
        </button>

        <button @click="toggleControl" class="font-bold py-2 px-5 rounded bg-gray-200 focus:outline-none hover:shadow">
          Toggle Content
        </button>
      </div>
    </div>

    <section v-for="content in list" :key="content.title" class="mb-16">
      <h2 class="text-3xl font-bold">{{ content.title }}</h2>

      <div class="mt-4">
        <div class="flex flex-wrap -m-3">
          <div class="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3" v-for="item in content.items" :key="item.title">
            <n-link :to="item.path" class="block h-full">
              <learn-card :title="item.title" :tags="item.tags" :code="item.code" :lang="item.lang"/>
            </n-link>

            <div v-if="isControlActive" class="absolute inset-0 z-50 p-3">
              <div class="opacity-25 h-full rounded cursor-pointer"
                   :class="{
                      'bg-green-500': isContentActive(item.path),
                      'bg-red-500': !isContentActive(item.path),
                   }"
                   @click="() => toggleContent(item.path)">
              </div>
            </div>

            <div v-else-if="!isContentAvailable(item.path)" class="absolute inset-0 z-50 p-3">
              <div class="bg-white opacity-75 h-full rounded"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import LearnCard from "~/components/learn/LearnCard";

export default {
  components: {LearnCard},
  computed: {
    ...mapGetters('admin', ['isLoggedIn']),
    ...mapGetters('learn-content', ['isControlActive', 'isContentActive', 'isContentAvailable']),
  },
  methods: {
    ...mapMutations({
      toggleContent: 'learn-content/toggleContent',
      disableAll: 'learn-content/disableAll',
    }),
    ...mapActions({
      toggleControl: 'learn-content/toggleControl',
    }),
  },
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
        await get('HTML: Basic', 'learn/html-basic'),
        await get('HTML: Advanced', 'learn/html-advanced'),
        await get('HTML: Media', 'learn/html-media'),
        await get('HTML: Navigation', 'learn/html-navigation'),
        await get('CSS: Design', 'learn/css'),
        await get('CSS: Effects', 'learn/css-effects'),
        await get('CSS: Layout', 'learn/css-layout'),
        await get('Javascript', 'learn/javascript'),
        await get('Reactivity: Input & Conditions', 'learn/javascript-reactivity'),
        await get('Reactivity: Control Flow', 'learn/javascript-control-flow'),
        await get('Reactivity: API', 'learn/javascript-api'),
        await get('Reactivity: Advanced', 'learn/javascript-advanced'),
      ]
    }
  },
  mounted() {
    this.$store.dispatch('learn-content/refreshContent')
  }
}
</script>
