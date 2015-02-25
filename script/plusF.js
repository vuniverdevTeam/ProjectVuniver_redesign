"use strict";
function getInfo(event)
{
    lessfilters_addFacultSpecToCabinet(event);
}

function lessfilters_addFacultSpecToCabinet(event)
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
        event.target.className = "btn btn-success disabled";
    }
    else {
        showModalSign();
    }
}

function fullfilters_addFacultSpecToCabinet()
{
    var facult = document.getElementById('F').innerHTML;
    var spec = document.getElementById('S').innerHTML;
    var id = checkAuth();
    if(id["isAuth"] != false)
    {

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/plusFavourite.cpp.o', false);
        xhr.send('Facult='+facult+'&Spec='+spec+'&userid='+id['field']);
        event.target.innerHTML = "Збережено";
        event.target.className = "btn btn-success disabled";
    }
    else {
        showModalSign();
    }
}




