<template>
  <div class="container mx-auto px-6 py-6">
    <div>
      <learn-session/>
    </div>
    <div class="mt-8">
      <project-banner/>
    </div>
  </div>
</template>

<script>
import ProjectBanner from "@/components/ProjectBanner";
import LearnSession from "@/components/LearnSession";

export default {
  components: {LearnSession, ProjectBanner}
}
</script>
