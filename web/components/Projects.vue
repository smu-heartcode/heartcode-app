<template>
  <div>
    <div class="flex flex-wrap justify-center -m-3">
      <div v-for="project in projects" :key="project.url"
           class="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
        <a :href="project.url" target="_blank">

          <div class="bg-gray-300 h-full rounded overflow-hidden hover:bg-gray-400 hover:shadow-xl cursor-pointer">
            <div class="h-full flex flex-col">

              <div class="px-4 py-6 bg-gray-800 text-white">
                <h4 class="text-center text-2xl font-bold">{{ project.name }}</h4>
              </div>

              <div class="px-4 py-2 flex justify-end items-center">
                <div>
                  <h6 class="text-gray-900 font-medium text-sm text-right">{{ project.mentor }}</h6>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {name: "Lim Jing Run", mentor: "Lee Shuoan", url: "https://jingrun.heartcode.app"},
        {name: "Benjamin Chan", mentor: "Maurice Lim", url: "https://jxamxng.heartcode.app"},
        {name: "Yeo Zhe Wei", mentor: "Aaron Tan Yi En", url: "https://yeozhewei.heartcode.app"},
        {name: "Cheryl", mentor: "Lim Yin Shan", url: "https://cheryl.heartcode.app"},
        {name: "Goh Jun You", mentor: "Lee Yi Hao", url: "https://gohjunyou.heartcode.app"},
        {name: "Hui Ning Sherpa", mentor: "Siti Hindun", url: "https://huining.heartcode.app"},
        {name: "Hana Chua", mentor: "Edena Teo", url: "https://hanachua.heartcode.app"},
        {name: "Sharlotte", mentor: "Teh Xue Er", url: "https://sharlotte.heartcode.app"},
        {name: "Lim Li Xuan", mentor: "Esther Teo Min", url: "https://lixuan.heartcode.app"},
        {name: "Guan Jiahong", mentor: "Choon Wing Kit Sean", url: "https://jiahong.heartcode.app"},
        {name: "Wesley Tan", mentor: "Jerriel Loo", url: "https://wesley.heartcode.app"},
        {name: "Ong Yuki", mentor: "Seah Li Ping Megan", url: "https://yuki.heartcode.app"},
        {name: "Lim Wee Hong", mentor: "Paul Soh Wei Jie", url: "https://weehong.heartcode.app"},
        {name: "Choo Liang Rong", mentor: "Darryl Kwok", url: "https://chooliangrong.heartcode.app"},
        {name: "Lim Hui Ting", mentor: "Rusydiah Binte Rosle", url: "https://huiting.heartcode.app"},
        {name: "Jing Han", mentor: "Sylvia", url: "https://jinghan.heartcode.app"},
        {name: "Loke Jet Yoong", mentor: "Cheow Tian Le", url: "https://jetyoong.heartcode.app"},
        {name: "Chua Ee Teng", mentor: "Ow Ling Jia ", url: "https://eeteng.heartcode.app"},
        {name: "Diyana", mentor: "Nolin Ho", url: "https://ddididiyana.heartcode.app"},
      ]
    }
  }
}
</script>
