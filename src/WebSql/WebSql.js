import Vue from 'vue'

const WebSql = function() {
  if (window.openDatabase) {
    // openDatabase('数据库名称','版本','数据库描述','数据库大小')
    var db = openDatabase('edition', '1.0', 'editionInfos', 500 * 1024 * 1024)

    Vue.prototype.$db = db

    if (!db) {
      console.log('数据库创建失败！')
    } else {
      console.log('本地数据库创建成功！')
      // 关联本地数据库
      db.transaction(tx => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS infos (edition_id, edition_name)')
        tx.executeSql('CREATE TABLE IF NOT EXISTS infos_detail (id, edition_id, info, createtime)')
        // 如果表中数据为空，则插入数据
        tx.executeSql('SELECT COUNT(*) AS NUM FROM infos', [], function(tx, mes) {
          if (mes.rows[0].NUM === 0) {
            tx.executeSql("insert into infos(edition_id,edition_name)values(0, 'ZGZN-商超-WinPC')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(1, 'ZGZN-商超-手机版')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(2, 'ZGZN-商超-安卓')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(3, 'ZGZN-服装-WinPC')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(4, 'ZGZN-服装-手机')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(5, 'ZGZN-烘焙-WinPC')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(6, 'ZGZN-餐饮-WinPC')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(7, 'ZGZN-餐饮-点餐小程序')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(6, '多宝-商超-WinPC')")
            tx.executeSql("insert into infos(edition_id,edition_name)values(7, '多宝-商超-手机版')")
          }
        }, (tx, err) => {
          console.log(err)
        })
      })
    }
  } else {
    console.log('不支持本地存储！')
  }
}
export default WebSql
