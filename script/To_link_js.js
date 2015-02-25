var specialities;

function show_hide(id) {
    clear();
    document.getElementById(id).style.display = 'block';
}
function show_hideUn(id2) {
    document.getElementById(id2).style.display = 'none';
}

function removeAllChild(el) {
    while(el.childNodes.length > 0){
        el.removeChild(el.childNodes[el.childNodes.length-1]);
    }
    var rt=document.createElement("option");
    rt.innerHTML = '--виберіть предмет--';
    rt.value = "";
    rt.style.display='none';
    el.appendChild(rt);
    var rt2=document.createElement("option");
    //rt2.disabled="disabled";

    rt2.innerHTML = '--виберіть предмет--';
    rt2.value = "";
    el.appendChild(rt2);
}
function createOptions(el, arr1){
    for(var i=0; i<arr1.length; i++){
        var opt = document.createElement("option");
        opt.value=arr1[i];
        opt.appendChild(document.createTextNode(arr1[++i]));
        el.appendChild(opt);
    }
}


//предмети:
var arr = ['Українська мова і література','Математика','Історія України','Біологія','Географія','Фізика','Хімія','Англійська мова','Іспанська мова','Німецька мова','Російська мова','Французька мова'];
var arr_1 = [1,1,1,1,1,1,1,1,1,1,1,1];
function getElements(c)
{
    var el = document.getElementById(c);
    if(c=='sub1' || c=='save-sub1') {
        var opt = document.createElement("option");
        if(arr_1[0]==1) {
            opt.innerHTML = arr[0];
            opt.value=0;
            el.appendChild(opt);
        }
    }
    else{
        removeAllChild(el);
        for(var i=0; i<arr.length; i++) {
            var opt1 = document.createElement("option");
            if(arr_1[i]==1) {
                opt1.innerHTML = arr[i];
                opt1.value = i;
                el.appendChild(opt1);
            }

        }
    }

}
function clearFinder(){
    //alert(1);
    var el2 = document.getElementById('sub2');
    var el3 = document.getElementById('sub3');
    if(el2.value == ""){
        show_hideUn('apDiv1');
        show_hideUn('apDiv2');
        getElements('sub3');
        getElements('sub4');
    }
    else
    if(el3.value== ""){
        show_hideUn('apDiv2');
        getElements('sub4');
    }
}
function clear2(){
    //alert(1);
    var el2 = document.getElementById('save-sub2');
    var el3 = document.getElementById('save-sub3');
    if(el2.value == ""){
        show_hideUn('save-apDiv1');
        show_hideUn('save-apDiv2');
        getElements('save-sub3');
        getElements('save-sub4');
    }
    else
    if(el3.value== ""){
        show_hideUn('save-apDiv2');
        getElements('save-sub4');
    }
}
function clear() {
    var el1 = document.getElementById('sub1');
    var el2 = document.getElementById('sub2');
    var el3 = document.getElementById('sub3');
    var el4 = document.getElementById('sub4');
    var block1 = document.getElementById('apDiv1');
    var block2 = document.getElementById('apDiv2');
    var inp1 = document.getElementById('m3');
    var inp2 = document.getElementById('m4');
    for(var i = 0; i<arr_1.length; i++)
    {
        arr_1[i] = 1;
    }
    arr_1[el1.value] = 0;
    arr_1[el2.value] = 0;
    if(block1.style.display == 'block')arr_1[el3.value] = 0;
    else{
        el3.selectedIndex = 0;
        inp1.value = '';
    }
    if(block2.style.display == 'block')arr_1[el4.value] = 0;
    else{
        el4.selectedIndex = 0;
        inp2.value = '';
    }
}
function clearSave() {
    var el1 = document.getElementById('save-sub1');
    var el2 = document.getElementById('save-sub2');
    var el3 = document.getElementById('save-sub3');
    var el4 = document.getElementById('save-sub4');
    var block1 = document.getElementById('save-apDiv1');
    var block2 = document.getElementById('save-apDiv2');
    var inp1 = document.getElementById('save-m3');
    var inp2 = document.getElementById('save-m4');
    for(var i = 0; i<arr_1.length; i++)
    {
        arr_1[i] = 1;
    }
    arr_1[el1.value] = 0;
    arr_1[el2.value] = 0;
    if(block1.style.display == 'block')arr_1[el3.value] = 0;
    else{
        el3.selectedIndex = 0;
        inp1.value = '';
    }
    if(block2.style.display == 'block')arr_1[el4.value] = 0;
    else{
        el4.selectedIndex = 0;
        inp2.value = '';
    }
}
function Retur(v) {
    clear();
    getElements(v);
}
function ReturSave(v) {
    clearSave();
    getElements(v);
}

var k=0;
/*function labelClick(r){
 if(k==0)k=1;
 else
 k=0;
 if(k==1)document.getElementById(r).style.color = '#999999';
 else
 document.getElementById(r).style.color='#484A47'
 }*/




var values = ['','','','',''];
function labelClick(r) {
    var el = document.getElementById('return-radio');
    var el2 = document.getElementById('Label');
    el.style.fontSize = "12px";
    el2.innerHTML=(el2.innerHTML=='Додати фільтри')? 'Прибрати фільтри': 'Додати фільтри';

    if (!el.checked) {
        values[0] = document.getElementById('option').value;
        document.getElementById('option').value = '';
        values[1] = document.getElementById('option1').value;
        document.getElementById('option1').value = '';
        values[2] = document.getElementById('option2').value;
        document.getElementById('option2').value = '';
        values[3] = document.getElementById('option3').value;
        document.getElementById('option3').value = '';
        values[4] = document.getElementById('option4').value;
        document.getElementById('option4').value = '';
        show_hideUn('selected');
        document.getElementById(r).style.color='#484A47';
    }
    else {
        document.getElementById(r).style.color = '#999999';
        document.getElementById('option').value = values[0];
        document.getElementById('option1').value = values[1];
        document.getElementById('option2').value = values[2];
        document.getElementById('option3').value = values[3];
        document.getElementById('option4').value = values[4];
        show_hide('selected');
    }
}

function getElementsSave()
{
    var subj1 = document.getElementById('sub1');
    var numb1 = document.getElementById('m1');
    var subj2 = document.getElementById('sub2');
    var numb2 = document.getElementById('m2');
    var subj3 = document.getElementById('sub3');
    var numb3 = document.getElementById('m3');
    var subj4 = document.getElementById('sub4');
    var numb4 = document.getElementById('m4');
    var numb5 = document.getElementById('m5');
    while(subj1.childNodes.length > 0){
        subj1.removeChild(subj1.childNodes[subj1.childNodes.length-1]);
    }
    while(subj2.childNodes.length > 0){
        subj2.removeChild(subj2.childNodes[subj2.childNodes.length-1]);
    }
    while(subj3.childNodes.length > 0){
        subj3.removeChild(subj3.childNodes[subj3.childNodes.length-1]);
    }
    while(subj4.childNodes.length > 0){
        subj4.removeChild(subj4.childNodes[subj4.childNodes.length-1]);
    }

    if(restoreData.marks[3] != '')
    {
        if(restoreData.marks[4] == '')
        {
            getElements('sub4');
            show_hide('apDiv1');
            show_hide('apDiv2');
        }
        else
            show_hide('apDiv1');
        var rt2=document.createElement("option");
        rt2.innerHTML = arr[restoreData.subjs[2]];
        rt2.value = restoreData.subjs[2];
        subj3.appendChild(rt2);
    }
    if(restoreData.marks[3] == '')
    {
        clearFinder();
        show_hide('apDiv1');
    }
    if(restoreData.marks[4] != '')
    {
        show_hide('apDiv2');
        var rt3=document.createElement("option");
        rt3.innerHTML = arr[restoreData.subjs[3]];
        rt3.value = restoreData.subjs[3];
        subj4.appendChild(rt3);
    }
    var rt=document.createElement("option");
    rt.innerHTML = arr[0];
    rt.value = 0;
    subj1.appendChild(rt);
    var rt1=document.createElement("option");
    rt1.innerHTML = arr[restoreData.subjs[1]];
    rt1.value = restoreData.subjs[1];
    subj2.appendChild(rt1);

    numb1.value = restoreData.marks[1];
    numb2.value = restoreData.marks[2];
    numb3.value = restoreData.marks[3];
    numb4.value = restoreData.marks[4];
    numb5.value = restoreData.marks[0];
}

var ch;
window.onload = function () {
    //document.getElementById('sub1').disabled="disabled";
    document.getElementById('message').hidden = "hidden";
    document.getElementById('sub1').disabled="disabled";
    document.getElementById('AT-1').getElementsByTagName("select")[0].disabled="disabled";
    var xhr = new XMLHttpRequest();
    if(window.restoreData !== undefined && window.restoreData.subjs[0] !== undefined){
        clear();
        getElementsSave();
    }
    else
    {
        getElements('sub1');
        getElements('sub2');
        getElements('sub3');
        getElements('sub4');
    }
    ch = checkAuth();
    /*if(id["isAuth"] == true)
    {
        //document.getElementById('enter').innerText = "Особистий Кабінет";
        document.getElementById('enter').href = "office.html";
    }*/


    //спеціальності
    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
    xhr.send('spec=0');
    var i, j;
    specialities = eval('(' + xhr.responseText + ')');
    for(i = 0; i < specialities.length; i += 2)
        for(j = i + 2; j < specialities.length; j += 2)
            if(specialities[i] == specialities[j]){
                specialities.splice(j, 2);
                j -= 2;
            }
    obj = document.getElementById('option4');
    if(window.restoreData !== undefined && restoreData.Spec !== '')
    {
        if(flag == 0){
            labelClick('Label');
            var el3 = document.getElementById('return-radio');
            el3.checked = true;
            flag = 1;
            var el2 = document.getElementById('Label');
            el2.innerHTML='Прибрати фільтри';
        }
        show_hide('selected');
        createOptionsSave(obj, specialities, restoreData.Spec);
        if(restoreData.Spec == '')showNames(restoreData.reg);
    }
    else
        createOptions(obj, specialities);

    //області:
    var arr1;

    xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
    xhr.send('reg=0');
    arr1 = eval('(' + xhr.responseText + ')');
    var obj = document.getElementById('option');
    var flag = 0;
    if(window.restoreData !== undefined && restoreData.reg != '')
    {
        var el = document.getElementById('return-radio');
        el.checked = true;
        labelClick('Label');
        flag=1;
        var el2 = document.getElementById('Label');
        el2.innerHTML='Прибрати фільтри';
        show_hide('selected');
        createOptionsSave(obj, arr1, restoreData.reg);
        if(restoreData.city == '')showNames(restoreData.reg);
    }
    else
        createOptions(obj, arr1);


    center = document.getElementsByClassName('auth_center')[0];
    if(screen.width < 400){
        center.style.maxWidth = '205px';
        document.body.style.zoom = '380%';
    }
    obj1 = document.getElementById('option');
    obj2 = document.getElementById('option1');
    obj3 = document.getElementById('option2');
    obj4 = document.getElementById('option3');
    obj5 = document.getElementById('option4');
    if(window.restoreData !== undefined && restoreData.city != '')showNames(obj1.value);
    if(window.restoreData !== undefined && restoreData.Univer != '')showNames1(obj2.value);
    if(window.restoreData !== undefined && restoreData.Fac != '')showNames2(obj3.value);
    if(window.restoreData !== undefined && restoreData.Spec != '' && obj4.value != '')showNames3(obj4.value);
    if(window.restoreData !== undefined && restoreData.Spec != '' && obj4.value == '')showNames3(0);
    if(window.restoreData !== undefined && restoreData.Spec == '' && obj4.value != '')showNames3(obj4.value);
    
    //Проверка на наличие записи в кабинете
    if(window.location.pathname == '/project%20ISM/index.html'){restoreCabinetData();}
    if(obj.value != '' && obj1.value != '' && obj2.value != '' && obj3.value != '' && obj4.value != ''){cabPlus();}
    if(obj.value == '' || obj1.value == '' || obj2.value == '' || obj3.value == '' || obj4.value == '')checkAsAdded();
    //

};

function checkAsAdded()
{
    var id = ch;
		if(!id.isAuth)return;
    var xhrC = new XMLHttpRequest();
    xhrC.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/checkAsAdded.cpp.o', false);
    xhrC.send("id="+id['field']);
    var arr = xhrC.responseText.split("~");
    var table = document.getElementById("inp-table");
    var len = table.rows.length;
    var numb = parseInt(arr[0]);
    for(var r = 1; r<len; r++)
    {
        for(var z = 1; z<=arr[0]; z++)
        {
            if(table.rows[r].cells[4].innerText == arr[z] && table.rows[r].cells[5].innerText == arr[numb+z])
            {
                table.rows[r].cells[6].innerText = "Збережено";
                table.rows[r].cells[6].className += ' disabled';
            }
        }
    }
}

function checkAsAdded_input()
{
    var id = checkAuth();
    if(!id.isAuth)return;
    var xhrC = new XMLHttpRequest();
    xhrC.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/checkAsAdded.cpp.o', false);
    xhrC.send("id="+id['field']);
    var arr = xhrC.responseText.split("~");
    var button_text = document.getElementById('save_button_input');
    var numb = parseInt(arr[0]);
        for(var z = 1; z<=arr[0]; z++)
        {
            if(document.getElementById('F').innerText == arr[z] && document.getElementById('S').innerText == arr[numb+z])
            {
                button_text.innerHTML = "Збережено";
                button_text.className += ' disabled';
            }
        }
}

function createOptionsSave(el, arr1, index)
{
    while(el.childNodes.length > 0){
        el.removeChild(el.childNodes[el.childNodes.length-1]);
    }
    for(var i=0; i<arr1.length; i++){
        var opt = document.createElement("option");
        opt.value=arr1[i];
        if(arr1[i] == index)
        {
            opt.selected = true;
        }
        opt.appendChild(document.createTextNode(arr1[++i]));
        el.appendChild(opt);
    }
}
/*var restoreData = { marks : [150, 170, 180, '','' ], subjs : [1,2,'',''], reg : 1, city : 1, Univer : 1881, Fac : 1591, Spec : 21}*/
var restoreVisible = [0,0,0,0,0];
//ВНЗ:
/*xhr.onreadystatechange = function() {
 if (xhr.readyState != 4) return;
 };*/

function showNames(v){
    if(+v >= 1) {
        var arr;
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
        xhr.send('city=' + v);
        arr = eval('(' + xhr.responseText + ')');
        var el = document.getElementById('option1');
        removeAllChild_city(el);
        if(window.restoreData !== undefined && restoreData.city != '' && restoreVisible[1] == 0)
        {
            restoreVisible[1] = 1;
            show_hide('selected');
            createOptionsSave(el, arr, restoreData.city);
            if(restoreData.Univer == '')showNames1(restoreData.city);
        }
        else
            createOptions(el, arr);

    }
        var els = document.getElementById('option4');
        if(els.value == '')createOptions(els, specialities);
        else
        createOptionsSave(els, specialities, els.value);
}
function showNames1(v) {
    if(+v >= 1) {
        var arr;
        var el = document.getElementById('option2');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
        xhr.send('univer=' + v);
        arr = eval('(' + xhr.responseText + ')');
        removeAllChild_univ(el);
        if(window.restoreData !== undefined && restoreData.Univer != '' && restoreVisible[2] == 0)
        {
            restoreVisible[2] = 1;
            show_hide('selected');
            createOptionsSave(el, arr, restoreData.Univer);
            if(restoreData.Fac == '')showNames2(restoreData.Univer);
        }
        else
            createOptions(el, arr);
    }
        var els = document.getElementById('option4');
        if(els.value == '')createOptions(els, specialities);
        else
            createOptionsSave(els, specialities, els.value);
}
function showNames2(v) {
    if(+v >= 1) {
        var arr, arr1, el = document.getElementById('option3');
        var xhr = new XMLHttpRequest(), i;
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
        xhr.send('fac=' + v);
        arr = eval('(' + xhr.responseText + ')');
        removeAllChild_faculty(el);
        if(window.restoreData !== undefined && restoreData.Fac != '' && restoreVisible[3] == 0)
        {
            restoreVisible[3] = 1;
            show_hide('selected');
            createOptionsSave(el, arr, restoreData.Fac);
            if(restoreData.Spec == '')showNames3(restoreData.Fac);
        }
        else
            createOptions(el, arr);

        var el2 = document.getElementById('option4');
        removeAllChild_spec(el2);
        for(i = 0; i < arr.length; i += 2){
            xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
            xhr.send('spec=' + arr[i]);
            arr1 = eval('(' + xhr.responseText + ')');
            if(window.restoreData !== undefined && restoreData.Spec != '' && restoreVisible[4] == 0)
            {
                restoreVisible[4] = 1;
                show_hide('selected');
                createOptionsSave(el2, arr1, restoreData.Spec);
            }
            else
                createOptions(el2, arr1);
        }
    }
    else {
        removeAllChild_spec(document.getElementById('option4'));
        createOptions(document.getElementById('option4'), specialities);

    }
}
function showNames3(v) {
    if(+v >= 1) {
        var arr;
        var el = document.getElementById('option4');
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
        xhr.send('spec=' + v);
        arr = eval('(' + xhr.responseText + ')');
        removeAllChild_spec(el);
        if(window.restoreData !== undefined && restoreData.Spec != '' && restoreVisible[4] == 1)
        {
            restoreVisible[4] = 2;
            show_hide('selected');
            createOptionsSave(el, arr, restoreData.Spec);
        }
        else
        if(window.restoreData !== undefined && restoreData.Spec != '' && restoreVisible[4] == 0)
        {
            restoreVisible[4] = 1;
            show_hide('selected');
            createOptionsSave(el, arr, restoreData.Spec);
        }
        else
        {
            createOptions(el, arr);
        }
    }
    else if(document.getElementById('option2').value >=1){
        var arr, arr1, el = document.getElementById('option3');
        var xhr = new XMLHttpRequest(), i;
        xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
        xhr.send('fac=' + document.getElementById('option2').value);
        arr = eval('(' + xhr.responseText + ')');

        var el2 = document.getElementById('option4');
        removeAllChild_spec(el2);
        for(i = 0; i < arr.length; i += 2){
            xhr.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/ajaxNew.cpp.o', false);
            xhr.send('spec=' + arr[i]);
            arr1 = eval('(' + xhr.responseText + ')');
            if(window.restoreData !== undefined && restoreData.Spec != '')
            {
                show_hide('selected');
                createOptionsSave(el2, arr1, restoreData.Spec);
            }
            else
                createOptions(el2, arr1);
            arr1.length = 0;
        }
    }
}
function removeAllChild_city(opt1)
{
    while(opt1.childNodes.length > 0){
        opt1.removeChild(opt1.childNodes[opt1.childNodes.length-1]);
    }
    var rt=document.createElement("option");
    rt.innerHTML = '--виберіть місто--';
    rt.value = "";
    rt.style.display='none';
    opt1.appendChild(rt);
    var rt2=document.createElement("option");
    //rt2.disabled="disabled";

    rt2.innerHTML = '--виберіть місто--';
    rt2.value = "";
    opt1.appendChild(rt2);
}
function removeAllChild_univ(opt2)
{
    while(opt2.childNodes.length > 0){
        opt2.removeChild(opt2.childNodes[opt2.childNodes.length-1]);
    }
    var rt=document.createElement("option");
    rt.innerHTML = '--виберіть університет--';
    rt.value = "";
    rt.style.display='none';
    opt2.appendChild(rt);
    var rt2=document.createElement("option");
    //rt2.disabled="disabled";

    rt2.innerHTML = '--виберіть університет--';
    rt2.value = "";
    opt2.appendChild(rt2);
}
function removeAllChild_faculty(opt3)
{
    while(opt3.childNodes.length > 0){
        opt3.removeChild(opt3.childNodes[opt3.childNodes.length-1]);
    }
    var rt=document.createElement("option");
    rt.innerHTML = '--виберіть факультет--';
    rt.value = "";
    rt.style.display='none';
    opt3.appendChild(rt);
    var rt2=document.createElement("option");
    //rt2.disabled="disabled";

    rt2.innerHTML = '--виберіть факультет--';
    rt2.value = "";
    opt3.appendChild(rt2);
}
function removeAllChild_spec(opt4)
{
    while(opt4.childNodes.length > 0){
        opt4.removeChild(opt4.childNodes[opt4.childNodes.length-1]);
    }
    var rt=document.createElement("option");
    rt.innerHTML = '--виберіть спеціальність--';
    rt.value = "";
    rt.style.display='none';
    opt4.appendChild(rt);
    var rt2=document.createElement("option");
    //rt2.disabled="disabled";

    rt2.innerHTML = '--виберіть спеціальність--';
    rt2.value = "";
    opt4.appendChild(rt2);
}
function clearForm(levelClear) {
    var opt1 = document.getElementById('option1');
    var opt2 = document.getElementById('option2');
    var opt3 = document.getElementById('option3');
    var opt4 = document.getElementById('option4');
    if(levelClear == 5) {
        removeAllChild_city(opt1);
        removeAllChild_univ(opt2);
        removeAllChild_faculty(opt3);
    }
    if(levelClear == 4) {
        removeAllChild_univ(opt2);
        removeAllChild_faculty(opt3);
    }
    if(levelClear == 3) {
        removeAllChild_faculty(opt3);
        removeAllChild_spec(opt4);
    }
    if(levelClear == 2) {
        removeAllChild_spec(opt4);
    }
}

var check;
check = function () {
    var pass1 = document.getElementById('password1').value;
    var pass2 = document.getElementById('password2').value;
    var submitButton = document.getElementById('button-calculate');
    if(pass1 != pass2)
    {
        submitButton.disabled = true;
    }
    else
    {
        submitButton.disabled = false;
    }
};

function restoreCabinetData(){
    var what = ch;
    if(what["field"] != undefined)
    {
        var xhr5 = new XMLHttpRequest();
        xhr5.open('POST', 'http://alex.inet-tech.org.ua/cgi-bin/SELECT_objects.cpp.o', false);
        var id = ch;
        xhr5.send(id['field']);
        var date = eval('('+xhr5.responseText+')');//Вот тут лежат оценки и предметы в таком порядке: атестат(оценка), укр мова(оценка), предмет2, оценка2, предмет3,оценка3, предмет4, оценка4.
        clear();
        var subj1 = document.getElementById('save-sub1');
        var numb1 = document.getElementById('save-m1');
        var subj2 = document.getElementById('save-sub2');
        var numb2 = document.getElementById('save-m2');
        var subj3 = document.getElementById('save-sub3');
        var numb3 = document.getElementById('save-m3');
        var subj4 = document.getElementById('save-sub4');
        var numb4 = document.getElementById('save-m4');
        var numb5 = document.getElementById('save-m5');
        while(subj1.childNodes.length > 0){
            subj1.removeChild(subj1.childNodes[subj1.childNodes.length-1]);
        }
        while(subj2.childNodes.length > 0){
            subj2.removeChild(subj2.childNodes[subj2.childNodes.length-1]);
        }
        while(subj3.childNodes.length > 0){
            subj3.removeChild(subj3.childNodes[subj3.childNodes.length-1]);
        }
        while(subj4.childNodes.length > 0){
            subj4.removeChild(subj4.childNodes[subj4.childNodes.length-1]);
        }
        if(date.marks[3] != '' && date.marks[3] != 0)
        {
            if(date.marks[4] == '' || date.marks[4] == 0)
            {
                getElements('save-sub4');
                show_hide('apDiv1');
                show_hide('apDiv2');
            }
            else
                show_hide('apDiv1');
            var rt2=document.createElement("option");
            rt2.innerHTML = arr[date.subjs[2]];
            rt2.value = date.subjs[2];
            subj3.appendChild(rt2);
        }
        if(date.marks[3] == ''  || date.marks[3] == 0)
        {
            clear2();
            show_hide('apDiv1');
        }
        if(date.marks[4] != '' && date.marks[4] != 0)
        {
            show_hide('apDiv2');
            var rt3=document.createElement("option");
            rt3.innerHTML = arr[date.subjs[3]];
            rt3.value = date.subjs[3];
            subj4.appendChild(rt3);
        }
        var rt=document.createElement("option");
        rt.innerHTML = arr[0];
        rt.value = 0;
        subj1.appendChild(rt);
        var rt1=document.createElement("option");
        rt1.innerHTML = arr[date.subjs[1]];
        rt1.value = date.subjs[1];
        subj2.appendChild(rt1);

        numb1.value = date.marks[1];
        numb2.value = date.marks[2];
        if(date.marks[3]!=0)numb3.value = date.marks[3];
        if(date.marks[4]!=0)numb4.value = date.marks[4];
        numb5.value = date.marks[0];
    }
}

function refreshSelf()
{
    document.location = document.URL;
}
