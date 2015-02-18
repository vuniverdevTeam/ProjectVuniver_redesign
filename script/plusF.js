"use strict";
function getInfo(event)
{
    var values = [];
    var myRow = event.target.parentNode.innerHTML;
    var str = myRow.replace(/<td>/g,'~');
    var str1 = str.replace(new RegExp("</td>",'g'),'~');
    values = str1.split('~');
    var percent_b = values[2].substring(17,21);
    var percent_c = values[3].substring(19,23);
    var id = checkAuth();
    if(id["isAuth"] != false)
    {

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/plusFavourite.cpp.o', false);
        xhr.send('Facult='+values[7].toString()+'&Spec='+values[9].toString()+'&userid='+id['field']);
        event.target.innerHTML = "Збережено";

    }
		else {
        document.getElementById('auth').classList.toggle('auth_open');
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
}



