<template>
  <div class="border-b-2 border-gray-300">
    <div class="container mx-auto px-6">
      <nav class="py-3 w-full flex items-center justify-between">
        <n-link class="flex items-center flex-shrink" to="/">
          <div class="flex-shrink-0">
            <favicon class="w-8 h-8"/>
          </div>
          <div class="text-lg font-bold ml-4 text-gray-800 hover:text-red-600">
            <div class="truncate">
              Project Heartcode
            </div>
          </div>
        </n-link>
        <div class="flex">
          <n-link v-for="nav in navs" :to="nav.path" :key="nav.path"
                  class="ml-4 hover:bg-red-500 font-bold text-base px-4 py-2 rounded bg-red-600 text-white"
          >
            {{ nav.name }}
          </n-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Favicon from "@/components/Favicon";

export default {
  name: "NavHeader",
  components: {Favicon},
  data() {
    return {
      navs: [
        {path: '/learn', name: 'LEARN'},
      ]
    }
  },
  computed: {
    currentPath() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>
