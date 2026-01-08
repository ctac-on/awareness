type TParams = {
  /** Алфавитный iso код валюты */
  alphaCodeISOCurrency?: string | null;

  /** Числовой iso код валюты */
  numericCodeISOCurrency?: string | null | number;

  /** Внутренний код валюты. Deprecated */
  internalIdCurrency?: number | null;
};

type TCurrencyRef = {
  /** Иконка в юникоде */
  icon: string;

  /** Алфавитный iso код */
  alphaCodeISO: string;

  /** Числовой iso код в виде строки */
  numericCodeISO: string;

  /** Внутренний код. Deprecated */
  internalId?: number;
};

const currencyRefs: Array<TCurrencyRef> = [
  // Российский рубль
  {
    icon: '\u20bd',
    alphaCodeISO: 'RUB',
    numericCodeISO: '643',
    internalId: 1,
  },
  // Китайский юань
  {
    icon: '\u04b0',
    alphaCodeISO: 'CNY',
    numericCodeISO: '156',
    internalId: 2,
  },
  // Турецкая лира
  {
    icon: '\u20BA',
    alphaCodeISO: 'TRY',
    numericCodeISO: '949',
    internalId: 3,
  },
  // Азербайджанский манат
  {
    icon: '\u20BC',
    alphaCodeISO: 'AZN',
    numericCodeISO: '944',
    internalId: 4,
  },
  // Армянский драм
  {
    icon: '\u058F',
    alphaCodeISO: 'AMD',
    numericCodeISO: '051',
    internalId: 5,
  },
  // Белорусский рубль
  {
    icon: 'Br',
    alphaCodeISO: 'BYN',
    numericCodeISO: '933',
    internalId: 6,
  },
  // Казахстанский тенге
  {
    icon: '\u20B8',
    alphaCodeISO: 'KZT',
    numericCodeISO: '398',
    internalId: 7,
  },
  // Киргизский сом
  {
    icon: '\u20C0',
    alphaCodeISO: 'KGS',
    numericCodeISO: '417',
    internalId: 8,
  },
  // Молдавский лей
  {
    icon: 'L',
    alphaCodeISO: 'MDL',
    numericCodeISO: '498',
    internalId: 9,
  },
  // Таджикский сомони
  {
    icon: 'с',
    alphaCodeISO: 'TJS',
    numericCodeISO: '972',
    internalId: 10,
  },
  // Туркменский манат
  {
    icon: 'T',
    alphaCodeISO: 'TMT',
    numericCodeISO: '934',
    internalId: 11,
  },
  // Узбекский сум
  {
    icon: 'So’m',
    alphaCodeISO: 'UZS',
    numericCodeISO: '860',
    internalId: 12,
  },
  // Дирхам ОАЭ
  {
    icon: 'Dh',
    alphaCodeISO: 'AED',
    numericCodeISO: '784',
    internalId: 13,
  },
  // Доллар США
  {
    icon: '\u0024',
    alphaCodeISO: 'USD',
    numericCodeISO: '840',
    internalId: 14,
  },
  // Евро
  {
    icon: '\u20AC',
    alphaCodeISO: 'EUR',
    numericCodeISO: '978',
    internalId: 15,
  },
  // Грузинский лари
  {
    icon: '\u20BE',
    alphaCodeISO: 'GEL',
    numericCodeISO: '981',
    internalId: 16,
  },
  // Британский фунт
  {
    icon: '\uFFE1',
    alphaCodeISO: 'GBP',
    numericCodeISO: '826',
  },
  // Украинская гривна
  {
    icon: '\u20B4',
    alphaCodeISO: 'UAH',
    numericCodeISO: '980',
  },
  // Польский злотый
  {
    icon: 'Zł',
    alphaCodeISO: 'PLN',
    numericCodeISO: '985',
  },
];

type TMaps = {
  alphaCodeISOIconMap: Record<string, string>;
  numericCodeISOIconMap: Record<string, string>;
  internalIdIconMap: Record<number, string>;
};

const { alphaCodeISOIconMap, internalIdIconMap, numericCodeISOIconMap } =
  currencyRefs.reduce(
    (accumulator, { alphaCodeISO, numericCodeISO, internalId, icon }) => {
      accumulator.alphaCodeISOIconMap[alphaCodeISO] = icon;
      accumulator.numericCodeISOIconMap[numericCodeISO] = icon;

      if (internalId !== undefined) {
        accumulator.internalIdIconMap[internalId] = icon;
      }

      return accumulator;
    },
    {
      alphaCodeISOIconMap: {},
      internalIdIconMap: {},
      numericCodeISOIconMap: {},
    } as TMaps,
  );

/**
 * Утилита для получения символа валюты по алфавитному/числовому ISO коду валюты
 * или внутреннему id коду. Приоритет мапинга параметров с иконками
 *  1 приоритет alphaCodeISOCurrency
 *  2 приоритет numericCodeISOCurrency
 *  3 приоритет internalIdCurrency
 *
 * @param params - параметры функции {@link TParams}
 *  @param params.alphaCodeISOCurrency - {@link alphaCodeISOCurrency}
 *  @param params.numericCodeISOCurrency - {@link numericCodeISOCurrency}
 *  @param params.internalIdCurrency - {@link internalIdCurrency}
 * @return возвращает один из символов валюты либо пустую строку
 * */
const getCurrencyIcon = ({
  internalIdCurrency,
  alphaCodeISOCurrency,
  numericCodeISOCurrency,
}: TParams): string => {
  if (alphaCodeISOCurrency) {
    const key = alphaCodeISOCurrency.toUpperCase().trim();

    return alphaCodeISOIconMap[key] ?? '';
  }

  if (numericCodeISOCurrency !== undefined && numericCodeISOCurrency !== null) {
    const key = numericCodeISOCurrency.toString().trim();

    return numericCodeISOIconMap[key] ?? '';
  }

  if (internalIdCurrency !== undefined && internalIdCurrency !== null) {
    return internalIdIconMap[internalIdCurrency] ?? '';
  }

  return '';
};

export default getCurrencyIcon;
