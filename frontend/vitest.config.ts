import { defineConfig, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
    test: {
        globals: true,
        coverage: {
            exclude: [...coverageConfigDefaults.exclude, "src/routeTree.gen.ts"],
        },
    },
});