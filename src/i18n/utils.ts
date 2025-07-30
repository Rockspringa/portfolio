import { defaultLang, ui } from "@i18n/ui";

export function getRouteFromUrl(url: URL) {
  const [_, ...route] = url.pathname.split("/");
  return route.join("/");
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
  };
}
