/**
 * Created by Cheese on 18.02.2015.
 */
function showModalTry()
{
    document.getElementById('try').style.display="block";
}
function hideModalTry()
{
    document.getElementById('try').style.display="none";
}
function showModalSign()
{
    document.getElementById('auth').style.display="block";
}
function hideModalSign()
{
    document.getElementById('auth').style.display="none";
}
function showModalSignUp()
{
    document.getElementById('reg').style.display="block";
}
function hideModalSignUp()
{
    document.getElementById('reg').style.display="none";
}
function showModalDynamic(text)
{
    document.getElementById('dynamic').style.display="block";
    document.getElementById('dynamic-text').innerHTML=text;
}
function hideModalDynamic()
{
    document.getElementById('dynamic').style.display="none";
    document.getElementById('dynamic-text').innerHTML="";
}
function showSettings()
{
    document.getElementById('setTing').style.display ="block";
}

function hideSettings()
{
    document.getElementById('setTing').style.display ="none";
}