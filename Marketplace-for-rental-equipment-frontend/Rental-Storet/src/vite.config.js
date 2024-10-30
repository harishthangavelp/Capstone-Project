import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    assetsInclude: ['**/*.html'],
    plugins: [react()],
    server: {
        proxy: {
            '/create-checkout-session': 'http://localhost:3000', // Adjust as needed
        },
    },
});
