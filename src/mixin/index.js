import _ from 'loadsh'
export default {
  data() {
    return {
      editionId: '',
      showAdd: false,
      allEdition: [],
      deleteId: '',
      isClickedTag: 0,
      tagList: [],
      info: {},
      isEdit: false,
      editId: '',
      windowHeight: '100vh;',
      isAdmin: false,
      deleteShow: false,
      showAddUser: false,
      isEditUser: false,
      keyword: '',
      usersList: [],
      usersSearchList: [],
      baseUrl: 'https://dev.zhangguizhinang.com/pagaTool/version/',
      // baseUrl: 'http://172.17.3.47:8082/pagaTool/version/',
      showLogin: false,
      username: '',
      password: '',
      loginInfo: {},
      msg: '删除公告',
      allEditionNum: 0,
      newEditionId: 0,
      newSort: 0,
      showMaster: false,
      masterName: '',
      isEditMain: false,
      editionMainId: '',
      delMainId: '',
      gpEditions: {},
      isEditTitle: false,
      editMsg: '新增版本',
      oldName: '',
      selectList: [],
      selectValue: '',
      isAddNew: false,
      systemName: '',
      systemCode: '',
      showExcel: false,
      systemList: [
        {
          systemName: '全部品牌',
          systemCode: ''
        }
      ],
      editionList: [
        {
          editionName: '全部业态',
          editionId: ''
        }
      ],
      systemValue: '',
      editionValue: '',
      users: '',
      showWin: true,
      tableData: [],
      total: 0
    }
  },
  watch: {
    showMaster() {
      this.systemCode = ''
      this.systemName = ''
    },
    keyword() {
      this.searchUsers()
    }
  },
  created() {
    const item = sessionStorage.getItem('isAdmin')
    if (item) {
      this.isAdmin = true
      this.loginInfo = JSON.parse(sessionStorage.getItem('loginInfo'))
    }
    const path = window.location.href
    if (path.indexOf('editionId') !== -1) {
      const path1 = path.split('editionId=')[1]
      const path2 = path1.split('&')[0]
      this.editionId = path2.toString()
    }
    this.windowHeight = window.screen.availHeight + 'px;'
    this.selTagList()
    this.getGraysData()
  },
  mounted() {
    const itemWidth = document.getElementsByClassName('left')[0].offsetWidth
    const margin = (itemWidth + 20) + 'px;'
    document.getElementById('rightDiv').setAttribute('style', 'margin-left: ' + margin)
  },
  methods: {
    showNewList() {
      return this.usersList.some(item => Object.prototype.hasOwnProperty.call(item, 'phone'))
    },
    openDrawer() {
      var Btn = document.querySelector('#icon')
      var mainDiv = document.querySelector('.float_win')
      if (Btn.className === 'el-icon-d-arrow-right') {
        Btn.className = 'el-icon-d-arrow-left'
        mainDiv.style = 'transform: translateX(100%);'
      } else {
        Btn.className = 'el-icon-d-arrow-right'
        mainDiv.style = ''
      }
    },
    getGraysData() {
      this.$axios.get(this.baseUrl + 'selectGrays').then(res => {
        if (res.data.data) {
          this.tableData = res.data.data
          console.log(this.tableData, 'this.tableData')
          this.tableData.forEach(t => {
            if (t.users && t.users.includes('phone')) {
              t.userNum = this.excludeDelUsers(t.users).length
            }
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    setRightTable() {
      this.allEdition.map(t => { return t })
    },
    openExcel() {
      this.showExcel = true
      this.initList()
      this.getSystemList()
      this.getEditionList()
    },
    initList() {
      this.systemList = [
        {
          systemName: '全部品牌',
          systemCode: ''
        }
      ]
      this.editionList = [
        {
          editionName: '全部业态',
          editionId: ''
        }
      ]
      this.systemValue = ''
      this.editionValue = ''
    },
    getSystemList() {
      this.$axios.get(this.baseUrl + 'getSystemList').then(response => {
        const result = response.data.data
        if (result && result.length > 0) {
          result.forEach(t => {
            this.systemList.push(t)
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    getEditionList() {
      this.editionList = [
        {
          editionName: '全部业态',
          editionId: ''
        }
      ]
      this.editionValue = ''
      const params = {
        systemCode: this.systemValue
      }
      this.$axios.post(this.baseUrl + 'getEditionList', params).then(response => {
        const result = response.data.data
        if (result && result.length > 0) {
          result.forEach(t => {
            this.editionList.push(t)
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    isNotNull(t) {
      return t !== null && t !== '' && t !== undefined
    },
    getExcel() {
      const params = {
        systemCode: this.systemValue,
        editionId: this.editionValue
      }
      this.$axios.post(this.baseUrl + 'getExcel', params).then(response => {
        const result = response.data.data
        if (result && result.length > 0) {
          const fieldList = []
          result.forEach((t, i) => {
            const grayTime = this.isNotNull(t.grayTime) ? t.grayTime.substring(0, 10) : ''
            const releaseTime = this.isNotNull(t.releaseTime) ? t.releaseTime.substring(0, 10) : ''
            const param = {
              id: i + 1,
              systemName: t.systemName,
              editionName: t.editionName,
              grayTime: grayTime,
              releaseTime: releaseTime,
              edition: '',
              detail: '',
              url: ''
            }
            if (t.info) {
              t.info = JSON.parse(t.info)
              param.edition = t.info.edition
              param.detail = t.info.detail
              param.url = t.info.url ? t.info.url : ''
            }
            fieldList.push(param)
          })
          const fieldMapping = {
            序号: 'id',
            品牌: 'systemName',
            业态: 'editionName',
            版本: 'edition',
            灰度日期: 'grayTime',
            公开日期: 'releaseTime',
            灰度年月: 'grayDate',
            新增: 'addNum',
            修复: 'updateNum',
            改善: 'improveNum',
            需求: 'needNum',
            更新内容: 'detail',
            下载链接: 'url'
          }
          const checkedSystemData = _.find(this.systemList, o => { return o.systemCode === this.systemValue })
          const checkedEditionData = _.find(this.editionList, o => { return o.editionId === this.editionValue })
          const newField = _.groupBy(fieldList, 'systemName')
          newField
          const newFieldList = []
          for (const key in newField) {
            newFieldList.push(newField[key])
            newField[key].forEach(t => {
              newFieldList.push(t)
            })
          }
          newFieldList.forEach(t => {
            if (!Array.isArray(t)) {
              t.grayDate = this.isNotNull(t.grayTime) ? t.grayTime.substring(0, 7) : ''
              t.addNum = this.countChar(t.detail, '【新增】')
              t.updateNum = this.countChar(t.detail, '【修复】')
              t.improveNum = this.countChar(t.detail, '【改善】')
              t.needNum = this.countChar(t.detail, '【需求】')
            }
          })
          this.$makeExcel(newFieldList, fieldMapping, checkedSystemData.systemName + '_' + checkedEditionData.editionName + this.dateFormat('yyyyMMddhhmmss', new Date()), [])
        } else {
          this.$message({
            message: '无可导出数据',
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.$message({
          message: '导出错误',
          type: 'warning'
        })
      })
    },
    countChar(str, charToCount) {
      const regex = new RegExp(charToCount, 'g')
      return (str.match(regex) || []).length
    },
    getTitleName() {
      let name = ''
      this.allEdition.filter(t => {
        if (t.editionId === this.isClickedTag) {
          name = t.editionName
        }
      })
      return name
    },
    selectChange(val) {
      if (val === 'add') {
        this.isAddNew = true
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    addMain() {
      this.isEditTitle = false
      this.isEditMain = false
      this.showMaster = true
      this.isAddNew = false
      this.editMsg = '新增版本'
      this.selectValue = 'zgzn'
    },
    cancel() {
      this.showMaster = false
      this.masterName = ''
      this.isEditMain = false
      this.editionMainId = ''
    },
    editMain(item) {
      this.oldName = ''
      this.editMsg = '编辑版本'
      this.isAddNew = false
      this.masterName = item.editionName
      this.showMaster = true
      this.isEditMain = true
      this.isEditTitle = false
      this.editionMainId = item.editionId
      this.selectValue = item.systemCode
    },
    delMain(item) {
      this.msg = '删除版本'
      this.delMainId = item.editionId
      this.deleteShow = true
    },
    editTitle(item) {
      this.isAddNew = false
      this.oldName = _.cloneDeep(item[0].systemName)
      this.masterName = item[0].systemName
      this.showMaster = true
      this.isEditMain = true
      this.isEditTitle = true
      this.editionMainId = item.editionId
      this.editMsg = '编辑品牌'
    },
    delTitle(item) {
      this.msg = '删除品牌'
      this.delMainId = item[0].systemName
      this.isEditTitle = false
      this.deleteShow = true
    },
    confimMaster() {
      if (this.isAddNew && !this.systemName) {
        this.$message({
          message: '请输入品牌名称',
          type: 'warning'
        })
        return
      }
      if (this.isAddNew && !this.systemCode) {
        this.$message({
          message: '请输入品牌code',
          type: 'warning'
        })
        return
      }
      if (!this.masterName) {
        this.$message({
          message: this.isEditTitle ? '请输入品牌名称' : '请输入版本名称',
          type: 'warning'
        })
        return
      }
      if (this.isEditTitle) {
        this.editTitlGo()
      } else {
        if (this.isEditMain) {
          this.editMainGo()
        } else {
          this.createMain()
        }
      }
    },
    editTitlGo() {
      const nowTime = new Date()
      const params = {
        newName: this.masterName,
        oldName: this.oldName,
        reviseTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', nowTime)
      }
      this.$axios.post(this.baseUrl + 'updateSystemName', params).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: '修改成功',
            type: 'success',
            showClose: true
          })
          this.masterName = ''
          this.showMaster = false
          this.isEditTitle = false
          this.oldName = ''
          this.selTagList()
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.masterName = ''
        this.oldName = ''
        this.showMaster = false
        this.isEditTitle = false
      })
    },
    editMainGo() {
      const nowTime = new Date()
      let name = ''
      this.selectList.filter(t => {
        if (t.value === this.selectValue) {
          name = t.label
        }
      })
      const params = {
        editionId: this.editionMainId,
        editionName: this.masterName,
        systemName: name,
        systemCode: this.selectValue,
        reviseTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', nowTime)
      }
      this.$axios.post(this.baseUrl + 'updateMain', params).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: '修改成功',
            type: 'success',
            showClose: true
          })
          this.masterName = ''
          this.showMaster = false
          this.isEditMain = false
          this.editionMainId = ''
          this.selTagList()
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.masterName = ''
        this.showMaster = false
        this.isEditMain = false
        this.editionMainId = ''
      })
    },
    createMain() {
      const nowTime = new Date()
      let name = ''
      this.selectList.filter(t => {
        if (t.value === this.selectValue) {
          name = t.label
        }
      })
      const params = {
        sort: this.newSort + 1,
        editionName: this.masterName,
        isLast: 0,
        isDel: 0,
        createTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', nowTime),
        reviseTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', nowTime),
        systemName: this.isAddNew ? this.systemName : name,
        systemCode: this.isAddNew ? this.systemCode : this.selectValue
      }
      this.$axios.post(this.baseUrl + 'insertMain', params).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: '添加成功',
            type: 'success',
            showClose: true
          })
          this.masterName = ''
          this.showMaster = false
          this.isEditMain = false
          this.selTagList()
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.masterName = ''
        this.showMaster = false
        this.isEditMain = false
      })
    },
    delMainGo() {
      const params = {
        editionId: this.delMainId
      }
      this.$axios.post(this.baseUrl + 'deleteMain', params).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: '删除成功',
            type: 'success',
            showClose: true
          })
          this.msg = ''
          this.delMainId = ''
          this.deleteShow = false
          this.selTagList()
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.deleteShow = false
      })
    },
    delTitleGo() {
      const params = {
        systemName: this.delMainId
      }
      this.$axios.post(this.baseUrl + 'deleteSystemName', params).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: '删除成功',
            type: 'success',
            showClose: true
          })
          this.msg = ''
          this.delMainId = ''
          this.deleteShow = false
          this.selTagList()
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.deleteShow = false
      })
    },
    logout() {
      sessionStorage.removeItem('isAdmin')
      sessionStorage.removeItem('loginInfo')
      this.isAdmin = false
      this.deleteShow = false
    },
    login() {
      this.$axios.post(this.baseUrl + 'login', {
        username: this.username,
        password: this.password
      }).then(response => {
        if (response.data.code === '0') {
          this.isAdmin = true
          sessionStorage.setItem('isAdmin', this.isAdmin)
          this.loginInfo = response.data.data
          sessionStorage.setItem('loginInfo', JSON.stringify(this.loginInfo))
          this.showLogin = false
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
      })
    },
    openLogin() {
      this.showLogin = true
      setTimeout(() => {
        document.getElementById('username').setAttribute('style', 'border: none;background: #F8FAFC;')
        document.getElementById('password').setAttribute('style', 'border: none;background: #F8FAFC;')
      }, 0)
    },
    copy(t) {
      if (t.includes('phone')) {
        const midList = _.cloneDeep(this.usersSearchList)
        midList.forEach(t => {
          t.phone = t.phone.join('\n')
        })
        let s = this.excludeDelUsers(JSON.stringify(midList))
        s = s.join('\n')
        t = s
      }
      if (t.includes('(删除)')) {
        t = t.split('(删除)').join('').trim()
      }
      const oInput = document.createElement('textarea')
      oInput.value = t
      document.body.appendChild(oInput)
      oInput.select() // 选择对象;
      document.execCommand('Copy') // 执行浏览器复制命令
      this.$message({
        message: '复制成功',
        type: 'success'
      })
      oInput.remove()
    },
    arrayDifference(a, b) {
      const countMap = a.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1
        return acc
      }, {})
      const result = b.filter(val => {
        if (countMap[val]) {
          countMap[val]--
          return false
        }
        return true
      })
      return result
    },
    excludeDelUsers(t) {
      const jsonUser = JSON.parse(t)
      let allPhones = []
      let allDelPhones = []
      jsonUser.forEach(t => {
        const phones = t.phone.split('\n')
        const newPhones = phones.filter(s => !s.includes('删除'))
        const delPhones = phones.filter(s => s.includes('删除'))
        allDelPhones = allDelPhones.concat(delPhones)
        allPhones = allPhones.concat(newPhones)
      })
      allDelPhones = allDelPhones.map(t => t.split('(删除)').join('').trim())
      allPhones = this.arrayDifference(allDelPhones, allPhones)
      return allPhones
    },
    editUsers() {
      this.isEditUser = true
      this.keyword = ''
      if (this.info.users.includes('phone')) {
        this.users = this.excludeDelUsers(this.info.users).join('\n')
      } else {
        this.users = this.info.users
      }
    },
    saveUsers() {
      this.isEditUser = false
      if (this.info.users) {
        this.setOldData()
      } else {
        this.setNewData()
      }
      this.updateInfo('保存成功')
    },
    setOldData() {
      if (this.info.users.includes('phone')) {
        const jsonUser = JSON.parse(this.info.users)
        const oldUsers = this.excludeDelUsers(this.info.users)
        const newUsers = this.users ? this.users.split('\n') : []
        const addUsers = _.difference(newUsers, oldUsers)
        const delUsers = _.difference(oldUsers, newUsers)
        if (addUsers.length > 0 || delUsers.length > 0) {
          const NewDelUsers = delUsers.map(t => '(删除)' + t)
          const bothUsers = addUsers.concat(NewDelUsers)
          jsonUser.push({
            phone: bothUsers.join('\n'),
            createTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', new Date())
          })
        }
        this.info.users = JSON.stringify(jsonUser)
        jsonUser.forEach(s => {
          s.phone = _.compact(s.phone.split('\n'))
        })
        this.usersList = jsonUser
        this.usersSearchList = jsonUser
      } else {
        const oldUsers = this.info.users.split('\n')
        const newUsers = this.users ? this.users.split('\n') : []
        const addUsers = _.difference(newUsers, oldUsers)
        const delUsers = _.difference(oldUsers, newUsers)
        const allUsers = []
        allUsers.push({
          phone: this.info.users,
          createTime: ''
        })
        if (addUsers.length > 0 || delUsers.length > 0) {
          const NewDelUsers = delUsers.map(t => '(删除)' + t)
          const bothUsers = addUsers.concat(NewDelUsers)
          allUsers.push({
            phone: bothUsers.join('\n'),
            createTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', new Date())
          })
        }
        this.info.users = JSON.stringify(allUsers)
        allUsers.forEach(s => {
          s.phone = _.compact(s.phone.split('\n'))
        })
        this.usersList = allUsers
        this.usersSearchList = allUsers
      }
    },
    setNewData() {
      if (this.users) {
        const allUsers = [
          {
            phone: this.users,
            createTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', new Date())
          }
        ]
        this.info.users = JSON.stringify(allUsers)
        allUsers.forEach(s => {
          s.phone = _.compact(s.phone.split('\n'))
        })
        this.usersList = allUsers
        this.usersSearchList = allUsers
      }
    },
    searchUsers() {
      if (this.usersList.some(item => Object.prototype.hasOwnProperty.call(item, 'phone'))) {
        const mainList = []
        this.usersList.filter(t => {
          if (t.phone) {
            const list = t.phone
            const searchList = list.filter(s => {
              if (s.indexOf(this.keyword) !== -1) {
                return s
              }
            })
            if (searchList.length > 0) {
              mainList.push({
                createTime: t.createTime,
                phone: searchList
              })
            }
          }
        })
        this.usersSearchList = mainList
        const midList = _.cloneDeep(this.usersSearchList)
        midList.forEach(t => {
          t.phone = t.phone.join('\n')
        })
        const list = this.excludeDelUsers(JSON.stringify(midList))
        this.total = _.compact(list).length
      } else {
        this.usersSearchList = this.usersList.filter(t => {
          if (t.indexOf(this.keyword) !== -1) {
            return t
          }
        })
        this.total = _.compact(this.usersSearchList).length
      }
    },
    setInitUsers(item) {
      if (this.info.users.includes('phone')) {
        const mainList = JSON.parse(this.info.users)
        let phones = []
        mainList.forEach(t => {
          if (t.phone) {
            t.phone = t.phone.split('\n')
            phones = phones.concat(t.phone)
          }
        })
        this.users = phones.join('\n')
        this.usersList = mainList
        this.usersSearchList = mainList
        this.total = this.excludeDelUsers(this.info.users).length
      } else {
        this.users = item.info.users
        this.usersList = this.info.users.split('\n')
        this.usersSearchList = this.info.users.split('\n')
        this.total = this.usersSearchList.length
      }
    },
    openUsers(item) {
      console.log(item, 'item')
      this.editId = item.id
      this.info = item.info
      this.isEditUser = false
      this.usersSearchList = []
      this.total = 0
      this.users = ''
      if (this.info.users) {
        this.setInitUsers(item)
      } else {
        this.isEditUser = true
      }
      this.showAddUser = true
    },
    delDetail(item) {
      this.deleteId = item.id
      this.msg = '删除公告'
      this.deleteShow = true
    },
    edit(item) {
      this.info = item.info
      this.isEdit = true
      this.showAdd = true
      this.editId = item.id
    },
    confim() {
      if (!this.checkInfo()) {
        return
      }
      if (this.isEdit) {
        this.updateInfo('修改成功')
      } else {
        this.createInfo()
      }
    },
    checkInfo() {
      if (!this.info.edition) {
        this.$message({
          message: '版本号不能为空',
          type: 'warning'
        })
        return false
      }
      if (!this.info.detail) {
        this.$message({
          message: '更新内容不能为空',
          type: 'warning'
        })
        return false
      }
      return true
    },
    getInfo() {
      let info = ''
      this.allEdition.filter(t => {
        if (t.editionId === this.isClickedTag) {
          info = t.info
        }
      })
      if (this.allEdition.length > 0 && info) {
        return JSON.parse(info)
      }
      return []
    },
    selTagList() {
      this.allEditionNum = 0
      this.newEditionId = 0
      this.newSort = 0
      this.$axios.get(this.baseUrl + 'getAllVersion').then(response => {
        this.allEdition = response.data.data
        this.allEdition.filter(t => {
          this.allEditionNum += t.num
          if (Number(t.editionId) > this.newEditionId) {
            this.newEditionId = Number(t.editionId)
          }
          if (Number(t.sort) > this.newSort) {
            this.newSort = Number(t.sort)
          }
        })
        console.log(this.editionId, 'this.editionId')
        if (!this.editionId) {
          this.isClickedTag = this.allEdition[0].editionId
          this.editionId = this.allEdition[0].editionId
        } else {
          this.allEdition.filter(t => {
            if (t.editionId === this.editionId) {
              this.isClickedTag = t.editionId
            }
          })
        }
        this.setRightTable()
        console.log(this.allEdition, 'this.allEdition')
        this.gpEditions = _.groupBy(this.allEdition, 'systemName')
        const listMap = new Map()
        this.allEdition.filter(t => {
          listMap.set(t.systemName, t.systemCode)
        })
        this.selectList = Array.from(listMap.entries()).map(([label, value]) => ({ label, value }))
        this.selectList.push({ label: '+添加品牌', value: 'add' })
        console.log(this.selectList, 'selectList')
        console.log(this.gpEditions, 'gpEditions')
        this.selDetailList()
      }).catch(error => {
        console.log(error)
      })
    },
    selDetailList() {
      this.$axios.post(this.baseUrl + 'getVersionById', {
        editionId: this.editionId.toString()
      }).then(response => {
        const result = response.data.data
        if (result && result.length > 0) {
          result.filter(t => {
            let detail = ''
            if (t.info) {
              detail = JSON.parse(t.info)
            }
            t.info = detail
          })
        }
        console.log(this.tagList, 'this.tagList')
        this.tagList = result
      }).catch(error => {
        console.log(error)
      })
    },
    updateInfo(msg) {
      const nowTime = new Date()
      const params = {
        id: this.editId,
        info: JSON.stringify(this.info),
        reviseTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', nowTime),
        grayTime: this.info.grayTime,
        releaseTime: this.info.releaseTime
      }
      this.$axios.post(this.baseUrl + 'update', params).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: msg,
            type: 'success'
          })
          this.selDetailList()
          this.showAdd = false
          this.isEdit = false
          if (this.info.users.includes('phone')) {
            const list = this.excludeDelUsers(this.info.users)
            this.total = _.compact(list).length
          } else {
            this.total = this.usersSearchList.length
          }
          this.getGraysData()
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.showAdd = false
        this.isEdit = false
      })
    },
    createInfo() {
      const nowTime = new Date()
      const params = {
        id: this.uuid(),
        editionId: this.editionId.toString(),
        info: JSON.stringify(this.info),
        isDel: 0,
        createTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', nowTime),
        reviseTime: this.dateFormat('yyyy-MM-dd hh:mm:ss', nowTime),
        grayTime: this.info.grayTime,
        releaseTime: this.info.releaseTime
      }
      this.$axios.post(this.baseUrl + 'insert', params).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.showAdd = false
          this.selDetailList()
          this.getGraysData()
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.showAdd = false
        this.isEdit = false
      })
    },
    sure() {
      if (this.msg === '退出登录') {
        this.logout()
        return
      }
      if (this.msg === '删除版本') {
        this.delMainGo()
        return
      }
      if (this.msg === '删除品牌') {
        this.delTitleGo()
        return
      }
      const params = {
        id: this.deleteId
      }
      this.$axios.post(this.baseUrl + 'delete', params).then(response => {
        if (response.data.code === '0') {
          this.$message({
            message: '修改成功',
            type: 'success',
            showClose: true
          })
          this.selDetailList()
          this.deleteShow = false
        } else {
          this.$message({
            message: response.data.msg,
            type: 'warning'
          })
        }
      }).catch(error => {
        console.log(error)
        this.deleteShow = false
      })
    },
    getTagHtml() {
      const html = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 9V6L14 10L10 14V11H6V9H10ZM10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18Z" fill="#86909C" /></svg>'
      return html
    },
    getClickedHtml() {
      const html = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10C0 4.48 4.48 0 10 0ZM10 9H6V11H10V14L14 10L10 6V9Z" fill="white"/></svg>'
      return html
    },
    setUrlId(item) {
      const path = window.location.href
      const hasEditionId = path.indexOf('editionId') !== -1
      let newPath = ''
      if (hasEditionId) {
        newPath = path.split('editionId=')[0] + 'editionId=' + item.editionId
      }
      if (!hasEditionId) {
        newPath = path.split('editionId=')[0] + '?editionId=' + item.editionId
      }
      window.location.href = newPath
    },
    clickedTag(item) {
      this.isClickedTag = item.editionId.toString()
      this.editionId = item.editionId.toString()
      // this.setUrlId(item)
      setTimeout(() => {
        this.scroollToDiv(item)
      }, 0)
      this.selDetailList()
    },
    scroollToDiv(item) {
      // 获取要滚动到的元素
      const element = document.getElementById(item.editionId)
      // 滚动到该元素的位置
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    },
    getClickedStyle() {
      return 'background: #D0B888;color: #FFFFFF;'
    },
    goDown(url) {
      if (url) {
        window.open(url)
      }
    },
    getDetail(detail) {
      const re = /[\r\n]+/g
      let infos = []
      if (detail) {
        infos = detail.toString().split(re)
      }
      return infos
    },
    infoItemFormat(item) {
      if (item) {
        return JSON.parse(item)
      }
    },
    add() {
      console.log(this.isClickedTag, 'click')
      console.log(this.allEdition)
      this.showAdd = true
      this.info = {}
    },
    uuid() {
      const s = []
      const hexDigits = '0123456789abcdef'
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4'
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
      s[8] = s[13] = s[18] = s[23] = '-'
      const uuid = s.join('')
      return uuid
    },
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
    }
  }
}
