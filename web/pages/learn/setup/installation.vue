<template>
  <div class="px-6 pt-6 sm:pt-8 lg:pt-12 pb-32">
    <article class="prose prose-sm sm:prose lg:prose-lg mx-auto">
      <h1>Setting up for web development</h1>
      <blockquote>
        Installing VS Code & Node.js. <br>
        - Visual Studio Code is a free source-code editor made by Microsoft. <br>
        - Node.js is an JavaScript runtime environment that executes JavaScript code.
      </blockquote>

      <h2>VS Code</h2>

      <section>
        <operating-system-options class="mt-4"
                                  windows="https://aka.ms/win32-user-stable"
                                  mac="https://go.microsoft.com/fwlink/?LinkID=620882"
        />

        <div v-if="isMac">
          <h4>Mac Installation Instructions</h4>
          <ol>
            <li>Open to unzip <b>VSCode-darwin-stable.zip</b></li>
            <li>Move <b>Visual Studio Code</b> into application folder</li>
            <li>Open <b>Visual Studio Code</b></li>
          </ol>
        </div>

        <div v-if="isWindows">
          <h4>Windows Installation Instructions</h4>
          <ol>
            <li>Double click <b>VSCodeUserSetup-x64-1.49.2.exe</b></li>
            <li>Select I accept the agreement and click <b>next</b></li>
            <li>Click <b>next</b> on each step</li>
            <li>And finally, click <b>Install</b></li>
            <li>Click <b>finish</b> with Launch Visual Studio Code checked</li>
          </ol>
        </div>
      </section>

      <h2>Node.js</h2>

      <section>
        <operating-system-options class="mt-4"
                                  windows="https://nodejs.org/dist/v14.15.1/node-v14.15.1-x86.msi"
                                  mac="https://nodejs.org/dist/v14.15.1/node-v14.15.1.pkg"
        />

        <div v-if="isMac">
          <h4>Mac Installation Instructions</h4>
          <ol>
            <li>Open to <b>node-v12.18.4.pkg</b></li>
            <li>Click <b>continue</b> and <b>agree</b> to everything</li>
            <li>And finally, click <b>install</b></li>
          </ol>
        </div>

        <div v-if="isWindows">
          <h4>Windows Installation Instructions</h4>
          <ol>
            <li>Double click <b>node-v12.18.4-x64.msi</b></li>
            <li>Click <b>next</b>, <b>accept</b> and <b>next</b></li>
            <li>And finally, click <b>install</b></li>
          </ol>
        </div>
      </section>

      <h2>Success!</h2>

      <blockquote>
        At this stage, you would have 2 application: Visual Studio Code and Node.js Installed.
      </blockquote>

      <n-link to="/learn">
        Go back to /learn
      </n-link>
    </article>
  </div>
</template>

<script>
import OperatingSystemOptions from "@/components/learn/setup/OperatingSystemOptions";

export default {
  components: {OperatingSystemOptions},
  async asyncData({$content}) {
    const page = await $content('learn/setup/installation').fetch()

    return {
      page
    }
  },
  computed: {
    isMac() {
      return navigator.platform.indexOf('Mac') > -1 || this.isNeither
    },
    isWindows() {
      return navigator.platform.indexOf('Win') > -1 || this.isNeither
    },
    isNeither() {
      return navigator.platform.indexOf('Mac') <= -1 && navigator.platform.indexOf('Win') <= -1
    },
  }
}
</script>

<style scoped lang="less">
details:after {
  content: "";
@apply block;
@apply pb-4;
}

summary {
@apply cursor-pointer;

  &:focus {
  @apply outline-none;
  }
}

span.code {
@apply leading-none;
@apply text-gray-900;
@apply bg-gray-300;
@apply px-2;
@apply py-1;
@apply rounded;
@apply font-bold;
@apply select-text;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

span.error-code {
@apply text-gray-700;
@apply rounded bg-red-200;
@apply px-2 py-1;
@apply mx-1;
@apply font-medium leading-none text-center;
@apply select-text;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
