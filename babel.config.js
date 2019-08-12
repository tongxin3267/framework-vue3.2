// babel配置文件、使用babel扩大兼容性
const plugins = [];
module.exports = {
  presets: [["@vue/app", { useBuiltIns: "entry" }]],
  plugins: plugins
};
