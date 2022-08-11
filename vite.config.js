import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig( {
  
    server: {
        proxy: {
            "/foo": "http://localhost:4567",

            "/api": {
                target: "http://iqfarm.herokuapp.com",
                changeOrigin: true,
                secure: false,
                ws: true
            }
        }
    },
    plugins: [react()]
})