
<template>
  <div>
    <div style="margin-bottom: 20px">
      <!-- <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 10, '2000-2012')">00-12</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 11, 'all')">all</div>
      <div style="cursor:pointer" @click="getContentTotal('1', 11, 'リスト')">total</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 12, '50-05')">50-05</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 13, '40-50')">40-50</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 14, '19-2000-2013')">19-2000-2013</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 15, '21-2000-2013')">21-2000-2013</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 16, '20-2013-2030')">20-2013-2030</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 17, '20-2030-2100')">20-2030-2100</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 18, '20-1950-2000')">20-1950-2000</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContentTotal('logs' , 14, '分钟别')">分钟别</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 19, '18-2000-2013')">18-2000-2013</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 20, '22-2000-2013')">22-2000-2013</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 21, '0506-0940-1000')">0506-0940-1000</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 22, '0506-1155-1210')">0506-1155-1210</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 23, '0506-0940-0955')">0506-0940-0955</div> -->
      <!-- <div style="cursor:pointer" @click="getContentTotal('24', 24, '0504-0940-0955')">0504-0940-0955-total</div>
      <div style="cursor:pointer" @click="getContentTotal('25', 25, '0505-0940-0955')">0505-0940-0955-total</div>
      <div style="cursor:pointer" @click="getContentTotal('23', 23, '0506-0940-0955')">0506-0940-0955-total</div>
      <div style="cursor:pointer" @click="getContentTotal('31', 31, '0504-1155-1210')">0504-1155-1210-total</div>
      <div style="cursor:pointer" @click="getContentTotal('32', 32, '0505-1155-1210')">0505-1155-1210-total</div>
      <div style="cursor:pointer" @click="getContentTotal('22', 22, '0506-1155-1210')">0506-1155-1210-total</div>
      <div style="cursor:pointer" @click="getContentTotal('30', 30, '0504-1410-1425')">0504-1410-1425-total</div>
      <div style="cursor:pointer" @click="getContentTotal('28', 28, '0505-1410-1425')">0505-1410-1425-total</div>
      <div style="cursor:pointer" @click="getContentTotal('29', 29, '0506-1410-1425')">0506-1410-1425-total</div>

      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 24, '0504-0940-0955')">0504-0940-0955</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 25, '0505-0940-0955')">0505-0940-0955</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 23, '0506-0940-0955')">0506-0940-0955</div>

      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 31, '0504-1155-1210')">0504-1155-1210</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 32, '0505-1155-1210')">0505-1155-1210</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 22, '0506-1155-1210')">0506-1155-1210</div>

      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 30, '0504-1410-1425')">0504-1410-1425</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 28, '0505-1410-1425')">0505-1410-1425</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 29, '0506-1410-1425')">0506-1410-1425</div> -->

      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs' , 33, '0522')">0522</div>

      <!-- <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('logs', 8, '8031-0832')">31-32</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent2('logs', 7, '0830-0831-time')">0830-0831-time</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent2('logs', 8, '0831-0832-time')">0831-0832-time</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent3('logs' , 7, '0830-0831-timeformat')">30-31-timeformat</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent3('logs', 8, '8031-0832-timeformat')">31-32-timeformat</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent4('logs', 9, '8031-0832-all')">31-32-all</div> -->
      <!-- <div style="cursor:pointer" @click="getContentTotal('172.28.4.6', 1, 'アウトバウンドの通信リスト')">web:172.28.4.6--out-total</div>
      <div style="cursor:pointer" @click="getContentTotal('172.28.4.9', 3, 'アウトバウンドの通信リスト')">smart:172.28.4.9--out-total</div>
      <div style="cursor:pointer" @click="getContentTotal('172.28.4.7', 2, 'アウトバウンドの通信リスト')">DB:172.28.4.7--out-total</div> -->
    </div>
    <!-- <div style="margin-bottom: 20px">
      <div style="cursor:pointer" @click="getContent('172.28.4.6', 4, 'インバウンドの通信リスト')">web:172.28.4.6--in</div>
      <div style="cursor:pointer" @click="getContent('172.28.4.9', 6, 'インバウンドの通信リスト')">smart:172.28.4.9--in</div>
      <div style="cursor:pointer;margin-bottom: 20px;" @click="getContent('172.28.4.7', 5, 'インバウンドの通信リスト')">DB:172.28.4.7--in</div>
      <div style="cursor:pointer" @click="getContentTotal('172.28.4.6', 4, 'インバウンドの通信リスト')">web:172.28.4.6--in-total</div>
      <div style="cursor:pointer" @click="getContentTotal('172.28.4.9', 6, 'インバウンドの通信リスト')">smart:172.28.4.9--in-total</div>
      <div style="cursor:pointer" @click="getContentTotal('172.28.4.7', 5, 'インバウンドの通信リスト')">DB:172.28.4.7--in-total</div>
    </div> -->
  </div>
</template>
<script>
// import jsonData1 from './172.28.4.6-out.json'
// import jsonData2 from './172.28.4.7-out.json'
// import jsonData3 from './172.28.4.9-out.json'
// import jsonData4 from './172.28.4.6-in.json'
// import jsonData5 from './172.28.4.6-in.json'
// import jsonData6 from './172.28.4.6-in.json'
// import jsonData7 from './downloaded-logs-20250221-0830-20250221-0831.json'
// import jsonData8 from './downloaded-logs-20250221-0831-20250221-0832.json'
// import jsonData9 from './downloaded-logs-all.json'
// import jsonData10 from './downloaded-logs-20250422-131748.json'
// import jsonData11 from './downloaded-logs-20250422-182509.json'
// import jsonData12 from './downloaded-logs-20250423-085640.json'
// import jsonData13 from './downloaded-logs-20250423-090744.json'
// import jsonData14 from './downloaded-logs-0419-2000-2013.json'
// import jsonData15 from './downloaded-logs-0421-2000-2013.json'
// import jsonData16 from './downloaded-logs-0420-2013-2030.json'
// import jsonData17 from './downloaded-logs-0420-2030-2100.json'
// import jsonData18 from './downloaded-logs-0420-1950-2000.json'
// import jsonData19 from './downloaded-logs-18.json'
// import jsonData20 from './downloaded-logs-22.json'
// import jsonData26 from './downloaded-logs-20250505-0944-0950.json'
// import jsonData27 from './downloaded-logs-20250506-0944-0950.json'
// import jsonData21 from './downloaded-logs-20250506-0940-1000.json'
import jsonData22 from './downloaded-logs-20250506-1155-1210.json'
import jsonData23 from './downloaded-logs-20250506-0940-0955.json'
import jsonData24 from './downloaded-logs-20250504-0940-0955.json'
import jsonData25 from './downloaded-logs-20250505-0940-0955.json'
import jsonData28 from './downloaded-logs-20250505-1410-1425.json'
import jsonData29 from './downloaded-logs-20250506-1410-1425.json'
import jsonData30 from './downloaded-logs-20250504-1410-1425.json'
import jsonData31 from './downloaded-logs-20250504-1155-1210.json'
import jsonData32 from './downloaded-logs-20250505-1155-1210.json'
import jsonData33 from './downloaded-logs-20250522-140554.json'
export default {
  data() {
    return {
      jsonDataMap: {
        // 1: jsonData1,
        // 2: jsonData2,
        // 3: jsonData3,
        // 4: jsonData4,
        // 5: jsonData5,
        // 6: jsonData6,
        // 7: jsonData7,
        // 8: jsonData8,
        // 9: jsonData9,
        // 10: jsonData10,
        // 11: jsonData11,
        // 12: jsonData12,
        // 13: jsonData13,
        // 14: jsonData14,
        // 15: jsonData15,
        // 16: jsonData16,
        // 17: jsonData17,
        // 18: jsonData18,
        // 19: jsonData19,
        // 20: jsonData20,
        // 21: jsonData21,
        22: jsonData22,
        23: jsonData23,
        24: jsonData24,
        25: jsonData25,
        // 26: jsonData26,
        // 27: jsonData27,
        28: jsonData28,
        29: jsonData29,
        30: jsonData30,
        31: jsonData31,
        32: jsonData32,
        33: jsonData33
      }
    }
  },
  methods: {
    getNestedValue(obj, keys) {
      let current = obj
      for (let i = 0; i < keys.length; i++) {
        if (current && current.hasOwnProperty(keys[i])) {
          current = current[keys[i]]
        } else {
          return ''
        }
      }

      return current
    },
    convertUTCToJST(utcTime) {
      const date = new Date(utcTime)

      const jstOffset = 9 * 60
      const localDate = new Date(date.getTime() + jstOffset * 60 * 1000)

      const year = localDate.getUTCFullYear()
      const month = String(localDate.getUTCMonth() + 1).padStart(2, '0')
      const day = String(localDate.getUTCDate()).padStart(2, '0')
      const hour = String(localDate.getUTCHours()).padStart(2, '0')
      const minute = String(localDate.getUTCMinutes()).padStart(2, '0')
      const second = String(localDate.getUTCSeconds()).padStart(2, '0')
      const millisecond = String(utcTime.split('.')[1])

      return `${year}-${month}-${day}T${hour}:${minute}:${second}.${millisecond}`
    },
    getContent(ip, index, type) {
      const jsonData = this.jsonDataMap[index]
      const arr = []
      jsonData.forEach(item => {
        arr.push({
          date: this.convertUTCToJST(item.timestamp).split('T')[0],
          time: this.convertUTCToJST(item.timestamp).split('T')[1],
          serverIp: this.getNestedValue(item, ['httpRequest', 'serverIp']),
          remoteIp: this.getNestedValue(item, ['httpRequest', 'remoteIp']),
          requestMethod: this.getNestedValue(item, ['httpRequest', 'requestMethod']),
          requestUrl: this.getNestedValue(item, ['httpRequest', 'requestUrl']),
          status: this.getNestedValue(item, ['httpRequest', 'status']),
          latency: this.getNestedValue(item, ['httpRequest', 'latency']),
          userAgent: this.getNestedValue(item, ['httpRequest', 'userAgent'])
        })
      })
      // const countAndRemoveDuplicatesByFields = (arr, key1, key2) => {
      //   const countMap = arr.reduce((acc, obj) => {
      //     const key = `${obj[key1]}_${obj[key2]}`;
      //     acc[key] = (acc[key] || 0) + 1;
      //     return acc;
      //   }, {});

      //   const result = arr.filter((obj, index, self) => {
      //     const key = `${obj[key1]}_${obj[key2]}`;
      //     if (index === self.findIndex(item => `${item[key1]}_${item[key2]}` === key)) {
      //       obj.count = countMap[key];
      //       return true;
      //     }
      //     return false;
      //   });

      //   return result;
      // };

      // const result = countAndRemoveDuplicatesByFields(arr, 'dest_ip', 'date');
      // result.sort((a, b) => new Date(b.date) - new Date(a.date));
      const fieldMapping = {
        date: 'date',
        time: 'time',
        サーバーIP: 'serverIp',
        クライアント: 'remoteIp',
        method: 'requestMethod',
        "request URL": 'requestUrl',
        status: 'status',
        レスポンス: 'latency',
        ユーザーエージェント: 'userAgent'
      }
      this.$makeExcel(arr, fieldMapping, ip + type, [])
    },
    getContent2(ip, index, type) {
      const jsonData = this.jsonDataMap[index]
      const arr = []
      jsonData.forEach(item => {
        arr.push({
          date: this.convertUTCToJST(item.timestamp).split('T')[0],
          time: this.convertUTCToJST(item.timestamp).split('T')[1].split('.')[0],
          serverIp: this.getNestedValue(item, ['httpRequest', 'serverIp']),
          remoteIp: this.getNestedValue(item, ['httpRequest', 'remoteIp']),
          requestMethod: this.getNestedValue(item, ['httpRequest', 'requestMethod']),
          requestUrl: this.getNestedValue(item, ['httpRequest', 'requestUrl']),
          status: this.getNestedValue(item, ['httpRequest', 'status']),
          latency: this.getNestedValue(item, ['httpRequest', 'latency'])
        })
      })
      const countAndRemoveDuplicatesByFields = (arr, key1, key2) => {
        const countMap = arr.reduce((acc, obj) => {
          const key = `${obj[key1]}_${obj[key2]}`
          acc[key] = (acc[key] || 0) + 1
          return acc
        }, {})

        const result = arr.filter((obj, index, self) => {
          const key = `${obj[key1]}_${obj[key2]}`
          if (index === self.findIndex(item => `${item[key1]}_${item[key2]}` === key)) {
            obj.count = countMap[key]
            return true
          }
          return false
        })

        return result
      }

      const result = countAndRemoveDuplicatesByFields(arr, 'time')
      result.sort((a, b) => new Date(b.date) - new Date(a.date))
      const fieldMapping = {
        日期: 'date',
        时间: 'time',
        总数: 'count'
      }
      this.$makeExcel(result, fieldMapping, ip + type, [])
    },
    getContent3(ip, index, type) {
      const jsonData = this.jsonDataMap[index]
      const arr = []
      jsonData.forEach(item => {
        arr.push({
          date: this.convertUTCToJST(item.timestamp).split('T')[0],
          time: this.convertUTCToJST(item.timestamp).split('T')[1].split('.')[0],
          serverIp: this.getNestedValue(item, ['httpRequest', 'serverIp']),
          remoteIp: this.getNestedValue(item, ['httpRequest', 'remoteIp']),
          requestMethod: this.getNestedValue(item, ['httpRequest', 'requestMethod']),
          requestUrl: this.getNestedValue(item, ['httpRequest', 'requestUrl']),
          status: this.getNestedValue(item, ['httpRequest', 'status']),
          latency: this.getNestedValue(item, ['httpRequest', 'latency']).split('.')[0]
        })
      })
      
      const fieldMapping = {
        date: 'date',
        time: 'time',
        サーバーIP: 'serverIp',
        クライアント: 'remoteIp',
        method: 'requestMethod',
        "request URL": 'requestUrl',
        status: 'status',
        レスポンス: 'latency'
      }
      this.$makeExcel(arr, fieldMapping, ip + type, [])
    },
    getContent4(ip, index, type) {
      const jsonData = this.jsonDataMap[index]
      const arr = []
      jsonData.forEach(item => {
        const requestUrl = this.getNestedValue(item, ['httpRequest', 'requestUrl'])
        if (requestUrl.includes('https://prepaid.su-pay.jp/')) {
          arr.push({
            timestamp: this.convertUTCToJST(item.timestamp),
            date: this.convertUTCToJST(item.timestamp).split('T')[0],
            time: this.convertUTCToJST(item.timestamp).split('T')[1].split('Z')[0],
            serverIp: this.getNestedValue(item, ['httpRequest', 'serverIp']),
            remoteIp: this.getNestedValue(item, ['httpRequest', 'remoteIp']),
            requestMethod: this.getNestedValue(item, ['httpRequest', 'requestMethod']),
            requestUrl: requestUrl,
            status: this.getNestedValue(item, ['httpRequest', 'status']),
            latency: this.getNestedValue(item, ['httpRequest', 'latency']).split('s')[0]
          })
        }
      })
      const arr2 = arr.slice()
      arr.forEach(t => {
        const time1 = new Date(t.timestamp)
        t.count2 = 0
        arr2.forEach(s => {
          const time2 = new Date(s.timestamp)
          if (time1.getTime() > time2.getTime()) {
            const time3 = new Date(time2.getTime() + Number(s.latency) * 1000)
            if (time3.getTime() > time1.getTime()) {
              t.count2++
            }
          } else if (time1.getTime() === time2.getTime()) {
            t.count2++
          }
        })
      })
      const fieldMapping = {
        日期: 'date',
        时间: 'time',
        服务器IP: 'serverIp',
        客户端IP: 'remoteIp',
        请求方法: 'requestMethod',
        请求地址: 'requestUrl',
        状态: 'status',
        延迟时间: 'latency',
        请求总数: 'count2'
      }
      this.$makeExcel(arr, fieldMapping, ip + type, [])
    },
    getContent5(ip, index, type) {
      const jsonData = this.jsonDataMap[index]
      const arr = []
      jsonData.forEach(item => {
        arr.push({
          timestamp: this.convertUTCToJST(item.timestamp),
          date: this.convertUTCToJST(item.timestamp).split('T')[0],
          time: this.convertUTCToJST(item.timestamp).split('T')[1].split('Z')[0],
          serverIp: this.getNestedValue(item, ['httpRequest', 'serverIp']),
          remoteIp: this.getNestedValue(item, ['httpRequest', 'remoteIp']),
          requestMethod: this.getNestedValue(item, ['httpRequest', 'requestMethod']),
          requestUrl: this.getNestedValue(item, ['httpRequest', 'requestUrl']),
          status: this.getNestedValue(item, ['httpRequest', 'status']),
          latency: this.getNestedValue(item, ['httpRequest', 'latency']).split('s')[0]
        })
      })
      const fieldMapping = {
        日期: 'date',
        时间: 'time',
        服务器IP: 'serverIp',
        客户端IP: 'remoteIp',
        请求方法: 'requestMethod',
        请求地址: 'requestUrl',
        状态: 'status',
        延迟时间: 'latency'
      }
      this.$makeExcel(arr, fieldMapping, ip + type, [])
    },
    getContentTotal(ip, index, type) {
      const jsonData = this.jsonDataMap[index]
      const arr = []
      jsonData.forEach(item => {
        arr.push({
          requestUrl: this.getNestedValue(item, ['httpRequest', 'requestUrl'])
        })
      })
      const countAndRemoveDuplicatesByFields = (arr, keys) => {
        // 根据提供的多个字段（keys）生成一个唯一的key
        const countMap = arr.reduce((acc, obj) => {
          // 将每个字段的值连接起来作为唯一key
          const key = keys.map(k => obj[k]).join('_')
          acc[key] = (acc[key] || 0) + 1
          return acc
        }, {})

        // 过滤出去重后的数组并附加计数
        const result = arr.filter((obj, index, self) => {
          const key = keys.map(k => obj[k]).join('_')
          if (index === self.findIndex(item => keys.map(k => item[k]).join('_') === key)) {
            obj.count = countMap[key]
            return true
          }
          return false
        })

        return result
      }

      const result = countAndRemoveDuplicatesByFields(arr, ['requestUrl'])
      result.sort((a, b) => new Date(b.count) - new Date(a.count))
      const fieldMapping = {
        URL: 'requestUrl',
        リクエスト回数: 'count'
      }
      this.$makeExcel(result, fieldMapping, type + '-total', [])
    }
  }
}
</script>
