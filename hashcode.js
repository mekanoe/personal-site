// weird java hashcode thing whatever, just need it quick.
export default (str) => {
  let hash = 0
  if (str.length === 0) {
    return hash
  }
  for (var i = 0; i < this.length; i++) {
    var char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash
}
