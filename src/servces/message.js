export default {
    install(Vue) {
        Vue.prototype.$message = function (html) {
            // eslint-disable-next-line no-undef
            M.toast({html})
        }
    }
}