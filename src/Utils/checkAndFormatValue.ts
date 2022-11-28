/**
 * Возращает форматированное число или прочерк
 * @param value
 * @param indFraction
 * @param options
 */
export default function checkAndFormatValue(
  value: number | null | undefined,
  indFraction?: number,
  options?: {
    withOutRound?: boolean
    noDash?: boolean
    withOutMinimumFraction?: boolean
    miniDash?: boolean
  },
) {
  if (value === null || value === undefined)
    return options?.noDash ? '' : options?.miniDash ? '-' : '—'

  let formattedValue: string = options?.withOutRound
    ? value.toLocaleString('ru')
    : Math.round(value).toLocaleString('ru')

  if (indFraction) {
    formattedValue = (
      Math.round(value * Math.pow(10, indFraction)) / Math.pow(10, indFraction)
    ).toLocaleString('ru', {
      minimumFractionDigits: options?.withOutMinimumFraction
        ? undefined
        : indFraction,
    })
  }

  return formattedValue
}
