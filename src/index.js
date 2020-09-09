module.exports = function check(str, bracketsConfig) {
  let obj = {}
  bracketsConfig.forEach((item, i) => obj[i] = item.join(''))
  for(let i = 0; i < str.length; i+=1) {
    if(str.includes(obj[i])) {
      str = str.replace(obj[i], '')
      i = -1
    }
  }
  return !str ? true : false
}
