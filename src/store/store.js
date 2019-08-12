import Vue from "vue";
import indexStore from "./modules/indexStore";
import backgroundStore from "./modules/backgroundStore";
import Vuex from "vuex";
Vue.use(Vuex);
/*
 * vuex管理文件 公共区域
 */
export default new Vuex.Store({
  state: {
    fileUploadUrl: "" // 文件上传相关的统一地址（直接通过$store.state.fileUploadUrl获取即可）
  },
  mutations: {
    // 设置文件上传的统一地址
    setFileUploadUrl(state, options) {
      state.fileUploadUrl = options.fileUploadUrl;
    }
  },
  actions: {},
  getters: {},
  modules: {
    indexStore,
    backgroundStore
  }
});
