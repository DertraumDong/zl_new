export default {
    install:function(Vue,opt){
        Vue.filter("formatDateCommon", function(value) {
            Date.prototype.Format = function (fmt) {
                var o = {
                    'M+': this.getMonth() + 1,
                    'd+': this.getDate(),
                    'h+': this.getHours(),
                    'm+': this.getMinutes(),
                    's+': this.getSeconds()
                };
                if (/(y+)/.test(fmt)) {
                    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                for (var k in o) {
                    if (new RegExp(`(${k})`).test(fmt)) {
                        let str = o[k] + '';
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
                    }
                }
                return fmt;
            }
            return new Date(value).Format("yyyy-MM-dd hh:mm:ss");
        }),
        Vue.prototype.hosturl = function () {
            /*return 'http://localhost:8201/';*/
            return "";
        }
    },

}
