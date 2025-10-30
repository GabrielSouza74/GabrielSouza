import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/GabrielSouza/', // 👈 nome exato do seu repositório
    plugins: [react()],
    optimizeDeps: {
        exclude: ['lucide-react'],
    },
});
