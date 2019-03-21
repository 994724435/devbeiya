var jweixin_manage = {};
var jweixin_option = {
    debug: false,
    appId: '',
    timestamp: '',
    nonceStr: '',
    signature: '',
    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
};
var jweixin_IsInit = false;
jweixin_manage = {
    config: function (opt) {
        return ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, jweixin_option, opt) : $.extend({}, jweixin_option);
    },
    init: function (opt) {
        var data = jweixin_manage.config(opt);
        $.post('/ajax/GetWeiXinJsApiData', { url: window.location.href, appId: data.appId }, function (json) {
            //alert(json.signature);
            jweixin_option.appId = json.appId;
            jweixin_option.timestamp = json.timestamp;
            jweixin_option.nonceStr = json.nonceStr;
            jweixin_option.signature = json.signature;

            data.appId = json.appId;
            data.timestamp = json.timestamp;
            data.nonceStr = json.nonceStr;
            data.signature = json.signature;

            wx.config({
                debug: jweixin_option.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: jweixin_option.appId, // 必填，公众号的唯一标识
                timestamp: jweixin_option.timestamp, // 必填，生成签名的时间戳
                nonceStr: jweixin_option.nonceStr, // 必填，生成签名的随机串
                signature: jweixin_option.signature,// 必填，签名，见附录1
                jsApiList: jweixin_option.jsApiList
            });
            jweixin_IsInit = true;
            //jweixin_share_manage.ShareToWeiXin(data.share_data);//微信分享js
            //jweixin_manage.UploadToWeiXin();//微信上传js
            wx.error(function (res) {
                //alert(res);
                //alert('wx.error: ' + JSON.stringify(res));
                //config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

            });
        }, 'json');
    },
    is_init: function () {
        return jweixin_IsInit;
    }
};

