import "i18next";
declare module "i18next" {
  interface CustomTypesOptions {
    default: "translation";
    resources: {
      translation: typeof import("../../public/locales/pt/translation.json");
    };
  }
}
