/**
 * Govnocoded by Arsen on 20.01.2015.
 * Modified by AlexSan;
 */
var fieldArr1 = new Array();
var fieldArr2 = new Array();
var full = true;

function isNumber(obj) {
    var number = +obj;
    return (obj === String(number));
}

function validate(obj, i, arr)
{
    if (!obj.value) {
        obj.style.borderColor = "red";
        full = false;
    }
}

function displayMessage(obj,i,arr){
    if (obj.style.borderColor == "red") {
        document.getElementById("popup").innerHTML = "Значення введені невірно. <br/>Значення має бути у межах від 1 до 200";
        return false;
    }
}

function func() {
    document.getElementById("popup").innerHTML = "";
    full = true;

    fieldArr1.forEach(validate);

    if (!full) {
        document.getElementById("popup").innerHTML = "Заповніть, будь ласка, всі поля";
        showPopup();
        return false;
    }

    fieldArr1.forEach(displayMessage);

    if (document.getElementById("popup").innerHTML == "Заповніть, будь ласка, всі поля" || document.getElementById("popup").innerHTML == "Значення введені невірно. <br/>Значення має бути у межах від 1 до 200")
    {
        showPopup();
        return false;
    }
    else document.getElementById('loading').style.visibility='visible';


    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/distribution.cpp.o', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        var message = xhr.responseText;
        if (message[0] != 'Б') {
            var i;
            for (i = 0; i < message.length; ++i) {
                //Это я переписывать не собираюсь, гребанная черная магия.
                if (message[i] == '1' || message[i] == '2') {
                    document.getElementsByName("M1")[0].style.borderColor = "red";
                }
                if (message[i] == '3' || message[i] == '4') {
                    document.getElementsByName("D1")[0].style.borderColor = "red";
                }
                if (message[i] == '5' || message[i] == '6') {
                    document.getElementsByName("M2")[0].style.borderColor = "red";
                }
                if (message[i] == '7' || message[i] == '8') {
                    document.getElementsByName("M3")[0].style.borderColor = "red";
                }
                if (message[i] == '9' || message[i] == 'a') {
                    document.getElementsByName("D3")[0].style.borderColor = "red";
                }
                if (message[i] == 'b' || message[i] == 'c') {
                    document.getElementsByName("M4")[0].style.borderColor = "red";
                }
            }
            document.getElementById("popup").innerHTML = "Значення введені невірно. <br/>Значення має бути у межах від 1 до 200";
            showPopup();
            document.getElementById('loading').style.visibility='hidden';
        }
        else {
            document.getElementById("popup").innerHTML = message;
            showPopup();
            document.getElementById('loading').style.visibility='hidden';
        }
    };
    switchFillerValue(0);
    setTimeout(function (){xhr.send('M1=' + document.getElementsByName('M1')[0].value + '&D1=' + document.getElementsByName('D1')[0].value +
    '&M2=' + document.getElementsByName('M2')[0].value + '&D2=' + document.getElementsByName('D2')[0].value +
    '&M3=' + document.getElementsByName('M3')[0].value + '&D3=' + document.getElementsByName('D3')[0].value +
    '&M4=' + document.getElementsByName('M4')[0].value + '&D4=' + document.getElementsByName('D4')[0].value)}, 200); //Таймаут для того что бы ебучий хром показал сообщение
}

function func2() {
    document.getElementById("popup").innerHTML = "";
    var full = true;

    fieldArr2.forEach(validate);

    if (!full) {
        document.getElementById("popup").innerHTML = "Заповніть, будь ласка, всі поля";
        showPopup();
        return;
    }

    fieldArr2.forEach(displayMessage);

    if (document.getElementById("popup").innerHTML == "Заповніть, будь ласка, всі поля" || document.getElementById("popup").innerHTML == "Значення введені невірно. <br/>Значення має бути у межах від 1 до 200")
    {
        showPopup();
        return false;
    }
    else document.getElementById('loading').style.visibility='visible';


    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/distribution.cpp.o', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        var message = xhr.responseText;
        if (message[0] != 'Б') {
            var i;
            for (i = 0; i < message.length; ++i) {
                if (message[i] == '0' || message[i] == '1') {
                    document.getElementsByName("L1")[0].style.borderColor = "red";
                }
                if (message[i] == '2' || message[i] == '3') {
                    document.getElementsByName("R1")[0].style.borderColor = "red";
                }
                if (message[i] == '4' || message[i] == '5') {
                    document.getElementsByName("L2")[0].style.borderColor = "red";
                }
                if (message[i] == '6' || message[i] == '7') {
                    document.getElementsByName("R2")[0].style.borderColor = "red";
                }
                if (message[i] == '8'){
                    document.getElementsByName("L1")[0].style.borderColor = "red";
                    document.getElementsByName("R1")[0].style.borderColor = "red";
                }
                if (message[i] == '9'){
                    document.getElementsByName("L2")[0].style.borderColor = "red";
                    document.getElementsByName("R2")[0].style.borderColor = "red";
                }
            }
            switchFillerValue(1);
            document.getElementById("popup").innerHTML = "Значення введені невірно. <br/>Значення має бути у межах від 1 до 200";
            showPopup();
            document.getElementById('loading').style.visibility='hidden';
        }
        else {
            document.getElementById("popup").innerHTML = message;
            showPopup();
            document.getElementById('loading').style.visibility='hidden';
        }
    };
    switchFillerValue(1);
    setTimeout(function (){xhr.send('L1='+document.getElementsByName('L1')[0].value+'&R1='+document.getElementsByName('R1')[0].value+
    '&L2='+document.getElementsByName('L2')[0].value+'&R2='+document.getElementsByName('R2')[0].value)}, 200); //Таймаут для того что бы ебучий хром показал сообщение
}

function func3(obj, i, arr) {
    var name = obj.name;
    if (name == "M1" || name == "D1" || name == "M2" || name == "D2") {

    }
    obj.style.borderColor = "black";
    if (!obj.value) return;
    if (!isNumber(obj.value)) {
        obj.style.borderColor = "red";
    }
}


function switchAlgo()
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function ()
        {
            if (xhr.readyState != 4) return;
            if (xhr.responseText == 0)
            {
                document.getElementById('right').className = "switch inline active";
                document.getElementById('right').removeEventListener("click", switchAlgo);

                document.getElementById('left').className = "switch inline notactive";
                document.getElementById('left').addEventListener("click", switchAlgo);
                xhr.onreadystatechange = function(){};
            }
            else
            {
                document.getElementById('left').className = "switch inline active";
                document.getElementById('right').addEventListener("click", switchAlgo);

                document.getElementById('right').className = "switch inline notactive";
                document.getElementById('left').removeEventListener("click", switchAlgo);
                xhr.onreadystatechange = function(){};
            }

        };
    xhr.open("GET","scripts/changeMode.php", true);
    xhr.send();
}

function switchFillerValue(newMode)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET","scripts/changeFilling.php?mode="+newMode, false);
    xhr.send();

    if (newMode == 1) document.getElementById('last-gen').innerHTML = "База зараз заповнена по рівномірному розподілу";
    else document.getElementById('last-gen').innerHTML = "База зараз заповнена по нормальному розподілу";
}

function showPopup(){
    document.getElementById('popup-bg').style.visibility = "visible";
}


function hidePopup(){
    document.getElementById('popup-bg').style.visibility = "hidden";
}

window.onload = function init() {
    fieldArr1[0] = document.getElementsByName("M1")[0];
    fieldArr1[1] = document.getElementsByName("D1")[0];
    fieldArr1[2] = document.getElementsByName("M2")[0];
    fieldArr1[3] = document.getElementsByName("D2")[0];
    fieldArr1[4] = document.getElementsByName("M3")[0];
    fieldArr1[5] = document.getElementsByName("D3")[0];
    fieldArr1[6] = document.getElementsByName("M4")[0];
    fieldArr1[7] = document.getElementsByName("D4")[0];
    fieldArr2[0] = document.getElementsByName("L1")[0];
    fieldArr2[1] = document.getElementsByName("R1")[0];
    fieldArr2[2] = document.getElementsByName("L2")[0];
    fieldArr2[3] = document.getElementsByName("R2")[0];

    fieldArr1.forEach(func3);
    fieldArr2.forEach(func3);

    document.getElementById('loading').style.visibility='hidden';

    document.getElementsByClassName('switch inline notactive')[0].addEventListener("click", switchAlgo);
}