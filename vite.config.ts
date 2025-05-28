
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'




export default defineConfig({
  plugins: [
    // https://vite.dev/config/
    vue(),
    // https://devtools.vuejs.org/guide/vite-plugin  
    // 项目使用Vite，强烈建议使用它作为运行DevTools的首选选项，因为它提供了更强大的功能。
    vueDevTools(),
  ],
})



// 用法
//  Configuration Vite( vite.config.ts )

// import { defineConfig } from 'vite'
// import vueDevTools from 'vite-plugin-vue-devtools'

// export default defineConfig({
//   plugins: [
//     vueDevTools(),
//   ],
// })