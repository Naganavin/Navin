<?php
$hostname="localhost";
$username="root";
$password="";
$database="Student";
$mysqli=mysqli_connect($hostname,$username,$password,$database);

if (isset($_POST["submit"]))
{
    $Fullname=$_POST["name"];
    $Idnum=$_POST["card"];
    $Parentname=$_POST["parent"];
    $Email=$_POST["email"];
    $Phonenumber=$_POST["num"];
    $Address=$_POST["address"];
    $result=mysqli_query($mysqli,"insert into details value('$Fullname','$Idnum','$Parentname','$Email','$Phonenumber','$Address')");

if($result)
{
    echo "Registration sucessfull your details are saved....";
}
else
{
    echo "Something Wrong";
}  

}
?> 