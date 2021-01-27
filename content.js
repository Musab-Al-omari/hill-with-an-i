var colatype = prompt("choose one of these types cola-mirinda-seven-shani");
var numberofcala =prompt("how many bottles you want(number between 1 to 100");

var coladetile;
if (numberofcala > 0 && numberofcala < 25) { coladetile = "congrats you got no thing"; }
else if (numberofcala > 25 && numberofcala <=50){coladetile="congrats you got one small cola free";}
else if(numberofcala >50 && numberofcala <=75){coladetile="congrats you will enter the pull for big cola";}
else if (numberofcala>75 && numberofcala<=99){coladetile="congrats you will enter the pull for a cup of caffe from Awesome coffee house ";}
else if(numberofcala>99 &&numberofcala <=100){coladetile="congrats you will enter the pull for ticket one way to the moon";}
else (coladetile="eror404");

document.write(coladetile);
document.getElementById("order").innerText=colatype;
document.getElementById("calacaunt").innerText=numberofcala;
confirm("you will be happy ");
alert("vist us again");