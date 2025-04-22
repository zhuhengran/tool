const stringUtils = {
  fieldMapping2(jsonArray, fieldMappers) {
    var a = []
    for (var i = 0; i < jsonArray.length; i++) {
      var b = {}
      var json = jsonArray[i]

      for (var key in fieldMappers) {
        if (Object.prototype.hasOwnProperty.call(json, key)) {
          b[fieldMappers[key]] = json[key]
        }
      }

      if (Object.keys(b).length > 0) {
        a.push(b)
      }
    }
    return a
  },
  reverseMapping(fieldMappers) {
    const a = {}
    for (const key in fieldMappers) {
      a[fieldMappers[key]] = key
    }
    return a
  },
  // 字符串转字符流
  s2ab(s) {
    if (typeof ArrayBuffer !== 'undefined') {
      const buf = new ArrayBuffer(s.length)
      const view = new Uint8Array(buf)
      for (let i = 0; i < s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xff
      }
      return buf
    } else {
      const buf = []
      for (let j = 0; j < s.length; ++j) {
        buf.push(s.charCodeAt(j) & 0xff)
      }
      return buf
    }
  }
}

export default stringUtils
