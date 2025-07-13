import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // No need to destructure `fileURLToPath` or `dirname` from here
import { fileURLToPath } from 'url'; // Import `fileURLToPath` from 'url'

const __filename = fileURLToPath(import.meta.url); // Get the file name
const __dirname = path.dirname(__filename); // Derive the directory name using `path`

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for `src` directory
    },
  },
});
