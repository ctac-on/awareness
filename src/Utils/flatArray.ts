/**
 * Получаем одномерный массив элементов из многомерного
 * @param arrData
 * @param keyArrDataChildren
 */

export default function flatArray<T extends object, U extends keyof T>(
  arrData: T[],
  keyArrDataChildren: U,
): T[] {
  if (arrData?.length) {
    return arrData.flatMap((el) => {
      let arrChild: T[] = []
      const tmpElement = el?.[keyArrDataChildren] as unknown
      const childData: T[] = Array.isArray(tmpElement) ? tmpElement : []

      if (childData?.length) {
        arrChild = flatArray(childData, keyArrDataChildren)

        return [el, ...arrChild]
      }

      return [el]
    })
  } else {
    return []
  }
}
