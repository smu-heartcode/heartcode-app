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
        <details>
          <summary class="focus:outline-none cursor-pointer">Download from visualstudio.com website</summary>

          <a href="https://code.visualstudio.com/download">Download from visualstudio.com</a>
        </details>
      </section>

      <div>
        <details open>
          <summary><b>Click download based on your operating system</b></summary>

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
              <li>Click <b>install</b></li>
              <li>Click <b>Finish</b> with Launch Visual Studio Code checked</li>
            </ol>
          </div>

        </details>
      </div>

      <h2>Node.js</h2>
      <div>
        <details>
          <summary>Download from node.js website</summary>

          <a href="https://nodejs.org/en/download/">Download from nodejs.org</a>
        </details>
      </div>

      <div>
        <details open>
          <summary><b>Click download based on your operating system</b></summary>

          <operating-system-options class="mt-4"
                                    windows="https://nodejs.org/dist/v12.18.4/node-v12.18.4-x86.msi"
                                    mac="https://nodejs.org/dist/v12.18.4/node-v12.18.4.pkg"
          />

          <div v-if="isMac">
            <h4>Mac Installation Instructions</h4>
            <ol>
              <li>Open to <b>node-v12.18.4.pkg</b></li>
              <li>Click <b>continue</b> and <b>agree</b></li>
              <li>Until finally, click <b>install</b></li>
            </ol>
          </div>

          <div v-if="isWindows">
            <h4>Windows Installation Instructions</h4>
            <ol>
              <li>Double click <b>node-v12.18.4-x64.msi</b></li>
              <li>Click <b>next</b>, <b>accept</b> and <b>next</b></li>
              <li>Until finally, click <b>install</b></li>
            </ol>
          </div>
        </details>
      </div>

      <blockquote>
        At this stage, you would have 2 application: Visual Studio Code and Node.js Installed.
      </blockquote>

      <h2>Heartcode Web Dev Project</h2>

      <div v-if="isMac">
        <h4>Open Terminal (MacOS)</h4>

        <ol class="select-none">
          <li>You can open Terminal by using spotlight with this shortcut: <b>&#8984; + SPACE</b></li>
          <li>And typing in <b>Terminal</b> and click the return/enter key.</li>
          <li>Type <span class="code">cd ~/Desktop</span> and click enter.</li>
          <li>Type <span class="code">npm init heartcode-web-dev</span> and click enter.</li>
          <li>The project is now installed in your desktop.</li>
          <li>
            Open the project with Visual Studio Code.
            <img src="@/assets/img/learn/setup/vscode-open-mac.png" alt="Open Project Windows" class="w-1/2">
          </li>
        </ol>
      </div>

      <div v-if="isWindows">
        <h4>Open Command Prompt (Windows)</h4>

        <ol class="select-none">
          <li>You can open Command Prompt with this shortcut: <b>⊞ Win + X</b> followed by <b>C</b></li>
          <li>Type <span class="code">cd Desktop</span> and click enter.</li>
          <li>Type <span class="code">npm config set cache C:\tmp\nodejs\npm-cache --global</span> and click enter.
          </li>
          <li>Type <span class="code">npm init heartcode-web-dev</span> and click enter.</li>
          <li>The project is now installed in your desktop.</li>
          <li>Open the project with Visual Studio Code.
            <img src="@/assets/img/learn/setup/vscode-open-win.png" alt="Open Project Windows" class="w-1/2">
          </li>
        </ol>
      </div>

      <h2>Success!</h2>
      <blockquote>
        You would now have <b>Visual Studio Code</b>, <b>Node.js</b> and the <b>heartcode-web-dev</b> project installed.
      </blockquote>
      <n-link to="/learn">
        <button>Go back to Learn</button>
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
      return navigator.platform.indexOf('Mac') > -1
    },
    isWindows() {
      return navigator.platform.indexOf('Win') > -1
    }
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
</style>
