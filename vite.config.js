import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],

  // add for mobile use 

    server: {
    host: '0.0.0.0',   // <-- Allow LAN access
    port: 3000         // <-- Optional: default is 5173, set 3000 for familiarity
  }

})
