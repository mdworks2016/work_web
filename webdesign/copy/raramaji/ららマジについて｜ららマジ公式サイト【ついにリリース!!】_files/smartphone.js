// iPhoneまたは、Androidの場合は振り分けを判断
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    if(confirm('ららマジ このサイトにはスマートフォン用のサイトがあります。表示しますか？')) {
        location.href = 'http://raramagi.wrightflyer.net/sp/';
    }
}
