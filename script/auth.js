"use strict";
function enter(event){
    hideSignInAlert()
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/cookie.cpp.o', false);
    xhr.send('auth=0'+'&'+'login='+document.getElementById('login').value+'&'+'pass='+document.getElementById('pass').value);
    if(xhr.responseText == "-") {
        showSignInAlert("Невірний email або пароль, спробуйте ще раз");
    }
    else if(xhr.responseText == "-noactive") {
        showSignInAlert("Аккаунт не активовано");
}
    else {
        var d = new Date;
        var prevCookie = document.cookie;
        d.setTime(d.getTime() + 600 * 1000);
        d = d.toUTCString();
        d = xhr.responseText + '; path=/' + '; expires=' + d;
        document.cookie = d;
        if (document.URL.indexOf("index.html") == -1) refreshSelf();
        else document.location = "office.html";

    }
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
            document.getElementById('auth_open').href = '../project ISM/office.html';
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
        showModalDynamic("<strong>Помилка!</strong> Данна электронна адреса вже використовуеться.", 'alert');
        return false;
    }
    else
    {
        showModalDynamic("<strong>Дякуємо за реєстрацію</strong><div></div>Реєстрація успішно завершена.Протягом 5 хвилин на вашу електронну адресу прийде лист з посиланням для активації аккаунту.", 'success');
        return false;
    }
};
