<template>
  <div id="app" style="overflow:hidden;">
    <div style="height: 60px;width: 100%;position: fixed;top: 0;left: 0;background: #FFFFFF;">
      <div v-if="!isAdmin" class="login" @click="openLogin()">
        <svg
          style="vertical-align: text-top;"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477
              22 12C22 17.523 17.523 22 12 22ZM7.013 18.256C8.42855 19.3877 10.1877
              20.0029 12 20C13.97 20 15.773 19.288 17.167 18.108C16.5157 17.4397 15.7371
              16.9089 14.877 16.5468C14.017 16.1847 13.0931 15.9988 12.16 16C11.1926
              15.9989 10.2355 16.1989 9.34947 16.5872C8.46343 16.9756 7.66778 17.5439
              7.013 18.256ZM5.616 16.82C6.45645 15.9281 7.47067 15.2177 8.59614 14.7327C9.72161
              14.2477 10.9345 13.9984 12.16 14C13.3417 13.9985 14.512 14.2304
              15.6037 14.6824C16.6955 15.1344 17.6873 15.7976 18.522 16.634C19.3781
              15.4291 19.8836 14.0106 19.9826 12.5359C20.0815 11.0612 19.77 9.58789
              19.0825 8.27946C18.395 6.97102 17.3585 5.87862 16.088 5.12345C14.8174
              4.36827 13.3625 3.97984 11.8846 4.00125C10.4067 4.02267 8.96366 4.45308
              7.71552 5.24476C6.46738 6.03643 5.46296 7.1584 4.81369 8.4862C4.16442
              9.814 3.89569 11.2957 4.03732 12.7669C4.17894 14.2382 4.72537 15.6414
              5.616 16.821V16.82ZM12 13C10.9391 13 9.92172 12.5786 9.17157 11.8284C8.42143
              11.0783 8 10.0609 8 9C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172
              5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786
              6.92172 16 7.93913 16 9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783
              12.5786 13.0609 13 12 13ZM12 11C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893
              10.0391 14 9.53043 14 9C14 8.46957 13.7893 7.96086 13.4142 7.58579C13.0391 7.21071
              12.5304 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957
              10 9C10 9.53043 10.2107 10.0391 10.5858 10.4142C10.9609 10.7893 11.4696 11 12 11Z"
            fill="white"
          />
        </svg>
        登录
      </div>
      <div v-if="isAdmin" style="line-height: 40px;margin: 10px;float: right;caret-color: transparent;">
        <svg
          style="vertical-align: text-bottom;"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0
              20 4.477 20 10C20 15.523 15.523 20 10 20ZM5.013 16.256C6.42855
              17.3877 8.18768 18.0029 10 18C11.97 18 13.773 17.288 15.167
              16.108C14.5157 15.4397 13.7371 14.9089 12.877 14.5468C12.017
              14.1847 11.0931 13.9988 10.16 14C9.19259 13.9989 8.2355 14.1989
              7.34947 14.5872C6.46343 14.9756 5.66778 15.5439 5.013 16.256V16.256ZM3.616
              14.82C4.45645 13.9281 5.47067 13.2177 6.59614 12.7327C7.72161 12.2477
              8.93448 11.9984 10.16 12C11.3417 11.9985 12.512 12.2304 13.6037 12.6824C14.6955
              13.1344 15.6873 13.7976 16.522 14.634C17.3781 13.4291 17.8836 12.0106 17.9826
              10.5359C18.0815 9.06119 17.77 7.58789 17.0825 6.27946C16.395 4.97102 15.3585
              3.87862 14.088 3.12345C12.8174 2.36827 11.3625 1.97984 9.8846 2.00125C8.40672
              2.02267 6.96366 2.45308 5.71552 3.24476C4.46738 4.03643 3.46296 5.1584 2.81369
              6.4862C2.16442 7.814 1.89569 9.29571 2.03732 10.7669C2.17894 12.2382 2.72537 13.6414
              3.616 14.821V14.82ZM10 11C8.93913 11 7.92172 10.5786 7.17157 9.82843C6.42143 9.07828
              6 8.06087 6 7C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10
              3C11.0609 3 12.0783 3.42143 12.8284 4.17157C13.5786 4.92172 14 5.93913 14 7C14 8.06087
              13.5786 9.07828 12.8284 9.82843C12.0783 10.5786 11.0609 11 10 11ZM10 9C10.5304 9 11.0391
              8.78929 11.4142 8.41421C11.7893 8.03914 12 7.53043 12 7C12 6.46957 11.7893 5.96086 11.4142
              5.58579C11.0391 5.21071 10.5304 5 10 5C9.46957 5 8.96086 5.21071 8.58579 5.58579C8.21071
              5.96086 8 6.46957 8 7C8 7.53043 8.21071 8.03914 8.58579 8.41421C8.96086 8.78929 9.46957
              9 10 9Z"
            fill="#4B4B4B"
          />
        </svg>
        {{ loginInfo[0].name }} | <div style="cursor: pointer;display: inline-block;" @click="msg = '退出登录';deleteShow = true">退出</div>
      </div>
      <div class="login" @click="openExcel()">导出Excel</div>
    </div>
    <div :style="'min-height:' + windowHeight" style="padding: 20px 15vh;background: #F8F8F8;overflow:auto;margin-top: 60px;">
      <div>
        <div class="left">
          <div style="margin: 16px;">
            <div class="left-top">版本总量：{{ allEditionNum }}</div>
            <el-menu
              :default-active="isClickedTag + ''"
              :unique-opened="true"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu v-for="(val, key) in gpEditions" :key="'key' + key" :index="key">
                <template slot="title">
                  <div style="width: 60%;display: inline-block;">{{ key }}</div>
                  <div v-if="isAdmin" style="display: inline-block;margin-left: 10px;margin-bottom: 2px;">
                    <i class="el-icon-edit" @click.stop="editTitle(val)"></i>
                    <i class="el-icon-delete" @click.stop="delTitle(val)"></i>
                  </div>
                </template>
                <el-menu-item
                  v-for="(item, i) in val"
                  :id="item.editionId"
                  :key="'item' + i"
                  :index="item.editionId"
                  @click="clickedTag(item)"
                >
                  <div style="display: inline-block;width: 65%;">{{ item.editionName }}</div>
                  <div style="display: inline-block;line-height: 45px;">
                    <div :style="isClickedTag === item.editionId ? 'border: 2px solid #FFFFFF' : ''" class="left-item_num">{{ item.num }}</div>
                    <div v-if="isAdmin" style="display: inline-block;margin-left: 10px;margin-bottom: 2px;">
                      <i class="el-icon-edit" @click.stop="editMain(item)"></i>
                      <i class="el-icon-delete" @click.stop="delMain(item)"></i>
                    </div>
                  </div>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          <div v-if="isAdmin" class="left-add" @click="addMain()">+新增版本</div>
        </div>
        <div id="rightDiv" class="right">
          <div class="right-header">更新日志
            <div v-if="isAdmin" class="right-header-add" @click="add()">添加迭代信息</div>
          </div>
          <div v-for="(item, index) in tagList" :key="'info' + index" class="right-main">
            <div class="right-main-header">
              <div class="right-main-header-one">版本：{{ item.info.edition }}</div>
              <div class="right-main-header-two">灰度发布：{{ item.info.grayTime }}</div>
              <div class="right-main-header-two">公开发布：{{ item.info.releaseTime }}</div>
              <el-dropdown v-if="isAdmin" class="detail-icon">
                <div>
                  <svg style="vertical-align: -webkit-baseline-middle;" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.75 7.5C2.925 7.5 2.25 8.175 2.25 9C2.25 9.825 2.925 10.5 3.75 10.5C4.575 10.5 5.25
                      9.825 5.25 9C5.25 8.175 4.575 7.5 3.75 7.5ZM14.25 7.5C13.425 7.5 12.75 8.175 12.75 9C12.75
                      9.825 13.425 10.5 14.25 10.5C15.075 10.5 15.75 9.825 15.75 9C15.75 8.175 15.075 7.5 14.25
                      7.5ZM9 7.5C8.175 7.5 7.5 8.175 7.5 9C7.5 9.825 8.175 10.5 9 10.5C9.825
                      10.5 10.5 9.825 10.5 9C10.5 8.175 9.825
                      7.5 9 7.5Z"
                      fill="#8E8E8E"
                    />
                  </svg>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item style="color: #BDA16A;caret-color: transparent;"><div @click="edit(item)">修改公告</div></el-dropdown-item>
                  <el-dropdown-item style="color: #F64C4C;caret-color: transparent;"><div @click="delDetail(item)">删除公告</div></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <div v-if="item.info.url" class="right-main-header-three" @click="goDown(item.info.url)">下载安装包</div>
              <div class="right-main-header-four" @click="openUsers(item)">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.8333 5.83337H19V7.50004H14.8333V5.83337ZM13.1667 10H19V11.6667H13.1667V10ZM15.6667
                    14.1667H19V15.8334H15.6667V14.1667ZM0.666656 18.3334C0.666656 16.5653 1.36904 14.8696
                    2.61928 13.6193C3.86952 12.3691 5.56521 11.6667 7.33332 11.6667C9.10143 11.6667 10.7971
                    12.3691 12.0474 13.6193C13.2976 14.8696 14 16.5653 14 18.3334H12.3333C12.3333 17.0073 11.8065
                    15.7355 10.8689 14.7978C9.93118 13.8602 8.65941 13.3334 7.33332 13.3334C6.00724 13.3334 4.73547
                    13.8602 3.79779 14.7978C2.86011 15.7355 2.33332 17.0073 2.33332 18.3334H0.666656ZM7.33332
                    10.8334C4.57082 10.8334 2.33332 8.59587 2.33332 5.83337C2.33332 3.07087 4.57082 0.833374 7.33332
                    0.833374C10.0958 0.833374 12.3333 3.07087 12.3333 5.83337C12.3333 8.59587 10.0958 10.8334
                    7.33332 10.8334ZM7.33332 9.16671C9.17499 9.16671 10.6667 7.67504 10.6667 5.83337C10.6667
                    3.99171 9.17499 2.50004 7.33332 2.50004C5.49166 2.50004 3.99999 3.99171 3.99999 5.83337C3.99999
                    7.67504 5.49166 9.16671 7.33332 9.16671Z"
                    fill="#8E8E8E"
                  />
                </svg>
              </div>
            </div>
            <div class="right-main-info">
              <div class="right-main-info-font" style="margin: 0 auto;">
                <div style="margin-left: 170px;">
                  <p v-for="(de, ind) in getDetail(item.info.detail)" v-show="de" :key="'de' + ind">{{ de }}</p>
                </div>
              </div>
              <div class="right-main-bottom" />
            </div>
          </div>
        </div>
        <div v-if="showAdd" class="tag">
          <div class="tag1" style="overflow: hidden;">
            <div class="tag2">{{ getTitleName() }}
              <svg
                style="float: right;margin-top: 5px;cursor: pointer"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showAdd = false;isEdit = false"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55635 0L0.142135 1.41422L6.64214 7.91422L0 14.5564L1.41421
                15.9706L8.05635 9.32843L14.2843 15.5564L15.6985 14.1421L9.47056 7.91421L15.5563 1.82843L14.1421
                0.414215L8.05635 6.5L1.55635 0Z"
                  fill="#8197A6"
                />
              </svg>
            </div>
            <div style="font-size: 18px;">
              <div style="margin-bottom: 20px;">
                <div class="tag-item">版本号</div>
                <el-input
                  v-model="info.edition"
                  style="display: inline-block;width: 798px;"
                  type="text"
                  maxlength="30"
                  placeholder="请输入版本号"
                  clearable
                />
              </div>
              <div style="margin-bottom: 20px;display: inline-block;">
                <div class="tag-item">灰度时间</div>
                <el-date-picker
                  v-model="info.grayTime"
                  type="datetime"
                  style="display: inline-block;width: 300px;"
                  placeholder="请选择灰度时间"
                  value-format="yyyy-MM-dd HH:mm"
                  format="yyyy-MM-dd HH:mm"
                  clearable
                />
              </div>
              <div style="margin-bottom: 20px;display: inline-block;margin-left: 102px;">
                <div class="tag-item">上线时间</div>
                <el-date-picker
                  v-model="info.releaseTime"
                  type="datetime"
                  style="display: inline-block;width: 300px;"
                  placeholder="请选择发布时间"
                  value-format="yyyy-MM-dd HH:mm"
                  format="yyyy-MM-dd HH:mm"
                  clearable
                />
              </div>
              <div style="margin-bottom: 20px;">
                <div class="tag-item">下载链接</div>
                <el-input
                  v-model="info.url"
                  style="display: inline-block;width: 798px;"
                  type="text"
                  placeholder="请输入下载链接"
                  clearable
                />
              </div>
              <div style="margin-bottom: 16px;">
                <div class="tag-item">更新内容</div>
                <el-input
                  v-model="info.detail"
                  type="textarea"
                  :rows="12"
                  resize="none"
                  :autosize="false"
                  placeholder="请输入更新内容"
                  clearable
                />
              </div>
              <div style="width: 300px;float: right;text-align: right;">
                <div class="discDelete" style="width: 120px;height: 44px;line-height: 40px;" @click="showAdd = false;isEdit = false">取消</div>
                <div
                  class="discDelete"
                  style="width: 120px;height: 44px;line-height: 40px;color: #FFFFFF;background: #B4995A;margin-left: 12px;"
                  @click="confim()"
                >确定</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showMaster" class="tag">
          <div class="tag1" style="overflow: hidden;width: 340px;height: auto;" :style="!isEditTitle ? (isAddNew ? 'height: 286px' : 'height: 226px;') : 'height: 170px;'">
            <div class="tag2">{{ editMsg }}</div>
            <div style="font-size: 18px;">
              <div v-if="!isEditTitle && !isAddNew" style="margin-bottom: 20px;">
                <div class="tag-item">品牌名称</div>
                <el-select
                  v-model="selectValue"
                  :popper-append-to-body="false"
                  popper-class="tag"
                  placeholder="请选择"
                  @change="selectChange"
                >
                  <el-option
                    v-for="item in selectList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
              <div v-if="isAddNew" style="margin-bottom: 20px;">
                <div class="tag-item">品牌名称</div>
                <el-input
                  v-model="systemName"
                  style="display: inline-block;"
                  type="text"
                  maxlength="120"
                  placeholder="请输入品牌名称"
                  clearable
                />
              </div>
              <div v-if="isAddNew" style="margin-bottom: 20px;">
                <div class="tag-item">品牌code</div>
                <el-input
                  v-model="systemCode"
                  style="display: inline-block;"
                  type="text"
                  maxlength="120"
                  placeholder="请输入品牌code"
                  clearable
                />
              </div>
              <div style="margin-bottom: 20px;">
                <div class="tag-item">{{ isEditTitle ? '品牌' : '版本' }}名称</div>
                <el-input
                  v-model="masterName"
                  style="display: inline-block;"
                  type="text"
                  maxlength="120"
                  placeholder="请输入版本名称"
                  clearable
                />
              </div>
              <div style="width: 300px;text-align: center;">
                <div class="discDelete" style="width: 120px;height: 44px;line-height: 40px;" @click="cancel()">取消</div>
                <div
                  class="discDelete"
                  style="width: 120px;height: 44px;line-height: 40px;color: #FFFFFF;background: #B4995A;margin-left: 12px;"
                  @click="confimMaster()"
                >确定</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="showAddUser" class="tag">
          <div class="tag1" style="overflow: hidden;">
            <div class="tag2">灰度用户列表 ({{ total }})
              <svg
                style="float: right;margin-top: 5px;cursor: pointer"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="showAddUser = false;"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55635 0L0.142135 1.41422L6.64214 7.91422L0 14.5564L1.41421
                15.9706L8.05635 9.32843L14.2843 15.5564L15.6985 14.1421L9.47056 7.91421L15.5563 1.82843L14.1421
                0.414215L8.05635 6.5L1.55635 0Z"
                  fill="#8197A6"
                />
              </svg>
            </div>
            <div style="font-size: 18px;">
              <div v-if="!isEditUser" style="margin-bottom: 20px;display: inline-block;">
                <div class="tag-item" style="width: 60px;">搜索</div>
                <el-input
                  v-model="keyword"
                  style="display: inline-block;width: 300px;"
                  type="text"
                  maxlength="30"
                  placeholder="请输入账号"
                  clearable
                />
              </div>
              <div style="margin-bottom: 20px;display: inline-block;float: right;">
                <div v-if="!isEditUser && isAdmin" class="userButton" @click="editUsers()">
                  <svg style="vertical-align: text-top;" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.345 13.3335L13.7967 4.88182L12.6183 3.70348L4.16667 12.1552V13.3335H5.345ZM6.03583
                        15.0002H2.5V11.4643L12.0292 1.93515C12.1854 1.77893 12.3974 1.69116 12.6183
                        1.69116C12.8393 1.69116 13.0512 1.77893 13.2075 1.93515L15.565 4.29265C15.7212
                        4.44892 15.809 4.66085 15.809 4.88182C15.809 5.10279 15.7212 5.31471 15.565
                        5.47098L6.03583 15.0002ZM2.5 16.6668H17.5V18.3335H2.5V16.6668Z"
                      fill="#BDA16A"
                    />
                  </svg>
                  编辑列表
                </div>
                <div v-if="!isEditUser" style="margin-left: 16px;" class="userButton" @click="copy(info.users)">
                  <svg style="vertical-align: text-top;" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.83333 5.00008V2.50008C5.83333 2.27907 5.92113 2.06711 6.07741
                        1.91083C6.23369 1.75455 6.44565 1.66675 6.66667 1.66675H16.6667C16.8877
                        1.66675 17.0996 1.75455 17.2559 1.91083C17.4122 2.06711 17.5 2.27907
                        17.5 2.50008V14.1667C17.5 14.3878 17.4122 14.5997 17.2559 14.756C17.0996
                        14.9123 16.8877 15.0001 16.6667 15.0001H14.1667V17.5001C14.1667 17.9601
                        13.7917 18.3334 13.3275 18.3334H3.33917C3.22927 18.3341 3.12033 18.313
                        3.0186 18.2714C2.91687 18.2299 2.82436 18.1686 2.74638 18.0912C2.6684
                        18.0137 2.60649 17.9216 2.56421 17.8202C2.52193 17.7188 2.50011 17.61
                        2.5 17.5001L2.5025 5.83342C2.5025 5.37341 2.8775 5.00008 3.34167
                        5.00008H5.83333ZM4.16917 6.66675L4.16667 16.6667H12.5V6.66675H4.16917ZM7.5
                        5.00008H14.1667V13.3334H15.8333V3.33341H7.5V5.00008Z"
                      fill="#BDA16A"
                    />
                  </svg>
                  复制全部
                </div>
                <div v-if="isEditUser && isAdmin" style="margin-left: 16px;width: 94px;" class="userButton" @click="saveUsers()">
                  <svg style="vertical-align: text-top;" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.33333 12.6433L15.9933 4.98242L17.1725 6.16076L8.33333 14.9999L3.03 9.69659L4.20833 8.51826L8.33333 12.6433Z"
                      fill="#BDA16A"
                    />
                  </svg>
                  保存
                </div>
              </div>
              <div v-if="isEditUser && isAdmin" style="margin-bottom: 30px;">
                <el-input
                  v-model="users"
                  type="textarea"
                  :rows="22"
                  resize="none"
                  :autosize="false"
                  placeholder="请添加灰度用户"
                  clearable
                />
              </div>
              <div v-if="!isEditUser" style="color: #1F1F1F;height: 425px;overflow: auto;margin-top: 30px;">
                <div v-if="!showNewList()">
                  <div v-for="(t, i) in usersSearchList" :key="'user' + i" style="min-width: 180px;display: inline-block;margin-bottom: 30px;cursor: pointer;" @click="copy(usersSearchList)">
                    {{ t }}
                  </div>
                </div>
                <div v-else>
                  <div v-for="(t, i) in usersSearchList" :key="'user' + i" style="min-width: 180px;">
                    <div style="margin-bottom: 10px;">灰度用户追加时间：{{ t.createTime }}</div>
                    <div style="border: 1px solid #E5E8EC;padding: 10px 20px;margin-bottom: 10px;">
                      <div v-for="(s, p) in t.phone" :key="'phone' + p" style="min-width: 180px;display: inline-block;margin-bottom: 30px;cursor: pointer;" @click="copy(s)">
                        <span :style="s.includes('删除') ? 'color: red': ''">{{ s }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showLogin" class="tag">
        <div class="tag1" style="overflow: hidden;width: 464px;height: 267px;padding: 32px;">
          <div class="tag2" style="border-bottom: 0px;">登录
            <svg
              style="float: right;margin-top: 5px;cursor: pointer"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="showLogin = false"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.55635 0L0.142135 1.41422L6.64214 7.91422L0 14.5564L1.41421
                  15.9706L8.05635 9.32843L14.2843 15.5564L15.6985 14.1421L9.47056 7.91421L15.5563 1.82843L14.1421
                  0.414215L8.05635 6.5L1.55635 0Z"
                fill="#8197A6"
              />
            </svg>
          </div>
          <div style="margin-top: 36px;">
            <div style="margin-bottom: 16px;">
              <el-input
                id="username"
                v-model="username"
                style="width: 100%;height: 40px;"
                type="text"
                prefix-icon="el-icon-user"
                placeholder="请输入账号"
                clearable
              />
            </div>
            <div style="margin-bottom: 36px;">
              <el-input
                id="password"
                v-model="password"
                style="width: 100%;height: 40px;"
                type="password"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
                clearable
              />
            </div>
            <div class="login-button" @click="login()">登录</div>
          </div>
        </div>
      </div>
      <div v-if="showExcel" class="tag">
        <div class="tag1" style="overflow: hidden;width: 464px;height: 230px;padding: 32px;">
          <div class="tag2" style="border-bottom: 0px;">导出Excel
            <svg
              style="float: right;margin-top: 5px;cursor: pointer"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="showExcel = false"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.55635 0L0.142135 1.41422L6.64214 7.91422L0 14.5564L1.41421
                  15.9706L8.05635 9.32843L14.2843 15.5564L15.6985 14.1421L9.47056 7.91421L15.5563 1.82843L14.1421
                  0.414215L8.05635 6.5L1.55635 0Z"
                fill="#8197A6"
              />
            </svg>
          </div>
          <div style="margin-bottom: 16px;">
            <div class="excel-tag">品牌</div>
            <el-select v-model="systemValue" placeholder="请选择" style="width: 300px;" :popper-append-to-body="false" @change="getEditionList()">
              <el-option
                v-for="item in systemList"
                :key="item.systemCode"
                :label="item.systemName"
                :value="item.systemCode"
              >
              </el-option>
            </el-select>
          </div>
          <div style="margin-bottom: 36px;">
            <div class="excel-tag">业态</div>
            <el-select v-model="editionValue" placeholder="请选择" style="width: 300px;" :popper-append-to-body="false">
              <el-option
                v-for="item in editionList"
                :key="item.editionId"
                :label="item.editionName"
                :value="item.editionId"
              >
              </el-option>
            </el-select>
          </div>
          <div style="margin-top: 36px;">
            <div class="login-button" @click="getExcel()">导出</div>
          </div>
        </div>
      </div>
      <el-dialog
        :title="msg"
        :visible.sync="deleteShow"
        width="400px;"
        custom-class="customWidth"
        :close-on-click-modal="false"
      >
        <span>
          确定{{ msg }}吗？{{ msg === '删除品牌' ? '(品牌下的版本将一并删除)' : '' }}
        </span>
        <span slot="footer" class="dialog-footer">
          <el-button style="background: #FFFFFF;border-color: #B4995A;border: 1px solid #B4995A;color: #B4995A;" @click="deleteShow = false">取 消</el-button>
          <el-button type="primary" style="background: #BDA16A;color: #FFFFF;border-color: #BDA16A;" @click="sure()">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 右侧悬浮窗 -->
      <div v-if="showWin" class="float_win">
        <div class="float_win-title">
          灰度进度
          <p @click="showWin = false">×</p>
        </div>
        <div class="float_win-content">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column align="left" label="品牌/业态">
              <template slot-scope="scope">
                <a href="#" @click="clickedTag(scope.row)">{{ scope.row.brandEdition }}</a>
              </template>
            </el-table-column>
            <el-table-column prop="edition" align="center" width="100" label="版本号"></el-table-column>
            <el-table-column prop="grayTime" align="center" width="100" label="灰度开始日"></el-table-column>
            <el-table-column prop="userNum" align="center" width="80" label="灰度人数"></el-table-column>
            <el-table-column align="center" width="80" label="灰度天数">
              <template slot-scope="scope">
                <span :style="scope.row.daysDifference > 7 ? 'font-weight: bold;color: red;' : ''">{{ scope.row.daysDifference }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div id="drawerRight" class="float_win-button" @click="openDrawer">
          <i id="icon" class="el-icon-d-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixin from './mixin/index'
export default {
  mixins: [mixin]
}
</script>
<style>
.customWidth{
  width: 400px;
}
</style>
<style lang="less" scoped>
@import './mixin/index.less';
</style>
