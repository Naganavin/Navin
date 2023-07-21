function validateForm()
{
    if(!validateName() || !validateEmail()||!validatePhone() ||!validatePwd() ||!validatePwd1())
    return false;
    
}
function validateName()
{
    var name=document.getElementById("name");
    if(name.value=="")
    {
        document.getElementById("name-error").innerHTML="Enter your name to continue register";
        name.focus();
        name.style.border="solid red 3px";
        return false;
    }

if(name.value.length<3)
{
document.getElementById("name-error").innerHTML="Characters should not less than 3";
name.focus();
name.style.borderBottom="solid red 3px";
return false;
}

document.getElementById("name-error").innerHTML="";
name.style.border="solid green 3px";
 return true;
}
function validateEmail()
{
    var email=document.getElementById("email");
    if(email.value=="")
    {
        document.getElementById("email-error").innerHTML="Enter your Email";
        email.focus();
        email.style.border="solid red 3px";
        return false;
    }
document.getElementById("email-error").innerHTML="";
email.style.border="solid green 3px";
return true;
}
function validatePhone()
{
    var phone=document.getElementById("phone");
    if(phone.value=="")
    {
        document.getElementById("phone-error").innerHTML="Enter valid Number";
        phone.focus();
        phone.style.border="solid red 3px";
        return false;
    }
    if(phone.value.length>10||phone.value.length<10)
    {
        document.getElementById("phone-error").innerHTML="Enter valid number";
        phone.focus();
        phone.style.border="solid red 3px";
        return false;
    }
    document.getElementById("phone-error").innerHTML="";
    phone.style.border="solid green 3px";
    return true;

}
function validatePwd()
{
    var pwd=document.getElementById("pwd");
    if(pwd.value=="")
    {
        document.getElementById("pwd-error").innerHTML="Please create your password";
        pwd.focus();
        pwd.style.border="solid red 3px";
        return false;
    }
document.getElementById("pwd-error").innerHTML="";
pwd.style.border="solid green 3px";
return true;
}
function validatePwd1()
{
    var pwd1=document.getElementById("pwd1");
    
    if(pwd1.value!=pwd.value)
    {
        document.getElementById("pwd1-error").innerHTML="Password must be same";
        pwd1.focus();
        pwd1.style.border="solid red 3px";
        return false;
    }
   
    else (pwd1.value=pwd.value)
    {
        document.getElementById("pwd1-error").innerHTML="";
        pwd1.style.border="solid green 3px";
        return true;

    }

}
