// Adapted Default UI strings from Pagefind 1.5.2 (MIT): https://github.com/Pagefind/pagefind
// Supply them explicitly because the npm bundle omits its language-detection mount hook.
const translations: Record<string, Record<string, string>> = {
  "en": {
    "language": "en",
    "placeholder": "Search",
    "clear_search": "Clear",
    "load_more": "Load more results",
    "search_label": "Search this site",
    "filters_label": "Filters",
    "zero_results": "No results for [SEARCH_TERM]",
    "many_results": "[COUNT] results for [SEARCH_TERM]",
    "one_result": "[COUNT] result for [SEARCH_TERM]",
    "searching": "Searching for [SEARCH_TERM]..."
  },
  "de": {
    "language": "de",
    "placeholder": "Suche",
    "clear_search": "Löschen",
    "load_more": "Mehr Ergebnisse laden",
    "search_label": "Suche diese Seite",
    "filters_label": "Filter",
    "zero_results": "Keine Ergebnisse für [SEARCH_TERM]",
    "many_results": "[COUNT] Ergebnisse für [SEARCH_TERM]",
    "one_result": "[COUNT] Ergebnis für [SEARCH_TERM]",
    "searching": "Suche nach [SEARCH_TERM] …"
  },
  "es": {
    "language": "es",
    "placeholder": "Buscar",
    "clear_search": "Limpiar",
    "load_more": "Ver más resultados",
    "search_label": "Buscar en este sitio",
    "filters_label": "Filtros",
    "zero_results": "No se encontraron resultados para [SEARCH_TERM]",
    "many_results": "[COUNT] resultados encontrados para [SEARCH_TERM]",
    "one_result": "[COUNT] resultado encontrado para [SEARCH_TERM]",
    "searching": "Buscando [SEARCH_TERM]..."
  },
  "fr": {
    "language": "fr",
    "placeholder": "Rechercher",
    "clear_search": "Effacer",
    "load_more": "Charger plus de résultats",
    "search_label": "Recherche sur ce site",
    "filters_label": "Filtres",
    "zero_results": "Pas de résultat pour [SEARCH_TERM]",
    "many_results": "[COUNT] résultats pour [SEARCH_TERM]",
    "one_result": "[COUNT] résultat pour [SEARCH_TERM]",
    "searching": "Recherche [SEARCH_TERM]..."
  },
  "ru": {
    "language": "ru",
    "placeholder": "Поиск",
    "clear_search": "Очистить поле",
    "load_more": "Загрузить еще",
    "search_label": "Поиск по сайту",
    "filters_label": "Фильтры",
    "zero_results": "Ничего не найдено по запросу: [SEARCH_TERM]",
    "many_results": "[COUNT] результатов по запросу: [SEARCH_TERM]",
    "one_result": "[COUNT] результат по запросу: [SEARCH_TERM]",
    "searching": "Поиск по запросу: [SEARCH_TERM]"
  },
  "pt-BR": {
    "language": "pt-BR",
    "placeholder": "Pesquisar",
    "clear_search": "Limpar",
    "load_more": "Ver mais resultados",
    "search_label": "Pesquisar",
    "filters_label": "Filtros",
    "zero_results": "Nenhum resultado encontrado para [SEARCH_TERM]",
    "many_results": "[COUNT] resultados encontrados para [SEARCH_TERM]",
    "one_result": "[COUNT] resultado encontrado para [SEARCH_TERM]",
    "searching": "Pesquisando por [SEARCH_TERM]..."
  },
  "hu": {
    "language": "hu",
    "placeholder": "Keresés",
    "clear_search": "Törlés",
    "load_more": "További találatok betöltése",
    "search_label": "Keresés az oldalon",
    "filters_label": "Szűrés",
    "zero_results": "Nincs találat a(z) [SEARCH_TERM] kifejezésre",
    "many_results": "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre",
    "one_result": "[COUNT] db találat a(z) [SEARCH_TERM] kifejezésre",
    "searching": "Keresés a(z) [SEARCH_TERM] kifejezésre..."
  },
  "it": {
    "language": "it",
    "placeholder": "Cerca",
    "clear_search": "Cancella la ricerca",
    "load_more": "Mostra più risultati",
    "search_label": "Cerca nel sito",
    "filters_label": "Filtri di ricerca",
    "zero_results": "Nessun risultato per [SEARCH_TERM]",
    "many_results": "[COUNT] risultati per [SEARCH_TERM]",
    "one_result": "[COUNT] risultato per [SEARCH_TERM]",
    "searching": "Cercando [SEARCH_TERM]..."
  },
  "tr": {
    "language": "tr",
    "placeholder": "Ara",
    "clear_search": "Temizle",
    "load_more": "Daha fazla sonuç",
    "search_label": "Site genelinde arama",
    "filters_label": "Filtreler",
    "zero_results": "[SEARCH_TERM] için sonuç yok",
    "many_results": "[SEARCH_TERM] için [COUNT] sonuç bulundu",
    "one_result": "[SEARCH_TERM] için [COUNT] sonuç bulundu",
    "searching": "[SEARCH_TERM] aranıyor…"
  },
  "zh-CN": {
    "language": "zh-CN",
    "placeholder": "搜索",
    "clear_search": "清除",
    "load_more": "加载更多结果",
    "search_label": "站内搜索",
    "filters_label": "筛选",
    "zero_results": "未找到 [SEARCH_TERM] 的相关结果",
    "many_results": "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
    "one_result": "找到 [COUNT] 个 [SEARCH_TERM] 的相关结果",
    "searching": "正在搜索 [SEARCH_TERM]..."
  },
  "pt-PT": {
    "language": "pt-PT",
    "placeholder": "Pesquisar",
    "clear_search": "Limpar",
    "load_more": "Ver mais resultados",
    "search_label": "Pesquisar",
    "filters_label": "Filtros",
    "zero_results": "Nenhum resultado encontrado para [SEARCH_TERM]",
    "many_results": "[COUNT] resultados encontrados para [SEARCH_TERM]",
    "one_result": "[COUNT] resultado encontrado para [SEARCH_TERM]",
    "searching": "A pesquisar por [SEARCH_TERM]…"
  }
}

export function pagefindLabels(language: string): Record<string, string> {
  return translations[language] ?? translations.en
}
