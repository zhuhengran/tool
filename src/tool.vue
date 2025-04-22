
<template>
  <div v-loading="loading"  element-loading-spinner="el-icon-loading" element-loading-text="数据处理中"
    element-loading-background="rgba(0, 0, 0, 0.8)" style="width: 100%;height: 100vh;">
    <input
      class="input-file"
      type="file"
      @change="batchUpload"
      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv"
    />
   </div>
</template>
<script>
export default {
  data() {
    return {
      csvData: [],
      loading: false
    }
  },
  methods: {
    
    dateFormat(fmt, date) {
      let ret
      const opt = {
        'y+': date.getFullYear().toString(), // 年
        'M+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'h+': date.getHours().toString(), // 时
        'm+': date.getMinutes().toString(), // 分
        's+': date.getSeconds().toString() // 秒
      }
      for (const k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt)
        if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')))
        }
      }
      return fmt
    },
    batchUpload () {
      this.tmpDown = '';
      if (!event.currentTarget.files.length) {
        return;
      }
      let msg = '请选择{suffixs}类型的文件';
      // 拿取文件对象
      var file = event.currentTarget.files[0];
      var filename = file.name;
      var suffixs = ['csv'];
      if (
        suffixs.indexOf(
          filename.substr(filename.lastIndexOf('.') + 1).toLowerCase()
        ) === -1
      ) {
        this.$message({
          message: msg.format({ suffixs: suffixs.join('、') }),
          type: 'warning'
        });
        return;
      }

      // 用FileReader来读取
      var reader = new FileReader();
      this.loading = true;
      reader.onload = (e) => {
        const text = e.target.result;
        this.csvData = this.parseCSV(text);
        console.log(this.csvData, 'this.csvData');
        this.getContent();
      };
      reader.readAsText(file);
      // 清空input，使下次选择文件生效
      document.querySelector('.input-file').value = '';
    },
    parseCSV(text) {
      const rows = text.split("\n"); // 按行分割
      return rows
        .filter((row) => row.trim()) // 忽略空行
        .map((row, rowIndex) =>
          row
            .split(",") // 按逗号分割每一列
            .map((cell, cellIndex) => {
              // 判断是否为第一列，并尝试将其转换为数字
              if (rowIndex > 0 && cellIndex === 0) {
                const num = parseFloat(cell); // 转换为浮点数
                return isNaN(num) ? cell : num; // 保留数字或原值
              }
              return cell
                .replace(/(^"|"$)/g, "") // 去除包裹的双引号
                .trim(); // 去除多余的空格
            })
        );
    },
    getContent() {
      let arr = [];
      this.csvData.forEach((item, key) => {
        if (key > 0) {
          arr.push({
            id: key,
            province_code: item[4],
            province_name: item[5],
            city_code: item[6],
            city_name: item[7],
            bank_code: item[2],
            bank_name: item[3],
            inter_bank_code: item[0].replace(/^"|"$/g, ''),
            inter_bank_name: item[1],
            is_del: 0,
            createtime: this.dateFormat('yyyy-MM-dd hh:mm:ss', new Date()),
            updatetime: this.dateFormat('yyyy-MM-dd hh:mm:ss', new Date())
          });
        }
      })
      const fieldMapping = {
        id: 'id',
        province_code: 'province_code',
        province_name: 'province_name',
        city_code: 'city_code',
        city_name: 'city_name',
        bank_code: 'bank_code',
        bank_name: 'bank_name',
        inter_bank_code: 'inter_bank_code',
        inter_bank_name: 'inter_bank_name',
        is_del: 0,
        createtime: 'createtime',
        updatetime: 'updatetime'
      }
      this.$makeExcel(arr, fieldMapping, '新银联数据' + this.dateFormat('yyyy-MM-dd hh:mm:ss', new Date()), []);
      this.loading = false;
    }
  }
}
</script>