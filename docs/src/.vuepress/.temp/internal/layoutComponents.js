import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/gby/Documents/Git/own-npm/vue-with-keep-alive/docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/gby/Documents/Git/own-npm/vue-with-keep-alive/docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
