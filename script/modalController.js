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
    hideSignInAlert();
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
function showModalDynamic(text, mode)
{
    document.getElementById('dynamic').style.display="block";
    if (mode == "alert")
    {
        document.getElementById('success-msg').style.display = 'none';
        document.getElementById('alert-msg').style.display = 'block';
        document.getElementById('dynamic-text-alert').innerHTML=text;
    }
    else if (mode == "success")
    {
        document.getElementById('alert-msg').style.display = 'none';
        document.getElementById('success-msg').style.display = 'block';
        document.getElementById('dynamic-text-success').innerHTML=text;
    }
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
function showSignInAlert(text)
{
    document.getElementById('validationmessage2').style.display = 'block';
    document.getElementById('validationmessage2').innerHTML = text;
}
function hideSignInAlert()
{
    document.getElementById('validationmessage2').style.display = 'none';
    document.getElementById('validationmessage2').innerHTML = '';
}