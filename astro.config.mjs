import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    public: {
        MS_CLARITY_PROJECT_ID: envField.string({ context: "client", access: "public", optional: false }),
    },
});
