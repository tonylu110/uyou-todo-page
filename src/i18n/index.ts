import zhCN from "./zh_cn";

const i18n = () => {
    var jsSrc = navigator.language.toLowerCase();
    if (jsSrc.indexOf('zh-cn') != -1) {
        return zhCN
    }  else {
        return zhCN
    }
}

export default i18n