import XLSX from 'xlsx'
import XLSXStyle from 'xlsx-style'
import stringUtils from './stringUtils'
import FileSaver from 'file-saver'
import _ from 'lodash'
export default {
  install(Vue) {
    Vue.prototype.$makeExcel = function(info, field_mapping, excelName, colIndexList) {
      console.log(info, '导出数据')
      const defaultCellStyle = {
        font: { name: '宋体' }
      }
      const wopts = {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary',
        defaultCellStyle: defaultCellStyle,
        showGridLines: false
      }
      const wb = { SheetNames: [excelName], Sheets: {}, Props: {}}
      const ws = XLSX.utils.json_to_sheet(
        stringUtils.fieldMapping2(info, stringUtils.reverseMapping(field_mapping))
      )
      const objLen = Object.keys(field_mapping).length
      const dColIndexList = colIndexList !== null && colIndexList !== undefined ? [] : _.cloneDeep(colIndexList)
      // 设置单元格属性
      Object.keys(ws).forEach((key, index) => {
        if (key.indexOf('!') === -1 && typeof ws[key] !== 'string') {
          if (key.match(/\d+/g).join('') === '1') {
            ws[key].s = {
              border: {
                top: {
                  style: 'thin'
                },
                bottom: {
                  style: 'thin'
                },
                left: {
                  style: 'thin'
                },
                right: {
                  style: 'thin'
                }
              },
              fill: { // 设置背景色
                fgColor: { rgb: 'FFFF00' }
              }
            }
          } else {
            ws[key].s = {
              border: {
                top: {
                  style: 'thin'
                },
                bottom: {
                  style: 'thin'
                },
                left: {
                  style: 'thin'
                },
                right: {
                  style: 'thin'
                }
              }
            }
            if (ws[key].v === null || ws[key].v === undefined) {
              ws[key].v = ''
            }
          }
        }
        if (key.indexOf('!') === -1 && dColIndexList.indexOf(index) !== -1 && Object.keys(field_mapping).indexOf(ws[key].v) === -1) {
          ws[key].t = 'n'
        }
        if (dColIndexList.indexOf(index) !== -1) {
          dColIndexList.filter((t, i) => {
            if (t === index) {
              t += objLen
              this.$set(dColIndexList, i, t)
            }
          })
        }
      })
      wb.Sheets[excelName] = ws

      // 创建二进制对象写入转换好的字节流
      const tmpDown = new Blob([stringUtils.s2ab(XLSXStyle.write(wb, wopts))], {
        type: 'application/octet-stream'
      })
      FileSaver.saveAs(tmpDown, excelName + '.xlsx')
    }
  }
}
