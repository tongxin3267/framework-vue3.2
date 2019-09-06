import request from "src/config/axios";
/*
 * 文件说明： 本文件综合管理本项目所有的接口内容，请将相关接口按要求写入：
 *   要求：1、不能修改已经存在的函数，以避免冲突
 *         2、函数命名尽可能以模块名+函数名的形式来命名。如： platformGetProgrammeList(){} （-platform为模块名 -Get为获取方式 -ProgrammeList 函数名）
 *         3、建议：在各个模块开头的部分做一个模块说明。如：（平台管理模块：本模块包含基础设施、应用管理、用户信息三个子模块）
 *         4、建议: 每个函数做好一个简单功能介绍。如：platformGetProgrammeList(){} （// 平台管理-获取科目方案列表内容）
 */
/*  编写格式如下：
    export function platformGetProgrammeList(data) {  // 接口名（参数）
      return request({
        mode: VUE_APP_API_Test, // （默认可以不写）使用路径，根据需求设置(这里的名称要与配置路径名称要一样)
        url: '/user/login', // 接口地址
        method: 'post', // 接口方式
        data // 接口参数 直接使用data数据将放在请求体中 ，直接使用params: data 数据将放在url的链接上
      })
    }
    使用如下：
    import {platformGetProgrammeList} from '@/views/index/store/api'
    platformGetProgrammeList(data).then(res => {  // data是传入参数，根据需要修改
      console.log(res); // 自定义
    })
/***************************************************************/
/*
 * testApiService
 * @param {Object} data 接口入参
 */
export function testApiService(data) {
  return request({
    method: "post",
    url: "/testApiService",
    params: data,
    mode: "VUE_APP_API_Test" // 这个可以根据需要配置
  });
}

/* ========== 模块名称 ========== */
