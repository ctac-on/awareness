type TOptions = Intl.NumberFormatOptions & {
  /** Флаг - отключает замену запятой на точку в дробных значениях */
  dontReplaceCommaToDot?: boolean;
};

/**
 * Утилита для форматирования числа в строку с помощью Internationalization API
 *
 * @param number - число для форматирования
 * @param options - опции Internationalization API NumberFormatOptions
 *
 * @return строку или null если число равно (null | undefined)
 * */
const numberFormat = (
  number?: number | null,
  options?: TOptions,
): string | null => {
  if (number !== null && number !== undefined) {
    const formattedNumber = new Intl.NumberFormat('ru-RU', options).format(
      number,
    );

    if (!options?.dontReplaceCommaToDot) {
      return formattedNumber.replace(/,/g, '.');
    }

    return formattedNumber;
  }

  return null;
};

export default numberFormat;
