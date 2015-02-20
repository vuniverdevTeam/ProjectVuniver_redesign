/**
 * Created by Cheese on 09.02.2015.
 */
const ALL = 0;
const PRIMARY = 1;
const SECONDARY = 2;

function passwordfield(numb)
{
	if (numb == 1) return document.getElementById('password1');
	else return document.getElementById('password2');
}

function validationmessage()
{
	return document.getElementById('validationmessage');
}

function showAlert(message, field)
{
    switch (field)
    {
        case ALL:
        {
            passwordfield(1).style.borderColor = "red";
            passwordfield(2).style.borderColor = "red";
            document.getElementById('validationmessage').innerHTML = message;
            break;
        }
        case PRIMARY:
        {
            passwordfield(1).style.borderColor = "red";
            document.getElementById('validationmessage').innerHTML = message;
            break;
        }
        case SECONDARY:
        {
            passwordfield(2).style.borderColor = "red";
            document.getElementById('validationmessage').innerHTML = message;
            break;
        }
    }
    document.getElementById('validationmessage').style.display="block";
    document.getElementById('button-register').className="btn btn-primary disabled";
    return false;
}

function isPasswordsEqual()
{
    return (passwordfield(1).value != passwordfield(2).value);
}

function isPasswordsNotEqualZero()
{
    return (passwordfield(2).value.length!=0 || passwordfield(1).value.length!=0);
}

function validatePassword()
{
    document.getElementById('button-register').className="btn btn-primary";
    document.getElementById('validationmessage').style.display="none";
    passwordfield(1).style.borderColor = "lightgray";
    passwordfield(2).style.borderColor = "lightgray";
    document.getElementById('validationmessage').innerHTML = "";
    if (passwordfield(2).value.length < 3 && passwordfield(2).value.length!=0) showAlert("Пароль має містити більше ніж 3 символи", SECONDARY);
    if (passwordfield(1).value.length < 3 && passwordfield(1).value.length!=0) showAlert("Пароль має містити більше ніж 3 символи", PRIMARY);
    if (passwordfield(2).value.length > 45) showAlert("Пароль має містити менше ніж 45 символи", SECONDARY);
    if (passwordfield(1).value.length > 45) showAlert("Пароль має містити менше ніж 45 символи", PRIMARY);
    if ( isPasswordsEqual() && isPasswordsNotEqualZero() ) showAlert("Паролі не співпадають", ALL);
    return false;
}
