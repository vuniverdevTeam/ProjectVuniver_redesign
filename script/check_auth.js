"use strict";
function checkAuth() {
    var xhr = new XMLHttpRequest();
    if(!document.cookie) return {isAuth: false};
    else {
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/cookie.cpp.o', false);
        xhr.send(document.cookie);
        if(xhr.responseText[0] != "+") return {isAuth: false, data: '', field: ''};
        var data = xhr.responseText.split('+');
        data = data[1].split(')');
        var d = new Date;
        d.setTime(d.getTime() + 600*1000);
        d = d.toUTCString();
        d = document.cookie + '; path=/; expires=' + d;
				var date = new Date(0);
				document.cookie="auth=; path=/; expires="+date.toUTCString();
        document.cookie = d;
        return {isAuth: true, data: data[0], field: data[1]};
    }
}
