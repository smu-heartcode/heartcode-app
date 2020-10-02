<template>
  <div class="flex">
    <a :href="windows" target="_blank" :class="{is: isWindows}">
      <windows10/>
      <span>Download</span>
    </a>

    <a :href="mac" target="_blank" :class="{is: isMac}">
      <apple-logo/>
      <span>Download</span>
    </a>
  </div>
</template>

<script>
import Windows10 from "@/components/icons/Windows10";
import AppleLogo from "@/components/icons/AppleLogo";

export default {
  name: "OperatingSystemOptions",
  components: {AppleLogo, Windows10},
  props: {
    windows: {
      type: String,
      required: true,
    },
    mac: {
      type: String,
      required: true,
    },
  },
  computed: {
    isMac() {
      return navigator.platform.indexOf('Mac') > -1
    },
    isWindows() {
      return navigator.platform.indexOf('Win') > -1
    }
  }
}
</script>

<style scoped lang="less">
a {
@apply no-underline;
@apply flex;
@apply items-center;
@apply bg-gray-300;
@apply rounded;
@apply cursor-pointer;
@apply opacity-25;

  &.is {
  @apply opacity-100;
  }

  &:hover {
  @apply shadow;
  }

  span {
  @apply ml-4;
  @apply font-semibold;
  }
}

a {
@apply py-2;
@apply pl-2;
@apply pr-3;
@apply mr-4;

  > svg {
  @apply w-6;
  @apply h-6;
  }

  @media (min-width: 640px) {
  @apply py-3;
  @apply pl-4;
  @apply pr-6;
  @apply mr-6;

    > svg {
    @apply w-10;
    @apply h-10;
    }
  }
}
</style>
