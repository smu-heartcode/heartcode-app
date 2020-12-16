<template>
  <div class="container mx-auto px-6 py-6">
    <div>
      <learn-session/>
    </div>

    <div class="mt-12 pb-48">
      <h1 class="text-3xl font-bold mb-6 text-center">Student Projects</h1>
      <projects/>
    </div>
  </div>
</template>

<script>
import ProjectBanner from "@/components/ProjectBanner";
import LearnSession from "@/components/LearnSession";
import Projects from "@/components/Projects";

export default {
  components: {Projects, LearnSession, ProjectBanner}
}
</script>
