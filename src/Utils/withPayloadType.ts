/**
 * Типизируем payload для action
 */

export default function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}
