import newsPlaceholder from '../assets/photos/news-placeholder.jpg';

export interface NewsItem {
  title: string;
  tag: string;
  description: string;
  image: string;
  url: string;
}

/**
 * Редактируемый массив новостей — см.
 * docs/reference/Fingold_Light_Rebuild.html, строки 4231-4264.
 * Первые 3 попадают в топ-карточки, остальные — в архив.
 * Поле image: в оригинале каждая новость ссылалась на свой
 * static.tildacdn.com/.../image.png — недоступный извне Tilda
 * (см. issues/errors_states.md). Заменено на общий локальный плейсхолдер;
 * при появлении реальных скринов/фото публикаций — заменить точечно.
 */
export const FG_NEWS: NewsItem[] = [
  {
    title: 'Золото нового цикла: рынок меняет не цену металла, а его роль',
    tag: 'gold.1prime.ru',
    description: 'Автор: Антон Никитин, основатель и генеральный директор компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://gold.1prime.ru/20260623/nikitin-1554261.html',
  },
  {
    title: 'Эксперты ожидают замедления строек на фоне дефицита региональных бюджетов',
    tag: 'abn.agency',
    description: 'Комментирует: Антон Никитин, основатель и генеральный директор компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://abn.agency/2026/06/22/eksperty-ozhidayut-zamedleniya-stroek-na-fone-deficzita-regionalnyh-byudzhetov/',
  },
  {
    title: 'Финансовый SpaceX: как золото перезапустит мировые расчёты',
    tag: 'biz-anatomy.ru',
    description: 'Автор: Антон Никитин, основатель и генеральный директор компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://biz-anatomy.ru/biznes-idei/finansovyy-spacex-kak-zoloto-perezapustit-mirovye-raschety',
  },
  {
    title: 'ЦБ снизил ставку, но российский бизнес не ждёт возвращения дешёвых денег',
    tag: 'incrussia.ru',
    description: 'Комментирует: Антон Никитин, основатель и генеральный директор Fingold',
    image: newsPlaceholder,
    url: 'https://incrussia.ru/news/tsb-snizil-stavku-no-rossijskij-biznes-ne-zhdet-vozvrashheniya-deshevyh-deneg/',
  },
  {
    title: 'Ставку снизят, но дешёвых денег бизнес пока не увидит',
    tag: 'Медиа',
    description: 'Комментирует: Антон Никитин, основатель и генеральный директор Fingold',
    image: newsPlaceholder,
    url: 'https://bankiros.ru/news/stavku-snizat-do-14-no-kredity-desevle-ne-stanut-prognoz-ekspertov-21746',
  },
  {
    title: 'Трансграничные расчёты через агентов: новые реалии и скрытые издержки',
    tag: 'new-retail.ru',
    description: 'Позицию компании раскрывает Антон Никитин, основатель и генеральный директор компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://new-retail.ru/business/ekonomika/transgranichnye_raschety_cherez_agentov_novye_realii_i_skrytye_izderzhki/',
  },
  {
    title: 'Крепкий рубль не спасает кошельки: почему цены продолжают расти?',
    tag: 'msk1.ru',
    description: 'Экспертную позицию представляет Антон Никитин, основатель и генеральный директор компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://msk1.ru/text/economics/2026/06/15/76458937/',
  },
  {
    title: 'Российский рынок золота начинает меняться',
    tag: 'rg.ru',
    description: 'Основатель и гендиректор компании «Финголд» Антон Никитин — о том, почему российский рынок золота начинает меняться.',
    image: newsPlaceholder,
    url: 'https://rg.ru/2026/06/09/reg-szfo/prozrachnost-ne-lozung.html',
  },
  {
    title: 'Small Business Gets a Pause: New Tax Relief Measures May Ease Pressure on SMEs',
    tag: 'iz.ru',
    description: 'Commented by: Anton Nikitin, Founder and CEO of Fingold',
    image: newsPlaceholder,
    url: 'https://iz.ru/en/node/2112206',
  },
  {
    title: 'Новая роль золота в международных расчётах',
    tag: 'РБК Бизнес-среда',
    description: 'Антон Никитин о том, почему золото становится не только защитным активом, но и элементом финансовой инфраструктуры.',
    image: newsPlaceholder,
    url: 'https://nsk.plus.rbc.ru/preview/6a27a4047a8aa9fdaeacfff6',
  },
  {
    title: 'Без торгов: как ЦБ меняет расчёт курса евро и почему это важно для граждан',
    tag: 'forbes.ru',
    description: 'Генеральный директор ООО «Финголд» — о снижении ликвидности евро на российском валютном рынке.',
    image: newsPlaceholder,
    url: 'https://www.forbes.ru/investicii/562578-bez-torgov-kak-cb-menaet-rascet-kursa-evro-i-pocemu-eto-vazno-dla-grazdan',
  },
  {
    title: 'После заморозки порога НДС власти подготовят новые льготы для МСП',
    tag: 'iz.ru',
    description: 'Генеральный директор ООО «Финголд» — о том, как налоговые изменения могут повлиять на малый и средний бизнес.',
    image: newsPlaceholder,
    url: 'https://iz.ru/2112206/olga-anaseva/posle-zamorozki-poroga-nds-vlasti-podgotovyat-novye-lgoty-dlya-msp',
  },
  {
    title: 'Налоговые доначисления выросли на 33%: кого ФНС проверяет в 2026 году',
    tag: 'riamo.ru',
    description: 'Комментирует: эксперт Fingold по налоговым и финансовым рискам бизнеса',
    image: newsPlaceholder,
    url: '#',
  },
  {
    title: 'Частный космос упирается не в идеи, а в капитал: почему «Сколково» снижает риск для инвесторов',
    tag: 'www.comnews.ru',
    description: 'Комментирует: Антон Никитин, основатель и генеральный директор ООО «Финголд»',
    image: newsPlaceholder,
    url: 'https://www.comnews.ru/content/245710/2026-06-08/2026-w24/1008/fond-skolkovo-pomozhet-chastnym-kosmicheskim-kompaniyam',
  },
  {
    title: 'Летом доллар будет стоить в среднем 78 рублей',
    tag: 'iz.ru',
    description: 'Прогноз дал основатель и генеральный директор компании «Финголд» Антон Никитин',
    image: newsPlaceholder,
    url: 'https://iz.ru/2107930/anatolii-tceiko-olga-anaseva/letom-dollar-budet-stoit-v-srednem-78-rublei',
  },
  {
    title: 'Прибыль есть, дивидендов нет: почему энергетические компании остаются дешёвыми для рынка',
    tag: 'kommersant.ru',
    description: 'Комментирует: Антон Никитин, основатель и генеральный директор «Финголд»',
    image: newsPlaceholder,
    url: 'https://www.kommersant.ru/doc/8708182',
  },
  {
    title: '«Финголд» оценил риски для экспорта Армении на фоне сближения с ЕС',
    tag: 'Известия',
    description: 'Экспертную позицию представляет Антон Никитин, основатель и генеральный директор компании',
    image: newsPlaceholder,
    url: 'https://iz.ru/2103419/olga-anaseva/sblizhenie-armenii-s-es-snizit-ee-ehksport-na-tret',
  },
  {
    title: '«Финголд» рассказал, как золото становится частью новой финансовой инфраструктуры',
    tag: 'Monocle',
    description: 'Антон Никитин, основатель и генеральный директор компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://monocle.ru/monocle/2026/22/kak-zoloto-vernulos-v-mezhdunarodnyye-raschety/',
  },
  {
    title: 'Почему инвесторы всё чаще ищут быстрые ответы вместо финансового анализа',
    tag: 'iz.ru',
    description: 'Экспертную позицию представляет Антон Никитин, основатель и генеральный директор компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://iz.ru/2102046/anatolii-tceiko-milana-gadzhieva/na-fondovom-rynke-stali-populyarny-prognozy-po-taro',
  },
  {
    title: 'Золото в трансграничных расчётах',
    tag: 'kommersant.ru',
    description: 'Основатель ООО «Финголд» — Антон Никитин',
    image: newsPlaceholder,
    url: 'https://www.kommersant.ru/doc/8674753',
  },
  {
    title: '«Финголд» объяснил, почему золото стало самым нервным защитным активом года',
    tag: 'BanksToday',
    description: 'С участием эксперта: Антон Никитин, основатель ООО «Финголд»',
    image: newsPlaceholder,
    url: 'https://bankstoday.net/mnenie/zheltyj-zhar-pochemu-rynok-zolota-lihoradit-i-kuda-bezhat-investoru',
  },
  {
    title: '«Финголд» рассказал, как инвестор может заработать на золоте и курсе рубля',
    tag: 'Рамблер Финансы',
    description: 'Позицию компании раскрывает Антон Никитин, основатель и генеральный директор «Финголд»',
    image: newsPlaceholder,
    url: 'https://finance.rambler.ru/money/56484141-dvoynaya-vygoda-rossiyanam-raskryli-preimuschestva-vlozheniy-v-zoloto/',
  },
  {
    title: '«Финголд» объяснил преимущества вложений в золото',
    tag: 'banki.ru',
    description: 'Рынок комментирует Антон Никитин, основатель и генеральный директор «Финголд»',
    image: newsPlaceholder,
    url: 'https://www.banki.ru/news/lenta/?id=11024360',
  },
  {
    title: 'Золото даёт инвесторам двойную защиту: от турбулентности рынков и валютных рисков',
    tag: 'Царьград',
    description: 'Комментирует: генеральный директор «Финголд»',
    image: newsPlaceholder,
    url: 'https://chita.tsargrad.tv/news/nikitin-vlozhenija-v-zoloto-dadut-dvojnuju-vygodu_1700789',
  },
  {
    title: '«Финголд» назвал золото одним из ключевых защитных активов 2026 года',
    tag: 'Bankiros',
    description: 'Антон Никитин, основатель и генеральный директор «Финголд»',
    image: newsPlaceholder,
    url: 'https://bankiros.ru/news/ekspert-nazval-aktiv-kotoryj-mozet-prinesti-rossianam-dvojnuu-pribyl-v-2026-godu-21502',
  },
  {
    title: '«Финголд» ожидает рост золота до $6070 за унцию',
    tag: 'gold.1prime.ru',
    description: 'Спикер: Антон Никитин, генеральный директор ООО «Финголд»',
    image: newsPlaceholder,
    url: 'https://gold.1prime.ru/20260521/nikitin-1432754.html',
  },
  {
    title: 'Парадокс российского золота: экспорт поощряют, импорт запрещают',
    tag: 'klerk.ru',
    description: 'Антон Никитин, основатель и генеральный директор компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://www.klerk.ru/buh/articles/692270/',
  },
  {
    title: 'Сильный рубль — временное явление? Что будет с курсом дальше',
    tag: '78.ru',
    description: 'Генеральный директор ООО «Финголд» о причинах укрепления рубля и рисках для инвесторов.',
    image: newsPlaceholder,
    url: 'https://78.ru/articles/2026-05-19/nazad-v-2014i-pochemu-rubl-beret-novie-visoti-i-chto-s-nim-sdelat-poka-ne-upal',
  },
  {
    title: '«Золото — это зеркало»: почему драгоценный металл не используют для прозрачности валютного рынка России',
    tag: 'Finversia',
    description: 'Антон Никитин — об истинной роли золота в российской финансовой системе',
    image: newsPlaceholder,
    url: 'https://www.finversia.ru/publication/experts/zoloto-eto-zerkalo-pochemu-dragotsennyi-metall-ne-ispolzuyut-dlya-prozrachnosti-valyutnogo-rynka-rossii-170095',
  },
  {
    title: 'Названы последствия введения налога на сверхдоходы золотодобытчиков',
    tag: '1prime.ru',
    description: 'Основатель «ФИНГОЛД» о цене на драгметаллы',
    image: newsPlaceholder,
    url: 'https://1prime.ru/20260506/sverkhdokhody-869680207.html',
  },
  {
    title: 'Платежи за границу через агентов заняли более половины рынка',
    tag: 'iz.ru',
    description: 'Российские компании существенно увеличили объём расчётов через агентов',
    image: newsPlaceholder,
    url: 'https://iz.ru/2091055/2026-05-05/platezhi-za-granitcu-cherez-agentov-zaniali-bolee-poloviny-rynka',
  },
  {
    title: 'Почему растёт рынок биржевой торговли золотом',
    tag: 'РБК',
    description: 'РБК в интервью с генеральным директором компании «Финголд»',
    image: newsPlaceholder,
    url: 'https://nsk.plus.rbc.ru/news/69eb1d4f7a8aa9b2249f0ed4',
  },
];
