import {
  defineNuxtModule,
  createResolver,
  addTemplate,
  useLogger,
} from "@nuxt/kit";
import defu from "defu";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "mm-cron",
    configKey: "mmCron",
    compatibility: {
      nuxt: "^3.4.0",
    },
  },
  defaults: {
    addPlugin: false,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const log = useLogger();

    nuxt.hook("nitro:config", (nitroConfig) => {
      nitroConfig.alias = nitroConfig.alias || {};
      nitroConfig.externals = defu(
        typeof nitroConfig.externals === "object" ? nitroConfig.externals : {},
        {
          inline: [resolve("./runtime")],
        }
      );
      nitroConfig.alias["#mmCron"] = resolve("./runtime");

      log.info("mm-cron: nitro config updated");
    });

    addTemplate({
      filename: "types/mmCron.d.ts",
      getContents: () =>
        [
          "declare module '#mmCron' {",
          `  const useCron: typeof import('${resolve("./runtime")}').useCron`,
          "}",
        ].join("\n"),
    });

    nuxt.hook("prepare:types", (options) => {
      options.references.push({
        path: resolve(nuxt.options.buildDir, "types/mmCron.d.ts"),
      });

      log.info("mm-cron: types prepared");
    });
  },
});
