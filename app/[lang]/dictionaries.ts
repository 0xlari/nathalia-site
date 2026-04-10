import pt from "../../messages/pt";
import en from "../../messages/en";
import es from "../../messages/es";

export const dictionaries = {
  pt,
  en,
  es,
};

export function getDictionary(lang: string) {
  if (lang === "en") return dictionaries.en;
  if (lang === "es") return dictionaries.es;
  return dictionaries.pt;
}