// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/HSL/Desktop/s-ui/node_modules/.pnpm/registry.npmmirror.com+vite@4.0.0_@types+node@18.11.12/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/HSL/Desktop/s-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue@4.0.0_vite@4.0.0_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///C:/Users/HSL/Desktop/s-ui/node_modules/.pnpm/registry.npmmirror.com+@vitejs+plugin-vue-jsx@3.0.0_vite@4.0.0_vue@3.3.4/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslint from "file:///C:/Users/HSL/Desktop/s-ui/node_modules/.pnpm/registry.npmmirror.com+vite-plugin-eslint@1.8.1_eslint@8.22.0_vite@4.0.0/node_modules/vite-plugin-eslint/dist/index.mjs";
import VueMacros from "file:///C:/Users/HSL/Desktop/s-ui/node_modules/.pnpm/registry.npmmirror.com+unplugin-vue-macros@1.8.1_vite@4.0.0_vue@3.3.4/node_modules/unplugin-vue-macros/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/HSL/Desktop/s-ui/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx()
      }
    }),
    eslint()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./packages", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIU0xcXFxcRGVza3RvcFxcXFxzLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIU0xcXFxcRGVza3RvcFxcXFxzLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9IU0wvRGVza3RvcC9zLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBlc2xpbnQgZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50J1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFZ1ZU1hY3Jvcy52aXRlKHtcbiAgICAgIHBsdWdpbnM6IHtcbiAgICAgICAgdnVlOiB2dWUoKSxcbiAgICAgICAgdnVlSnN4OiB2dWVKc3goKSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgZXNsaW50KClcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9wYWNrYWdlcycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1USxTQUFTLGVBQWUsV0FBVztBQUUxUyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sWUFBWTtBQUNuQixPQUFPLGVBQWU7QUFONkksSUFBTSwyQ0FBMkM7QUFTcE4sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVSxLQUFLO0FBQUEsTUFDYixTQUFTO0FBQUEsUUFDUCxLQUFLLElBQUk7QUFBQSxRQUNULFFBQVEsT0FBTztBQUFBLE1BQ2pCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxjQUFjLHdDQUFlLENBQUM7QUFBQSxJQUMzRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
