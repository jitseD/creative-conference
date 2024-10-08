import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://jitsedekeyser.be",
    base: "/devine/creative-conference",
    image: {
        domains: ["localhost"],
    },
});