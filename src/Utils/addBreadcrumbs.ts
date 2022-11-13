import TypePagesItems from '../Models/TypePagesItems'

export default function addBreadcrumbs(
  data: TypePagesItems[],
  path: string,
  arrTree?: TypePagesItems[],
): TypePagesItems[] {
  if (data?.length) {
    const tmpTree: TypePagesItems[] = arrTree ? arrTree : []
    let isLvlPush = false

    data.forEach((el) => {
      if (el.link.toLowerCase() === path.toLowerCase()) {
        tmpTree.push(el)
        return
      } else {
        if (!isLvlPush && el.children?.length) {
          const lengthPrev = tmpTree.length
          const curr = addBreadcrumbs(el.children, path, tmpTree)

          if (lengthPrev !== curr.length) {
            tmpTree.push(el)
            isLvlPush = true
          }
        }
      }
    })

    return tmpTree
  } else {
    return []
  }
}
