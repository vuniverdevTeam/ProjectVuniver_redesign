/**
 * Created by Cheese on 20.02.2015.
 */
function dropdownToggle(obj)
{
    if (obj.className == "dropdown")
    {
        obj.className = "dropdown open";
        return false;
    }
    else
    {
        obj.className = "dropdown";
        return false;
    }
}

function hideDropdown()
{
    if (document.getElementById('usr_menu').className != "dropdown") document.getElementById('usr_menu').className = "dropdown";

}