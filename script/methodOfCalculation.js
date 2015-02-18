/**
 * Created by SSP on 30.01.2015.
 */
var auth;
var reg;
window.onload = function () {

    center = document.getElementsByClassName('auth_center')[0];
    auth = new Auth_Menu({
        elem: document.getElementById('auth'),
        id1: document.getElementById('login'),
        id2: document.getElementById('pass'),
        button: 'auth_open',
        class: 'auth_open'
    });
    reg = new Auth_Menu({
        elem: document.getElementById('reg'),
        id1: document.getElementById('login'),
        id2: document.getElementById('pass'),
        button: 'registration',
        class: 'reg_open'
    });
    if(screen.width < 400){
        center.style.maxWidth = '205px';
        document.body.style.zoom = '380%';
    }
    var ch = checkAuth();
    if(ch.isAuth) {
				document.getElementById('name').appendChild(document.createTextNode('Ви увійшли як: ' + ch.data));
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
};
