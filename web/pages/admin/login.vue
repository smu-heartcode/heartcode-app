<template>
  <div class="container mx-auto p-6">
    <div class="flex items-center justify-center">
      <div class="rounded bg-gray-200 p-6">
        <div>
          <h1 class="text-2xl font-bold">Admin Login</h1>
        </div>
        <div class="flex mt-4">
          <div>
            <input
              placeholder="PASSWORD"
              type="password"
              v-model="password"
              class="bg-white py-2 px-3 rounded font-medium text-xl border border-gray-200 w-full"
            >
          </div>
          <div class="ml-4">
            <button class="bg-red-500 py-2 px-4 border rounded font-bold text-xl text-white"
                    @click="login">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: ""
    }
  },
  methods: {
    login() {
      this.$store.dispatch('admin/login', {password: this.password})
        .then(() => {
          this.$router.push({path: '/'})
        })
    }
  }
}
</script>
