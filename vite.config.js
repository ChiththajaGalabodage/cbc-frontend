import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

import dotenv from "dotenv";
dotenv.config();

console.log(process.env.VITE_GOOGLE_CLIENT_ID);
console.log(process.env.VITE_GOOGLE_CLIENT_SECRET);
