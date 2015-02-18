"use strict";
function enter(event){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/cookie.cpp.o', false);
    xhr.send('auth=0'+'&'+'login='+document.getElementById('login').value+'&'+'pass='+document.getElementById('pass').value);
    if(xhr.responseText == "-") {
        showModalDynamic('Невірний email або пароль,<br/> спробуйте ще раз');
        return false;
    }
    if(xhr.responseText == "-noactive") {
        showModalDynamic('Аккаунт не активовано');
        return false;
    }
    var d = new Date;
    var prevCookie = document.cookie;
    d.setTime(d.getTime() + 600*1000);
    d = d.toUTCString();
    d = xhr.responseText + '; path=/' + '; expires=' + d;
    document.cookie = d;
    document.location.href = "office.html";
}

function Auth_Menu(options){
    var self = this;
    var elem = options.elem;

    document.getElementById(options.button).onclick = function () {
        if(document.getElementById(options.button)) elem.classList.toggle(options.class);
    };
    elem.onclick = function(){
        elem.classList.toggle(options.class);
        options.id1.value = '';
        options.id2.value = '';
    };
    elem.firstElementChild.onclick = function(event){
        event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
    };
    this.isOpen = function() {
        return elem.classList.contains(options.class);
    };
    this.setOpen = function(newIsOpen) {
        newIsOpen?self.classList.add(options.class):self.classList.remove('auth_open');
    };
}

var restoreRegistrationData;
function logout(){
    var date = new Date(1);
    document.cookie="auth=0; path=/; expires="+date.toUTCString();
    if (document.getElementById('auth_close')) {
        document.getElementById('auth_close').firstChild.innerHTML = 'Вхід';
        document.getElementById('auth_close').removeAttribute('href');
        document.getElementById('auth_close').id = 'auth_open';
    }
    if(document.getElementById('logout')) {
        document.getElementById('logout').firstChild.innerHTML = 'Зареєструватись';
        //document.getElementById('logout').removeAttribute('onclick');
        document.getElementById('logout').onclick = restoreRegistrationData;
        document.getElementById('logout').id = 'registration';
    }
    //document.location.href = '../project ISM/index.html'
}

document.onchange = function(){
    var ch = checkAuth();
    if(ch.isAuth) {
        if(document.getElementById('auth_open')) {
            document.getElementById('auth_open').firstChild.innerHTML = 'Кабінет';
            document.getElementById('auth_open').href = '../project ISM/cabinet.html';
            document.getElementById('auth_open').id = 'auth_close';
        }
        if(document.getElementById('registration')) {
            document.getElementById('registration').firstChild.innerHTML = 'Вихід';
            document.getElementById('registration').id = 'logout';
            document.getElementById('logout').onclick = logout;
        }
    }
    else {
        if (document.getElementById('auth_close')) {
            document.getElementById('auth_close').firstChild.innerHTML = 'Вхід';
            document.getElementById('auth_close').removeAttribute('href');
            document.getElementById('auth_close').id = 'auth_open';
        }
        if(document.getElementById('logout')) {
            document.getElementById('logout').firstChild.innerHTML = 'Зареєструватись';
            //document.getElementById('logout').removeAttribute('onclick');
            document.getElementById('logout').onclick = restoreRegistrationData;
            document.getElementById('logout').id = 'registration';
        }
    }
};
window.onresize = function(){
    if(screen.width < 400 || window.innerWidth < 390){
        center.style.maxWidth = '204px';
    }
    else center.style.maxWidth = '';
};

var signUp = function()
{
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/registration.cpp.o', false);
    var mail = document.getElementById('mail').value;
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('password2').value;
    xhr.send("mail="+mail+"&pass1="+pass1+"&pass2="+pass2);
    if(xhr.responseText == 228)
    {
        showModalDynamic("<strong>Помилка!</strong> Данна электронна адреса вже використовуеться.");
        return false;
    }
    else
    {
        window.location.replace("http://alex.inet-tech.org.ua/project%20ISM/success.html");
        return false;
    }
};