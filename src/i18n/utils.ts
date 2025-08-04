import { defaultLang, ui } from "@i18n/ui";

export function getRouteFromUrl(url: URL) {
  return url.pathname.split("/").splice(2).join("/");
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof lang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}
