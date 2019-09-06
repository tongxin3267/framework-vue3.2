/*
  正则表达式与校验定义文件
  建议：命名按照 reg + 对应的内容的形式命名
*/
// 手机号
export const regMobile = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
// 邮箱
export const regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
// 密码
export const regPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])(.{6,20})$/;
