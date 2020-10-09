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

      <operating-system-options class="mt-4"
                                windows="https://aka.ms/win32-user-stable"
                                mac="https://go.microsoft.com/fwlink/?LinkID=620882"
      />

      <operating-system-content>
        <template v-slot:mac>
          <h4>Mac Installation Instructions</h4>
          <ol>
            <li>Open to unzip <b>VSCode-darwin-stable.zip</b></li>
            <li>Move <b>Visual Studio Code</b> into application folder</li>
            <li>Open <b>Visual Studio Code</b></li>
          </ol>
        </template>

        <template v-slot:win>
          <h4>Windows Installation Instructions</h4>
          <ol>
            <li>Double click <b>VSCodeUserSetup-x64-1.49.2.exe</b></li>
            <li>Select I accept the agreement and click <b>next</b></li>
            <li>Click <b>next</b> on each step</li>
            <li>And finally, click <b>Install</b></li>
            <li>Click <b>finish</b> with Launch Visual Studio Code checked</li>
          </ol>
        </template>
      </operating-system-content>

      <h2>Node.js</h2>

      <operating-system-options class="mt-4"
                                windows="https://nodejs.org/dist/v12.18.4/node-v12.18.4-x86.msi"
                                mac="https://nodejs.org/dist/v12.18.4/node-v12.18.4.pkg"
      />

      <operating-system-content>
        <template v-slot:mac>
          <h4>Mac Installation Instructions</h4>
          <ol>
            <li>Open to <b>node-v12.18.4.pkg</b></li>
            <li>Click <b>continue</b> and <b>agree</b> to everything</li>
            <li>And finally, click <b>install</b></li>
          </ol>
        </template>

        <template v-slot:win>
          <h4>Windows Installation Instructions</h4>
          <ol>
            <li>Double click <b>node-v12.18.4-x64.msi</b></li>
            <li>Click <b>next</b>, <b>accept</b> and <b>next</b></li>
            <li>And finally, click <b>install</b></li>
          </ol>
        </template>
      </operating-system-content>

      <blockquote>
        At this stage, you would have 2 application: Visual Studio Code and Node.js Installed.
      </blockquote>

      <h2>Setting up Heartcode Web Dev Project</h2>

      <operating-system-content>
        <template v-slot:mac>
          <h4>Open Terminal (MacOS)</h4>

          <ol class="select-none">
            <li>You can open Terminal by using spotlight with this shortcut: <b>&#8984; + SPACE</b></li>
            <li>And type <b>Terminal</b> in the text field and click enter.</li>
            <li>Type <span class="code">cd ~/Desktop</span> in Terminal and click enter.</li>
            <li>Type <span class="code">npm init heartcode-web-dev</span> in Terminal and click enter.</li>
            <li>The installer will prompt for a <b>username</b>, you can enter your first name in lowercase without
              space.
              (e.g. ben)
            </li>
            <li>The installer will prompt for a <b>password</b>, the password will be given to you in class.</li>
            <li>The project is now installed in your desktop.</li>
          </ol>
        </template>

        <template v-slot:win>
          <h4>Open Command Prompt (Windows)</h4>

          <ol class="select-none">
            <li>You can open Command Prompt with this shortcut: <b>⊞ Win + X</b> followed by <b>C</b></li>
            <li>Type <span class="code">npm config set cache C:\tmp\nodejs\npm-cache --global</span> and click enter.

            <li>
              Type <span class="code">cd Desktop</span> and click enter.
              <ul>
                <li>
                  <small>
                    If you encounter this error:
                    <span class="error-code">The system cannot find the path specified.</span>
                  </small>
                </li>
                <li>
                  <small>You can ignore this step and use your current directory.</small>
                </li>
              </ul>
            </li>

            <li>Type <span class="code">npm init heartcode-web-dev</span> and click enter.</li>
            <li>The installer will prompt for a <b>username</b>, you can enter your first name in lowercase without
              space.
              (e.g. ben)
            </li>
            <li>The installer will prompt for a <b>password</b>, the password will be given to you in class.</li>
            <li>The project is now installed in your current directory.</li>
          </ol>
        </template>
      </operating-system-content>

      <h2>Setting up for Development</h2>

      <operating-system-content>
        <template v-slot:mac>
          <h4>Open Visual Studio Code (MacOS)</h4>

          <ol class="select-none">
            <li>Open Visual Studio Code</li>
            <li>
              Click <b>Open...</b> and find `heartcode-web-dev` folder in your Desktop.
              <img src="@/assets/img/learn/setup/vscode-open-mac.png" alt="Open Project MacOS" class="w-1/2">
            </li>


            <li>
              Open terminal in Visual Studio Code.
              <img src="@/assets/img/learn/setup/vscode-terminal-mac.png" alt="Open VS Code Terminal MacOS"
                   class="w-1/2">
            </li>

            <li>
              Type <span class="code">npm run dev</span> and click enter to run the project.
              <img src="@/assets/img/learn/setup/vscode-terminal-open-mac.png" alt="Npm Run Dev MacOS" class="w-1/2">
            </li>
            <li>
              The project is setup for development!
              You can visit <a target="_blank" href="http://localhost:3000">localhost:3000</a> to try it out yourself.
            </li>
          </ol>
        </template>

        <template v-slot:win>
          <h4>Open Visual Studio Code (Windows)</h4>

          <ol class="select-none">
            <li>Open Visual Studio Code</li>
            <li>
              Click <b>Open Folder...</b> and find `heartcode-web-dev` folder in your Desktop.
              <img src="@/assets/img/learn/setup/vscode-open-win.png" alt="Open Project Windows" class="w-1/2">
            </li>

            <li>
              Open terminal in Visual Studio Code.
              <img src="@/assets/img/learn/setup/vscode-terminal-win.png" alt="Open VS Code Terminal Windows"
                   class="w-1/2">
            </li>

            <li>
              Type <span class="code">npm run dev</span> and click enter to run the project.
              <img src="@/assets/img/learn/setup/vscode-terminal-open-win.png" alt="Npm Run Dev Windows" class="w-1/2">
            </li>
            <li>
              The project is setup for development!
              You can visit <a target="_blank" href="http://localhost:3000">localhost:3000</a> to try it out yourself.
            </li>
          </ol>
        </template>
      </operating-system-content>

      <h2>Success!</h2>
      <blockquote>
        You would now have <b>Visual Studio Code</b>, <b>Node.js</b> and the <b>heartcode-web-dev</b> project installed.
      </blockquote>
      <n-link to="/learn">
        Go back to /learn
      </n-link>
    </article>
  </div>
</template>

<script>
import OperatingSystemOptions from "@/components/learn/setup/OperatingSystemOptions";
import OperatingSystemContent from "@/components/learn/setup/OperatingSystemContent";

export default {
  components: {OperatingSystemContent, OperatingSystemOptions},
  async asyncData({$content}) {
    const page = await $content('learn/setup/installation').fetch()

    return {
      page
    }
  },
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
