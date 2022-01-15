const hashString = (toHash: string): number => {
  // hash code pulled from
  // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
  let hash = 0
  if (toHash.length === 0) return hash as number
  for (let i = 0; i < toHash.length; i += 1) {
    const chr = toHash.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash as number
}

class UrlMap<T> {
  hashMap: { [key: string]: T } = {}

  setItem(key: string, value: T): string {
    const hash = hashString(key)
    this.hashMap[hash.toString()] = value
    return hash.toString()
  }

  getItem(key: string): T {
    return this.hashMap[key]
  }
}

export default UrlMap
