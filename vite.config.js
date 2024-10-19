import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     // Proxy for Restaurant List API
  //     "/dapi/restaurants/list": {
  //       target: "https://www.swiggy.com",
  //       changeOrigin: true,
  //       rewrite: (path) =>
  //         path.replace(/^\/dapi\/restaurants\/list/, "/dapi/restaurants/list"),
  //     },
  //     // Proxy for Menu API
  //     "/dapi/menu/pl": {
  //       target: "https://www.swiggy.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/dapi\/menu\/pl/, "/dapi/menu/pl"),
  //     },
  //   },
  // },
});
